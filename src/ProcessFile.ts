import * as fs from "fs";
import * as readline from "readline";
//import * as csv from "csv-parser";

enum DataType {
    Char = "CHAR",
    Numc = "NUMC"
}

//enum symbols {
//    comma = ","
//}

export interface IDomains {
    domname: string;
    datatype: DataType;
    leng: number;
    decimals: number;
    entitytab: string;
    convexit: string;
}

export async function ProcessFile(filename: string): Promise<IDomains[]> {
    let domainDefinitions: IDomains[];

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

    const lineInterface = readline.createInterface( {
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