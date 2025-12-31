describe("template spec", () => {
  it("Failed", () => {
    cy.visit("https://publisherdev.avads.live/auth/login");
    cy.get("input[name=email]").type("admin@advergic.com");
    cy.get("input[name=password]").type("Admin@$342");
    cy.get("button[type=submit]").click();
    cy.contains("Invalid credentials").should("be.visible");
  });
  it("Failed", () => {
    cy.visit("https://publisherdev.avads.live/auth/login");
    cy.get("input[name=email]").type("");
    cy.get("input[name=password]").type("Admin@$3421");
    cy.get("button[type=submit]").click();
    cy.contains("Enter Pasasword").should("be.visible");
  });
  it("Failed", () => {
    cy.visit("https://publisherdev.avads.live/auth/login");
    cy.get("input[name=email]").type("admin@advergic.com");
    cy.get("input[name=password]").type("");
    cy.get("button[type=submit]").click();
    cy.contains("Enter Email").should("be.visible");
  }); 
  it("Failed", () => {
    cy.visit("https://publisherdev.avads.live/auth/login");
    cy.get("input[name=email]").type("adminjsdfhj");
    cy.get("input[name=password]").type("Admin@$3421");
    cy.get("button[type=submit]").click();    
    cy.contains("Invalid email format").should("be.visible");
  });
  it("Failed", () => {
    cy.visit("https://publisherdev.avads.live/auth/login");
    cy.get("input[name=email]").type("qaw12@gmail.com");
    cy.get("input[name=password]").type("qwer123");
    cy.get("button[type=submit]").click();
    cy.contains("Invalid Username or Password").should("be.visible");
  });
});
