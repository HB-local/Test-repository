"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProcessFile = void 0;
const fs = require("fs");
const readline = require("readline");
//import * as csv from "csv-parser";
var DataType;
(function (DataType) {
    DataType["Char"] = "CHAR";
    DataType["Numc"] = "NUMC";
})(DataType || (DataType = {}));
async function ProcessFile(filename) {
    let domainDefinitions;
    // create Read Stream and Interface
    //const fileStream = fs.createReadStream(filename);
    const fileStream = fs.createReadStream(filename);
    //.pipe(csv());
    //.on('data', (row) => {
    //console.log(row);
    //return row;
    //})
    //.on('end', () => {
    //    console.log('CSV file successfully processed');
    //});
    const lineInterface = readline.createInterface({
        input: fileStream,
        crlfDelay: Infinity
    });
    // read the file line by line
    for await (const line of lineInterface) {
        //domainDefinition = line;
        console.log(line);
    }
    domainDefinitions = [];
    domainDefinitions = [];
    return domainDefinitions;
}
exports.ProcessFile = ProcessFile;
//# sourceMappingURL=ProcessFile.js.map