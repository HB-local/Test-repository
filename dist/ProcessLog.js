"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const fs = require("fs");
const readline = require("readline");
const newLogLineExp = new RegExp("^[0-2][0-9]:[0-5][0-9]:[0-5][0-9].[0-9]{3}");
const sql = 'Namespace:"http://sap.com/x4/sf/boql", statement: "';
const time = "|startquery -> ";
const repoParameterBeg = "RepoQuery:  ";
const repoTimeBeg = "} -> ";
const timeRegex = /([0-9]*)/;
const extension = ".txt";
const symbols = {
    dot: ".",
    tab: "\t",
    newLine: "\n",
    space: " ",
    comma: ",",
    arrow: "->",
};
const postfix = {
    repo: "Repo",
    sql: "SQL",
};
async function ProcessLog(fileName) {
    let sqlStatement = "";
    let sqlTime = "";
    let repoParameter = "";
    let repoTime = "";
    let sqlTailNextLine = false;
    let newFileName = "";
    // create an input Stream
    const inStream = fs.createReadStream(fileName);
    // get timestamp for further file name
    const ts = new Date().toISOString().substring(0, 19).replace(/:/g, "-");
    // generate new filename without extension
    const isourceExtension = fileName.lastIndexOf(symbols.dot);
    if (isourceExtension >= 0) {
        newFileName = fileName.substring(0, isourceExtension);
    }
    else {
        newFileName = fileName;
    }
    // File name for SQL statements and performance
    const outNameSQL = newFileName + postfix.sql + symbols.dot + ts + extension;
    // File name for parameters of repo API
    const outNameRepo = newFileName + postfix.repo + symbols.dot + ts + extension;
    // create output Stream for SQL
    const outStreamSql = fs.createWriteStream(outNameSQL, { flags: "w" });
    // create output Stream for REPO
    const outStreamRepo = fs.createWriteStream(outNameRepo, { flags: "w" });
    const lineInterface = readline.createInterface({
        input: inStream,
        crlfDelay: Infinity,
    });
    // read the file line by line
    for await (const line of lineInterface) {
        // try to find parameter for repo API
        const iParamRepo = line.indexOf(repoParameterBeg);
        if (iParamRepo >= 0) {
            repoParameter = line.substring(iParamRepo + repoParameterBeg.length);
            const iTimeRepo = repoParameter.indexOf(repoTimeBeg);
            if (iTimeRepo >= 0) {
                const rest = repoParameter.substring(iTimeRepo + repoTimeBeg.length);
                const duration = timeRegex.exec(rest);
                if (duration !== null) {
                    repoTime = duration[0];
                }
                repoParameter = repoParameter.slice(0, iTimeRepo + 1);
            }
            outStreamRepo.write(repoParameter + symbols.tab + repoTime + symbols.newLine);
            repoParameter = "";
            repoTime = "";
        }
        else {
            // check if there is tail of SQL statement
            if (sqlStatement &&
                !sqlTime &&
                sqlTailNextLine &&
                !line.match(newLogLineExp)) {
                // join rest of SQL statement
                sqlStatement = sqlStatement + symbols.space + line;
            }
            sqlTailNextLine = false;
            // try to find SQL-statement
            const isql = line.indexOf(sql);
            if (isql >= 0) {
                sqlStatement = line.substring(isql + sql.length).slice(0, -1);
                sqlTailNextLine = true;
            }
            else {
                const itime = line.indexOf(time);
                if (itime >= 0) {
                    const rest = line.substring(itime + time.length);
                    const duration = timeRegex.exec(rest);
                    if (duration !== null) {
                        sqlTime = duration[0];
                    }
                }
            }
        }
        // add new statement record to the file
        if (sqlStatement && sqlTime) {
            // write it into file!!!
            outStreamSql.write(sqlStatement + symbols.tab + sqlTime + symbols.newLine);
            sqlStatement = "";
            sqlTime = "";
            sqlTailNextLine = false;
        }
    }
}
(async () => {
    if (process.argv.length < 3) {
        console.log("Specify an input file name");
    }
    else {
        await ProcessLog(process.argv[2]);
    }
})().catch((e) => {
    console.log(e);
});
//# sourceMappingURL=ProcessLog.js.map