import { readCSV } from "./helpers/csv"
import * as dotenv from "dotenv"
dotenv.config()

// writeNewProfiles()

export const getProfileURLs = async function () {
    try {
        const headers = ["url"]

        const results: string[] = await readCSV("profileURLs", headers)

        console.log(results)

        return results
    } catch (err) {
        console.error(err)
    }
}

getProfileURLs()
