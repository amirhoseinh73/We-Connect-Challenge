import { Profiles } from "./@types"
import { shuffleArray } from "./helpers/global"
import { readCSV, writeCSV } from "./helpers/csv"

const getProfiles = async function () {
    try {
        const headers = ["firstName", "lastName", "url"]

        const results: Profiles[] = await readCSV("profiles", headers)

        return results
    } catch (err) {
        console.error(err)
    }
}

export const writeNewProfiles = async function () {
    const profiles = await getProfiles()
    if (!profiles) return

    const shuffledProfiles = shuffleArray(profiles) as Profiles[]

    const profileUrls = []
    for (let i = 0; i < shuffledProfiles.length; i++) {
        profileUrls.push([shuffledProfiles[i].url])
    }

    try {
        const isWroted = await writeCSV("profileURLs", ["url"], profileUrls)

        if (isWroted) console.log("success")
    } catch (err) {
        console.error(err)
    }
}
