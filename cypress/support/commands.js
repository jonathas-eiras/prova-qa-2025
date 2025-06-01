const API_KEY = Cypress.env('API_KEY');
const TOKEN = Cypress.env('TOKEN');

Cypress.Commands.add('createBoard', (name) => {
  return cy.request({
    method: 'POST',
    url: `/boards/?name=${name}&key=${API_KEY}&token=${TOKEN}`
  }).then((res) => res);
});

Cypress.Commands.add('deleteBoard', (boardId) => {
  return cy.request({
    method: 'DELETE',
    url: `/boards/${boardId}?key=${API_KEY}&token=${TOKEN}`
  }).then((resp) => resp);
});

Cypress.Commands.add('getListsFromBoard', (boardId) => {
  return cy.request({
    method: 'GET',
    url: `/boards/${boardId}/lists?key=${API_KEY}&token=${TOKEN}`
  }).then((res) => res.body);
});

Cypress.Commands.add('createCard', (listId, cardName) => {
  return cy.request({
    method: 'POST',
    url: `/cards?idList=${listId}&name=${cardName}&key=${API_KEY}&token=${TOKEN}`
  }).then((res) => res);
});

Cypress.Commands.add('deleteCard', (cardId) => {
  return cy.request({
    method: 'DELETE',
    url: `/cards/${cardId}?key=${API_KEY}&token=${TOKEN}`
  }).then((resp) => resp);
});
