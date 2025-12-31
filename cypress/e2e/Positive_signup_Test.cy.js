describe("Signup spec", () => {  
  it("passes", () => {
    cy.visit("https://publisherdev.avads.live/auth/signup");
    cy.get("input[name=firstName]").type("AbuBakar");
    cy.get("input[name=lastName]").type("Siddique");
    cy.get("input[type=tel]").type("24644664663");
    cy.get("input[name=email]").type("abubakar903@yopmail.com");
    cy.get("input[name=password]").type("advergic");
    cy.get("input[name=referral]").type("Nasir");
    cy.get("button[type=submit]").click();  });
});


