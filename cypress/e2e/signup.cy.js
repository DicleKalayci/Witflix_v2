describe('Signup Page:', () => {
  beforeEach(() => {
    cy.visit('http://localhost:5173/signup');
  });
  it('submits form', () => {

    //Act
    cy.get("[data-cy='email-input']").type("diclesavasci@gmail.com");
    cy.get("[data-cy='password-input']").type("Sddbjd*12");
    cy.get("[data-cy='submit-button']").should("not.be.disabled").click();

    //Assert
    cy.url().should("contain", "welcome");

  });

    it('gets 1 error on isvalid email', () => {

  

    //Act
    cy.get("[data-cy='email-input']").type("diclesavasci@gm");
    

    //Assert
    cy.get("[data-cy='error']").should('have.length', 1);

  });

    it('gets correct error message on isvalid email', () => {

  

    //Act
    cy.get("[data-cy='email-input']").type("diclesavasci@gm");
    

    //Assert
    cy.get("[data-cy='error']").should('contain', 'Geçerli bir email adresi giriniz.');

  });
});