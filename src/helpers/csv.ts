import { parse } from "csv-parse"
import * as fs from "fs"
import * as path from "path"
import { stringify } from "csv-stringify"

export const readCSV = async function (fileName: string, headers: string[]) {
    const csvFilePath = path.resolve(__dirname, `../../files/${fileName}.csv`)

    const fileContent = fs.readFileSync(csvFilePath, { encoding: "utf-8" })

    const results: any[] = []

    return new Promise<typeof results>((resolve, reject) => {
        parse(
            fileContent,
            {
                delimiter: ",",
                columns: headers,
                fromLine: 2,
            },
            (error, res: typeof results) => {
                if (error) {
                    console.error(error)
                    reject(error.message)
                }

                res.forEach(profile => results.push(profile))
                resolve(results)
            }
        )
    })
}

export const writeCSV = async function (
    fileName: string,
    columns: string[],
    data: string[][]
) {
    const csvFilePath = path.resolve(__dirname, `../../files/${fileName}.csv`)

    const writableCSV = fs.createWriteStream(csvFilePath, { encoding: "utf-8" })

    return new Promise<boolean>((resolve, reject) => {
        const stringifier = stringify({ header: true, columns: columns })

        stringifier.on("error", err => {
            reject(err)
        })

        writableCSV.on("error", err => {
            reject(err)
        })

        data.forEach(row => {
            stringifier.write(row)
        })
        stringifier.pipe(writableCSV)
        writableCSV.on("finish", () => {
            resolve(true)
        })

        stringifier.end()
    })
}
