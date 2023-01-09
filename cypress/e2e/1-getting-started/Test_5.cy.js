describe('Contact information verification', () => {
    it('should verify the contact information on the Byndyusoft website', () => {
        cy.visit('https://www.google.ru/');

        // Type Byndyusoft in the search box and follow the first link
        cy.get('input[type="text"]').type('Byndyusoft{enter}');
        cy.get(' input[type="text"]').first().click();

        // Click on the yellow button to open the contact form
        // cy.get('#order-presentation-button').click();

        // Retrieve the contact information and assert that it is correct
        cy.get('a').should('contain', '8 800 775-15-21');
        cy.get('a').should('contain', 'sales@byndyusoft.com');
    });
});