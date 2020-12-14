"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.process = void 0;
const fs = require("fs");
const readline = require("readline");
const sql = 'Namespace:"http://sap.com/x4/sf/boql", statement: "';
const time = "|startquery -> ";
let stmt = "";
async function process() {
    const fileStream = fs.createReadStream("log.txt");
    const rl = readline.createInterface({
        input: fileStream,
        crlfDelay: Infinity,
    });
    for await (const line of rl) {
        // find index of SQL statement
        const isql = line.indexOf(sql);
        if (isql >= 0) {
            stmt = line.substring(isql + sql.length).slice(0, -1);
        }
        else {
            const itime = line.indexOf(time);
            if (itime >= 0) {
                const rest = line.substring(itime + time.length);
                const duration = rest.match(/([0-9]*)/);
                if (duration !== null) {
                    console.log(stmt, "\t", duration[0]);
                }
            }
        }
    }
}
exports.process = process;
(async () => {
    await process();
})().catch((e) => {
    console.log(e);
});
function exportToCsv(filename, rows) {
    if (!rows || !rows.length) {
        return;
    }
    const separator = ',';
    const keys = Object.keys(rows[0]);
    const csvContent = keys.join(separator) +
        '\n' +
        rows.map(row => {
            return keys.map(k => {
                let cell = row[k] === null || row[k] === undefined ? '' : row[k];
                cell = cell instanceof Date
                    ? cell.toLocaleString()
                    : cell.toString().replace(/"/g, '""');
                if (cell.search(/("|,|\n)/g) >= 0) {
                    cell = `"${cell}"`;
                }
                return cell;
            }).join(separator);
        }).join('\n');
    const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
    if (navigator.msSaveBlob) { // IE 10+
        navigator.msSaveBlob(blob, filename);
    }
    else {
        const link = document.createElement('a');
        if (link.download !== undefined) {
            // Browsers that support HTML5 download attribute
            const url = URL.createObjectURL(blob);
            link.setAttribute('href', url);
            link.setAttribute('download', filename);
            link.style.visibility = 'hidden';
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);
        }
    }
}
//# sourceMappingURL=ConvertLogV1.js.map