describe("template spec", () => {
  
  it("passes", () => {
    cy.visit("https://publisherdev.avads.live/auth/login");
    cy.get("input[name=email]").type("nasir.aslam@yopmail.com");
    cy.get("input[name=password]").type("advergic");
    cy.get("button[type=submit]").click();
    cy.contains("Property").should("have.text", "Property");
  });
  it("passes", () => {
    cy.visit("https://publisherdev.avads.live/auth/login");
    cy.get("input[name=email]").type("admin@advergic.com");
    cy.get("input[name=password]").type("Admin@$3421");
    cy.get("button[type=submit]").click();
    cy.contains("Tools").should("have.text", "Tools");
  });
});
