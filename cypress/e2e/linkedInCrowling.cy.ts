describe("Linked-In Crowling", function () {
    it("Login and check profile URLs", function () {
        // Step 1: Read Users List
        // const URLs = await getProfileURLs()
        // console.log(URLs)

        //Step 2: login to Linked In
        cy.visit("http://www.linkedin.com/login")

        const email = Cypress.env("EMAIL")
        const password = Cypress.env("PASSWORD")

        cy.get("#username").type(email)
        cy.get("#password").type(password)

        cy.get("button[type='submit']").click()

        //Step 3:
        cy.visit("http://www.linkedin.com/profile1")
        // if (cy.get("h1")) finds page
        // else could not find page
    })
})
