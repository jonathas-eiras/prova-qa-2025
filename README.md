# 🧪 Automação de Testes com Cypress e API do Trello

Projeto de automação de testes utilizando **Cypress** e a **API do Trello**, com foco nas operações básicas de boards e cards.

## 🚀 Objetivos

Automatizar os seguintes cenários via API:
- ✅ Cadastrar um board
- ✅ Cadastrar um card
- 🗑️ Excluir um card
- 🗑️ Excluir um board

## 🧰 Tecnologias Utilizadas

- [Cypress](https://www.cypress.io/)
- [API Trello](https://developers.trello.com/docs/api-introduction)
- Node.js (ambiente de execução)

## 📁 Estrutura dos Arquivos

cypress/  
├── e2e/  
│   └── trello-api.cy.js  
├── support/  
│   └── commands.js  
|   └── e2e.js  

## 🧪 Como Executar os Testes

- Instale as dependências:  
```npm install```

- Execute os testes:  
```npx cypress open``` 

- Visualize relatorio:   

    - Baixar o arquivo no artifacts do Actions.  

  <img width="520" alt="Screenshot 2025-06-01 at 18 24 13" src="https://github.com/user-attachments/assets/e8581ab3-7f5c-4d30-a31f-d566064a0829" />  

    - Abrir o arquivo index.html no Firefox.  

## 📌 Observações

Os testes são baseados em chamadas HTTP para a API REST do Trello.
Certifique-se de que as listas existam antes de criar cards (caso necessário).
