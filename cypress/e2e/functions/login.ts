export const loginToLinkedIn = function () {
    cy.visit("http://www.linkedin.com/login")

    const email = Cypress.env("EMAIL")
    const password = Cypress.env("PASSWORD")

    cy.get("#username").type(email)
    cy.get("#password").type(password)

    cy.get("button[type='submit']").click()

    cy.log("Logged In Successfully")
}
