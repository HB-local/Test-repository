"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const fs = require("fs");
const readline = require("readline");
const excel = require("exceljs");
const newLogLineRegex = new RegExp("^[0-2][0-9]:[0-5][0-9]:[0-5][0-9].[0-9]{3}");
const sql = 'Namespace:"http://sap.com/x4/sf/boql", statement: "';
const time = "|startquery -> ";
const timeRegex = /([0-9]*)/;
const format = ".xlsx";
const logList = new Array(0);
let statement = "";
let performance = 0;
function exportToXls(filename, rows) {
    if (!rows || !rows.length) {
        return;
    }
    const workbook = new excel.Workbook();
    const worksheet = workbook.addWorksheet("Performance");
    // Put all the data into Excel
    logList.forEach((e, index) => {
        // row 1 is the header.
        if (index === 0) {
            worksheet.addRow(["Statement", "Performance"]);
        }
        worksheet.addRow([e.statement, e.performance]);
    });
    // Format Cells
    worksheet.getColumn(1).width = 100;
    worksheet.getColumn(1).alignment = { wrapText: true };
    worksheet.getColumn(2).width = 20;
    worksheet.getRow(1).font = { bold: true };
    // reading and writing is promise based.
    workbook.xlsx.writeFile(filename + format);
    console.log("XLSX file", filename + format, "has been saved");
}
async function processLog(filename) {
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
            !line.match(newLogLineRegex)) {
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
                    performance = parseFloat(duration[0]);
                }
            }
        }
        // add new statement record to the CSV file
        if (statement && performance) {
            logList.push({ statement: statement, performance: performance });
            statement = "";
            performance = 0;
            sqlInProcess = false;
        }
    }
    // sort by performance (dec)
    logList.sort((a, b) => b.performance - a.performance);
}
(async () => {
    if (process.argv.length < 3) {
        console.log("Specify an input file name");
    }
    else {
        await processLog(process.argv[2]);
        exportToXls(process.argv[2], logList);
    }
})().catch((e) => {
    console.log(e);
});
//# sourceMappingURL=ConvertLog2xls.js.map