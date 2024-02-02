/// <reference types="Cypress" />

describe("Register via API", () => {
  it("Successfull register via API", () => {
    cy.request({
      url: "https://gallery-api.vivifyideas.com/api/auth/register",
      method: "POST",
      body: {
        first_name: "Ivana",
        last_name: "Tomasevic",
        email: "testtest2221111@test.com",
        password: "Lozinka211",
        password_confirmation: "Lozinka211",
        terms_and_conditions: true,
      },
    })
      .its("body")
      .then((resp) => {
        let respToken = resp.access_token;
        let tokenType = resp.token_type;
        expect(respToken).to.be.a("string");
        expect(tokenType).eq("bearer");
      });
  });
});
