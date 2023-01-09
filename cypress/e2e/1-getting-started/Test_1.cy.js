describe("Log in", function(){
    it("Sing in", function(){
        cy.visit("https://www.google.ru/")
        cy.get('input[type="text"]').type('Byndyusoft')
        cy.contains('Поиск').click()
          })   
    })
