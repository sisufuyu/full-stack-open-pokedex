describe('Pokedex', () => {
  it('front page can be opened', () => {
    cy.visit('http://localhost:8080')
    cy.contains('ivysaur')
    cy.contains('Pokémon and Pokémon character names are trademarks of Nintendo.')
  })

  it('can navigate from main page to the page of a particular Pokemon', () => {
    cy.visit('http://localhost:8080')
    cy.contains('ivysaur').click()
    cy.location('pathname').should('eq', '/pokemon/ivysaur')
    cy.contains('overgrow')
  })
})