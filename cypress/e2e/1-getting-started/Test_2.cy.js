describe("Log in", function(){
    it("Sing in", function() {
    cy.visit('https://byndyusoft.com/')
      cy.contains('Заказать презентацию').click()
     cy
      .get('a').should('contain', '8 800 775-15-21')
      .get('a').should('contain', 'sales@byndyusoft.com');
    });
}) ;