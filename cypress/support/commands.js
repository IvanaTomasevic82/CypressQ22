// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

Cypress.Commands.add(
  "loginViaApi",
  (email = "testtest21@test.com", password = "Lozinka211") => {
    cy.request({
      url: "https://gallery-api.vivifyideas.com/api/auth/login",
      method: "POST",
      body: {
        email: "testtest21@test.com",
        password: "Lozinka211",
      },
    })
      .its("body")
      .then((resp) => {
        let respToken = resp.access_token;
        let tokenType = resp.token_type;
        expect(respToken).to.be.a("string");
        expect(tokenType).eq("bearer");

        window.localStorage.setItem("token", respToken);
      });
  }
);
