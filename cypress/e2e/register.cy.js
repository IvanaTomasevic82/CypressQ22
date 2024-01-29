/// <reference types="Cypress" />

import { registerPage } from "../page-objects/registerPage";

const locators = require("../fixtures/locators.json");

describe("Registration functionality - Gallery App", () => {
  it.only("Unsuccessful registration - invalid email address", () => {
    cy.visit("/register");

    //ASERTACIJE
    // provera da li smo na ispravnoj adresi
    cy.url().should("contain", "/register");
    //provera da li je neki tekst tacan
    cy.get("h1").should("have.text", "Register");
    cy.get("label").eq(0).should("have.text", "First Name");
    cy.get("label").eq(1).should("have.text", "Last Name");
    //primer negativne asertacije - NE SADRZI
    // cy.url().should("not.contain", "/register");

    // hvatanje elemenata preko ID-ja === #vrednost ID-ja
    registerPage.emailInputField.type("Marko");
    registerPage.lastNameInputField.type("Djuric");
    registerPage.emailInputField.type("markoqa13+223@gmail.com");
    registerPage.passwordInputField.type("Marko123");
    registerPage.passwordConfirmationInputField.type("Marko123");
    // hvatanje elemenata preko klase === .nazivKlase
    registerPage.CheckBox.check();

    // hvatanje elementa pomocu taga + vrednost nekog njegovog propertija
    // cy.get('a[role="button "]');

    // hvatanje elemenata preko html tag-a
    cy.get("button").click();

    // cy.url().should("not.contain", "/register");
  });
});

it("Unsuccessful registration - password too short", () => {
  cy.visit("/register");

  cy.get(locators.registrationPage.firstNameInputField).type("Ivana");
  cy.get(locators.registrationPage.lastNameInputField).type("Tomasevic");
  cy.get(locators.registrationPage.emailInputField).type("test222@test.com");
  cy.get(locators.registrationPage.passwordInputField).type("Lozinka211");
  cy.get(locators.registrationPage.passwordConfirmationInputField).type(
    "Lozinka211"
  );
  cy.get(locators.registrationPage.termsCheckBox).check();
  cy.get(locators.registrationPage.submitButton).click();
});

it("Unsuccessful registration - wrong password confirmation", () => {
  cy.visit("/register");

  cy.get("#first-name").type("Marko");
  cy.get("#last-name").type("Djuric");
  cy.get("#email").type("markoqa13+22322@gmail.com");
  cy.get("#password").type("Marko123");
  cy.get("#password-confirmation").type("Marko1232");
  cy.get(".form-check-input").check();
  cy.get("button").click();
});

it("Successful registration", () => {
  cy.visit("/register");

  cy.get("#first-name").type("Marko");
  cy.get("#last-name").type("Djuric");
  cy.get("#email").type("markoqa13+22312321@gmail.com");
  cy.get("#password").type("Marko123");
  cy.get("#password-confirmation").type("Marko123");
  cy.get(".form-check-input").check();
  cy.get("button").click();

  cy.wait(3000);

  cy.get("a").contains("Logout");
});
