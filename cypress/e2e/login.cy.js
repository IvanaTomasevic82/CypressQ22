/// <reference types="Cypress" />

describe("Login functionality - Gallery App", () => {
  it("Successfull login", () => {
    cy.visit("/login");
    cy.url().should("contain", "login");

    cy.get("h1").should("have.text", "Please login");

    cy.get("label").eq(0).should("have.text", "Email");
    cy.get("label").eq(1).should("have.text", "Password");
    cy.get("button").should("have.text", "Submit");

    cy.get("#email").type("peraperic12345@gmail.com");
    cy.get("#password").type("pera12345");
    cy.get("button").click();

    // cy.get("a").contains("Logout").click();
    //cy.get('a[role="button "]').click();
  });
});
