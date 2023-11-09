export const isValidHttpUrl = function (str: string) {
    try {
        const url = new URL(str)

        return url.protocol === "http:" || url.protocol === "https:"
    } catch (_) {
        return false
    }
}

export const checkValidProfile = function () {
    return new Cypress.Promise<boolean>(resolve => {
        cy.get("body").then(body => {
            cy.log("findH1", body.find("h1.text-heading-xlarge").length)
            if (!body.find("h1.text-heading-xlarge").length) return resolve(false)
            resolve(true)
        })
    })
}

export const checkNewConnection = function () {
    return new Cypress.Promise<boolean>(resolve => {
        cy.get("div.pvs-profile-actions").then(profileSectionElems => {
            cy.log("pending", profileSectionElems.find("button[aria-label^='Pending']").length)
            // for pendings
            if (profileSectionElems.find("button[aria-label^='Pending']").length)
                return resolve(false)

            cy.get("div.pvs-profile-actions button[aria-label='More actions'].artdeco-button--2")
                .click()
                .then(moreElem => {
                    // for old connections
                    if (moreElem.find("[aria-label^='Remove']").length) return resolve(false)

                    resolve(true)
                })
        })
    })
}

export const sendConnectionRequest = function (invitationMessage: string) {
    return new Cypress.Promise(resolve => {
        cy.get("div.pvs-profile-actions [aria-label^='Invite']")
            .click({ force: true })
            .then(() => {
                cy.get("button[aria-label='Add a note']")
                    .click()
                    .then(() => {
                        cy.get("textarea#custom-message")
                            .type(invitationMessage)
                            .then(() => {
                                cy.get("button[aria-label='Send now']").click()
                                resolve()
                            })
                    })
            })
    })
}
