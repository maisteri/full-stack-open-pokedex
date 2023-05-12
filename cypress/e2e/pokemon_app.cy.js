describe('Pokedex', function () {
  it('front page can be opened', function () {
    cy.visit('http://localhost:5000')
    cy.contains('ivysaur')
    cy.contains(
      'Pokémon and Pokémon character names are trademarks of Nintendo.'
    )
  })

  it('one can navigate from the main page to the page of a particular Pokemon, ivysaur', function () {
    cy.visit('http://localhost:5000')
    cy.contains(
      'Pokémon and Pokémon character names are trademarks of Nintendo.'
    )
    cy.contains('ivysaur').click()
    cy.contains('ivysaur')
    cy.contains('chlorophyll')
    cy.contains('overgrow')
  })
})

