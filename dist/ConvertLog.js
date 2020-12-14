"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const fs = require("fs");
const readline = require("readline");
const newLogLineExp = new RegExp("^[0-2][0-9]:[0-5][0-9]:[0-5][0-9].[0-9]{3}");
const sql = 'Namespace:"http://sap.com/x4/sf/boql", statement: "';
const time = "|startquery -> ";
const timeRegex = /([0-9]*)/;
const escapeRegex = /("|,|\n)/g;
const format = ".csv";
const logList = new Array(0);
let statement = "";
let performance = 0;
function exportToCsv(filename, rows) {
    if (!rows || !rows.length) {
        return;
    }
    const separator = ",";
    const keys = Object.keys(rows[0]);
    const csvContent = keys.join(separator) +
        "\n" +
        rows
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            .map((row) => {
            return keys
                .map((k) => {
                let cell = row[k] === null || row[k] === undefined ? "" : row[k];
                cell =
                    cell instanceof Date
                        ? cell.toLocaleString()
                        : cell.toString().replace(/"/g, '""');
                if (cell.search(escapeRegex) >= 0) {
                    cell = `"${cell}"`;
                }
                return cell;
            })
                .join(separator);
        })
            .join("\n");
    fs.writeFile(filename + format, csvContent, function (err) {
        if (err) {
            return console.log(err);
        }
        console.log("CSV file", filename + format, "has been saved");
    });
}
async function ProcessLog(filename) {
    let sqlInProcess = false;
    // create Read Stream and Interface
    const fileStream = fs.createReadStream(filename);
    const lineInterface = readline.createInterface({
        input: fileStream,
        crlfDelay: Infinity,
    });
    // read the file line by line
    for await (const line of lineInterface) {
        // check if there is tail of SQL statement
        if (statement &&
            !performance &&
            sqlInProcess &&
            !line.match(newLogLineExp)) {
            // join rest of SQL statement
            statement = statement + " " + line;
        }
        sqlInProcess = false;
        // try to find SQL-statement
        const isql = line.indexOf(sql);
        if (isql >= 0) {
            statement = line.substring(isql + sql.length).slice(0, -1);
            sqlInProcess = true;
        }
        else {
            const itime = line.indexOf(time);
            if (itime >= 0) {
                const rest = line.substring(itime + time.length);
                const duration = timeRegex.exec(rest);
                if (duration !== null) {
                    performance = parseInt(duration[0]);
                }
            }
        }
        // add new statement record to the CSV file
        if (statement && performance) {
            //TODO: write it into file!!!
            logList.push({ statement: statement, performance: performance });
            statement = "";
            performance = 0;
            sqlInProcess = false;
        }
    }
    // sort by performance (dec)
    // logList.sort((a: ILog, b: ILog) => b.performance - a.performance);
}
(async () => {
    if (process.argv.length < 3) {
        console.log("Specify an input file name");
    }
    else {
        await ProcessLog(process.argv[2]);
        exportToCsv(process.argv[2], logList);
    }
})().catch((e) => {
    console.log(e);
});
//# sourceMappingURL=ConvertLog.js.map