class RegisterPage {
  get emailInputField() {
    return cy.get("#first-name");
  }

  get lastNameInputField() {
    return cy.get("#last-name");
  }

  get emailInputField() {
    return cy.get("#email");
  }

  get passwordInputField() {
    return cy.get("#password");
  }

  get passwordConfirmationInputField() {
    return cy.get("#password-confirmation");
  }

  get CheckBox() {
    return cy.get(".form-check-input");
  }
}

export const registerPage = new RegisterPage();
