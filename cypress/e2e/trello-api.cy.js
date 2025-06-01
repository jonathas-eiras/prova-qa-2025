describe('Testes com a API do Trello via Cypress Commands', () => {
  let boardId = '';
  let cardId = '';
  let listId = '';

  it('Criar um board', () => {
    cy.createBoard('Board de Teste').then((response) => {
      boardId = response.body.id;
      expect(response.status).to.equal(200);
      cy.deleteBoard(boardId);
    });

  });

  it('Excluir um board', () => {
    cy.createBoard('Board de Teste').then((response) => {
      boardId = response.body.id;
      cy.deleteBoard(boardId).then((response) => {
        expect(response.status).to.equal(200)
      });
    });
  });


  it('Criar um card', () => {
    cy.createBoard('Board para Card').then((response) => {
      boardId = response.body.id;
      cy.getListsFromBoard(boardId).then((lists) => {
        listId = lists[0].id;
        cy.createCard(listId, 'Meu Card').then((response) => {
          cardId = response.body.id;
          expect(response.status).to.equal(200)
        });
      });
      cy.deleteBoard(boardId);
    });
  });

  it('Excluir um card', () => {
    cy.createBoard('Board para Card').then((response) => {
      boardId = response.body.id;
      cy.getListsFromBoard(boardId).then((lists) => {
        listId = lists[0].id;
        cy.createCard(listId, 'Meu Card').then((response) => {
          cardId = response.body.id;
          cy.deleteCard(cardId).then((response) => {
            expect(response.status).to.equal(200);
          });
        });
      });
      cy.deleteBoard(boardId);
    });
  });
});
