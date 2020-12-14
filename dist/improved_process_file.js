"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/* eslint-disable no-console */
const fs_1 = require("fs");
const readline_1 = require("readline");
const sql = 'Namespace:"http://sap.com/x4/sf/boql", statement: "';
const time = "|startquery -> ";
const regex = new RegExp("([0-9]*)");
async function processLog(fileName) {
    const inStream = fs_1.createReadStream(fileName);
    const ts = new Date().toISOString().substring(0, 19).replace(/:/g, "");
    const outName = fileName + "." + ts + ".data";
    const outStream = fs_1.createWriteStream(outName, { flags: "w" });
    const rl = readline_1.createInterface({
        input: inStream,
        crlfDelay: Infinity,
    });
    let stmt = "";
    for await (const line of rl) {
        const isql = line.indexOf(sql);
        if (isql >= 0) {
            stmt = line.substring(isql + sql.length).slice(0, -1);
        }
        else {
            const itime = line.indexOf(time);
            if (itime >= 0) {
                const rest = line.substring(itime + time.length);
                const duration = regex.exec(rest);
                if (duration !== null) {
                    outStream.write(stmt + "\t" + duration[0] + "\n");
                }
            }
        }
    }
}
(async () => {
    if (process.argv.length < 3) {
        console.log("Specify an input file name");
    }
    else {
        await processLog(process.argv[2]);
    }
})().catch((e) => {
    console.log(e);
});
//# sourceMappingURL=improved_process_file.js.map