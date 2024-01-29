/// <reference types="Cypress" />
const locators = require("../fixtures/locatorslogin.json");
describe("Login functionality - Gallery App", () => {
  beforeEach(() => {
    cy.visit("/login");
    cy.get(locators.loginPage.emailInputField).type("test222@test.com");
    cy.get(locators.loginPage.passwordInputField).type("Lozinka211");
    cy.get(locators.loginPage.submitButton).click();
  });

  it("Successfull login", () => {
    cy.url().should("contain", "login");

    cy.get(locators.loginPage.headingInputField).should(
      "have.text",
      "Please login"
    );

    cy.get(locators.loginPage.labelInputField)
      .eq(0)
      .should("have.text", "Email");
    cy.get(locators.loginPage.labelInputField)
      .eq(1)
      .should("have.text", "Password");
    cy.get(locators.loginPage.submitButton).should("have.text", "Submit");

    // cy.get("a").contains("Logout").click();
    //cy.get('a[role="button "]').click();
  });
});
