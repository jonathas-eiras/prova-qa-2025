describe('Testes com a API do Trello via Cypress Commands', () => {
  let boardId = '';
  let cardId = '';
  let listId = '';

  it('Criar um board', () => {
    cy.createBoard('Board de Teste').then((id) => {
      boardId = id;
    });
  });

  it('Excluir um board', () => {
    cy.createBoard('Board de Teste').then((id) => {
      boardId = id;
    });
    cy.deleteBoard(boardId);
  });


  it('Criar um card', () => {
    cy.createBoard('Board para Card').then((id) => {
      boardId = id;
      cy.getListsFromBoard(boardId).then((lists) => {
        listId = lists[0].id;
        cy.createCard(listId, 'Meu Card').then((card) => {
          cardId = card.id;
        });
      });
    });
    cy.deleteBoard(boardId);
  });

  it('Excluir um card', () => {
    cy.createBoard('Board para Card').then((id) => {
      boardId = id;
      cy.getListsFromBoard(boardId).then((lists) => {
        listId = lists[0].id;
        cy.createCard(listId, 'Meu Card').then((card) => {
          cardId = card.id;
          cy.deleteCard(cardId);
          cy.deleteBoard(boardId);
        });
      });
    });
  });
});
