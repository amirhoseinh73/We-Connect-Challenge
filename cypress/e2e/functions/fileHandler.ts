import { MESSAGES, RESULTS_FILENAME } from "./config"

export const convertStrToArr = function (str: string) {
    // string to array of rows
    return str.split("\n").map(row => row.trim())
}

export const readCsvCypress = function (rows: string[]) {
    const rowsWithoutHeader = rows.slice(1)

    const cleanUpRows = rowsWithoutHeader.map(row => {
        const allRows = row
            .split(",") // split each row by ","
            .filter(Boolean) // ignore start and end ","

        const cleanUpColumns = allRows.map(col => col.trim()) // remove whitespace each column

        return cleanUpColumns
    })

    return cleanUpRows.filter(row => row.length) // remove blank rows
}

export const writeResults = function (completed: string[], errors: string[]) {
    const resultsHead = [
        "New Connections",
        "Invalid URLs",
        "Invalid Profiles",
        "Old Connections",
        "total success",
        "total fails",
    ]
    const results = [
        completed.length,
        errors.filter(msg => msg === MESSAGES.invalidURL).length,
        errors.filter(msg => msg === MESSAGES.invalidProfile).length,
        errors.filter(msg => msg === MESSAGES.oldConnection).length,
        completed.length,
        errors.length,
    ]
    cy.writeFile(RESULTS_FILENAME, `${resultsHead.join(",")}\n${results.join(",")}`)
}
