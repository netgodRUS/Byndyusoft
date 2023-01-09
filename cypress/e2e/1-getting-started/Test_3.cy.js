describe('Contact information', () => {
    it('should be displayed correctly on the homepage', () => {
        cy.visit('http://byndyusoft.com/home');

        // Retrieve the contact information and assert that it is in the correct format
        cy.get('#phone-number').should('have.text', /^\d{3}-\d{3}-\d{4}$/);
        cy.get('#email-address').should('have.text', /^\S+@\S+\.\S+$/);
    });
});

