import * as fs from "fs";
import * as readline from "readline";

const newLogLineExp = new RegExp("^[0-2][0-9]:[0-5][0-9]:[0-5][0-9].[0-9]{3}");
const sql = 'Namespace:"http://sap.com/x4/sf/boql", statement: "';
const time = "|startquery -> ";
const repoParameter = "RepoQuery:  ";
const repoPerformance = "} -> ";
const timeRegex = /([0-9]*)/;
const sourceFormat = ".txt";
const format = ".txt";
enum symbols {
  dot = ".",
  tab = "\t",
  newLine = "\n",
  space = " ",
  comma = ",",
  arrow = "->",
}
enum postfix {
  repo = "Repo",
  sql = "SQL",
}

interface ITargetFormat {
  outStream: fs.WriteStream;
  statement: string;
  iStatement: number;
  performance: string;
  iPerformance: number;
}

async function ProcessLog(fileName: string): Promise<void> {
  // create an input Stream
  const inStream = fs.createReadStream(fileName);
  // get timestamp for further file name
  const ts = new Date().toISOString().substring(0, 19).replace(/:/g, "");

  let newFileName = "";
  const inewFileName = fileName.indexOf(sourceFormat);
  if (inewFileName >= 0) {
      newFileName = fileName.slice(0,-inewFileName);
  } else { newFileName = fileName }

  // File name for SQL statements and performance
  const outNameSQL = newFileName + postfix.sql + symbols.dot + ts + format;
  // File name for parameters of repo API
  const outNameRepo = newFileName + postfix.repo + symbols.dot + ts + format;
  // create output Stream for BOF
  const sqlInfo: ITargetFormat = {
    outStream: fs.createWriteStream(outNameSQL, { flags: "w" }),
    statement: "",
    iStatement: 0,
    performance: "",
    iPerformance: 0,
  };
  // create output Stream for REPO
  const repoInfo: ITargetFormat = {
    outStream: fs.createWriteStream(outNameRepo, { flags: "w" }),
    statement: "",
    iStatement: 0,
    performance: "",
    iPerformance: 0,
  };
  const lineInterface = readline.createInterface({
    input: inStream,
    crlfDelay: Infinity,
  });
  let sqlInProcess = false;

  // read the file line by line
  for await (const line of lineInterface) {
    // check if there is tail of SQL statement
    if (
      sqlInfo.statement &&
      !sqlInfo.performance &&
      sqlInProcess &&
      !line.match(newLogLineExp)
    ) {
      // join rest of SQL statement
      sqlInfo.statement = sqlInfo.statement + symbols.space + line;
    }

    sqlInProcess = false;

    // try to find SQL-statement
    const isql = line.indexOf(sql);
    if (isql >= 0) {
      sqlInfo.statement = line.substring(isql + sql.length).slice(0, -1);
      sqlInProcess = true;
    } else {
      const itime = line.indexOf(time);
      if (itime >= 0) {
        const rest = line.substring(itime + time.length);
        const duration = timeRegex.exec(rest);
        if (duration !== null) {
          sqlInfo.performance = duration[0];
        }
      }
    }

    // try to find parameter for repo API
    repoInfo.iStatement = line.indexOf(repoParameter);
    if (repoInfo.iStatement >= 0) {
      repoInfo.statement = line
        .substring(repoInfo.iStatement + repoParameter.length);
      const iRepoPerformance = repoInfo.statement.indexOf(repoPerformance);
      if (iRepoPerformance >= 0) {
        
        const rest = repoInfo.statement.substring(
          iRepoPerformance + repoPerformance.length
        );
       
        const duration = timeRegex.exec(rest);
        if (duration !== null) {
          repoInfo.performance = duration[0];
        }
        repoInfo.statement = repoInfo.statement.slice(0, iRepoPerformance + 1);
      }
    }

    // add new statement record to the file
    if (sqlInfo.statement && sqlInfo.performance) {
      // write it into file!!!
      sqlInfo.outStream.write(
        sqlInfo.statement + symbols.tab + sqlInfo.performance + symbols.newLine
      );
      sqlInfo.statement = "";
      sqlInfo.performance = "";
      sqlInProcess = false;
    }

    // add new parameter record to the second file
    if (repoInfo.statement && repoInfo.performance) {
      repoInfo.outStream.write(
        repoInfo.statement +
          symbols.tab +
          repoInfo.performance +
          symbols.newLine
      );
      repoInfo.statement = "";
      repoInfo.performance = "";
    }
  }
}

(async (): Promise<void> => {
  if (process.argv.length < 3) {
    console.log("Specify an input file name");
  } else {
    await ProcessLog(process.argv[2]);
  }
})().catch((e) => {
  console.log(e);
});
