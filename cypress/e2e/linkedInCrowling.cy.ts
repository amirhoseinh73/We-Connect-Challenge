import { isValidHttpUrl } from "../../src/helpers/global"
import { MESSAGES, MESSAGE_FILENAME, PROFILE_URL_FILENAME } from "./config"
import { loginToLinkedIn } from "./login"
import { convertStrToArr, readCsvCypress, writeResults } from "./fileHandler"
import { checkNewConnection, checkValidProfile, sendConnectionRequest } from "./validationHandler"

describe("Linked-In Crowling", () => {
    let invitationMessage = "default invitation message"
    const profilesURL: string[] = []

    // Step 1: Read Users List && custom message
    before(() => {
        cy.readFile(MESSAGE_FILENAME).then((str: string) => (invitationMessage = str))

        cy.readFile(PROFILE_URL_FILENAME)
            .then((str: string) => convertStrToArr(str))
            .then(rows => readCsvCypress(rows))
            .each((url: string[]) => profilesURL.push(url[0]))
    })

    it("Login and check profile URLs", async () => {
        //Step 2: login to Linked In
        loginToLinkedIn()

        //Step 3:
        const errors: string[] = []
        const completed: string[] = []
        for (const url of profilesURL) {
            if (!isValidHttpUrl(url)) {
                errors.push(MESSAGES.invalidURL)
                continue
            }

            cy.visit(url)

            const isValidProfile = await checkValidProfile()
            cy.log("profile404", isValidProfile)
            if (!isValidProfile) {
                errors.push(MESSAGES.invalidProfile)
                continue
            }

            const isNewConnection = await checkNewConnection()
            if (!isNewConnection) {
                errors.push(MESSAGES.oldConnection)
                continue
            }

            await sendConnectionRequest(invitationMessage)
            completed.push(url)
        }

        writeResults(completed, errors)
    })
})
