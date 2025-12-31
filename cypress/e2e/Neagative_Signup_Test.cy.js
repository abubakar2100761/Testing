describe("Negative signup spec", () => {  
  it("passes", () => {
    cy.intercept('POST', '/api/auth/signup').as('getUsers');
    cy.visit("https://publisherdev.avads.live/auth/signup");
    cy.get("input[name=firstName]").type("AbuBakar");
    cy.get("input[name=lastName]").type("Siddique");
    cy.get("input[type=tel]").type("24644664663");
    cy.get("input[name=email]").type("abubakar700@yopmail.com");
    cy.get("input[name=password]").type("advergic");
    cy.get("input[name=referral]").type("Nasir");
    cy.get("button[type=submit]").click();
    cy.wait('@getUsers').then((interception) => {
      if(interception.response.statusCode === 400) {
        cy.log('User with email or username already exists');
      } else {
        cy.log('Signup successful');
      }
  });
  });
   it("passes", () => {
    cy.visit("https://publisherdev.avads.live/auth/signup");
    cy.get("input[name=firstName]").type("ali");
    cy.get("input[type=tel]").type("323566767");
    cy.get("input[name=email]").type("abubkar2@yopmail.com");
    cy.get("input[name=password]").type("advergic");
    cy.get("input[name=referral]").type("Nasir");
    cy.get("button[type=submit]").click();
    cy.should('contain', 'Last name is required');
  })
  it("passes", () => {
    cy.visit("https://publisherdev.avads.live/auth/signup");
    cy.get("input[name=firstName]").type("ali");
    cy.get("input[name=lastName]").type("usman");
    cy.get("input[name=email]").type("abubkakr@yopmail.com");
    cy.get("input[name=password]").type("advergic");
    cy.get("input[name=referral]").type("Nasir");
    cy.get("button[type=submit]").click();
    cy.should('contain', 'Phone number required');
  })
  it("passes", () => {
    cy.visit("https://publisherdev.avads.live/auth/signup");
    cy.get("input[name=lastName]").type("usman");
    cy.get("input[type=tel]").type("032585249828");
    cy.get("input[name=email]").type("abubkakr@yopmail.com");
    cy.get("input[name=password]").type("advergic");
    cy.get("input[name=referral]").type("Nasir");
    cy.get("button[type=submit]").click();
    cy.should('contain', 'First name is required');
  })
    it("passes", () => {
    cy.visit("https://publisherdev.avads.live/auth/signup");
    cy.get("input[name=firstName]").type("ali");
    cy.get("input[name=lastName]").type("usman");
    cy.get("input[type=tel]").type("323566767");
    cy.get("input[name=email]").type("abubkar2");
    cy.get("input[name=password]").type("advergic");
    cy.get("input[name=referral]").type("Nasir");
    cy.get("button[type=submit]").click();
    cy.should('contain', 'Invalid email format');
  })
    it("passes", () => {
    cy.visit("https://publisherdev.avads.live/auth/signup");
    cy.get("input[name=firstName]").type("ali");
    cy.get("input[name=lastName]").type("usman");
    cy.get("input[type=tel]").type("323566767");
    cy.get("input[name=email]").type("abubkar2@yopmail.com");
    cy.get("input[name=password]").type("adv");
    cy.get("input[name=referral]").type("Nasir");
    cy.get("button[type=submit]").click();
    cy.should('contain', 'Password must be at least 6 characters');
  })
 it("passes", () => {
    cy.visit("https://publisherdev.avads.live/auth/signup");
    cy.get("button[type=submit]").click();
    cy.should('contain', 'All fields are required');
  })
  
});

