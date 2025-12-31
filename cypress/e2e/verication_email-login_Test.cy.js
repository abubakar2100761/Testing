describe("Login spec", () => {  
  it("passes", () => {
    cy.visit("https://publisherdev.avads.live/auth/verify-email?token=OadqXNkTvtdcZziyhXLypA");
    cy.contains("button", "Click here to login").should("be.visible").click();
    cy.get("input[name=email]").type("abubakar901@yopmail.com");
    cy.get("input[name=password]").type("advergic");
    cy.get("button[type=submit]").click();
    cy.contains("Complete Your Publisher Profile").should('have.text', 'Complete Your Publisher Profile');
  });
});