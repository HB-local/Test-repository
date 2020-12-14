/* eslint-disable no-console */
import { createReadStream, createWriteStream } from "fs";
import { createInterface } from "readline";

const sql = 'Namespace:"http://sap.com/x4/sf/boql", statement: "';
const time = "|startquery -> ";
const regex = new RegExp("([0-9]*)");

async function processLog(fileName: string): Promise<void> {
    const inStream = createReadStream(fileName);
    const ts = new Date().toISOString().substring(0, 19).replace(/:/g, "");
    const outName = fileName + "." + ts + ".data";
    const outStream = createWriteStream(outName, { flags: "w" });

    const rl = createInterface({
        input: inStream,
        crlfDelay: Infinity,
    });

    let stmt = "";
    for await (const line of rl) {
        const isql = line.indexOf(sql);
        if (isql >= 0) {
            stmt = line.substring(isql + sql.length).slice(0, -1);
        } else {
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

(async (): Promise<void> => {
    if (process.argv.length < 3) {
        console.log("Specify an input file name");
    } else {
        await processLog(process.argv[2]);
    }
})().catch((e) => {
    console.log(e);
});


