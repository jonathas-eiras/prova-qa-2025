# prova-qa-2025

Questão 1:

### Foi utilizado o uso da Gherkin para melhor entendimento dos cenários.

## Cenários para validar a funcionalidade do aplicativo bancário

#### Feature: Transferência de valores entre correntistas

##### Scenario: Transferência com dados válidos
Given que o saldo do usuário é R$ 200,00  
And que o cliente destino é "João"  
And o valor da transferência é "100"  
And a data de efetivação é "hoje"  
When o usuário clicar em "Transferir"  
Then a transferência deve ser efetuada com sucesso  
And o saldo atualizado para R$ 100,00  

##### Scenario: Transferência com valor igual ao saldo
Given que o saldo do usuário é R$ 200,00  
And o valor informado é R$ 200,00  
When o usuário clicar em "Transferir"  
Then a transferência deve ser confirmada  
And o saldo deve ir para R$ 0,00  

##### Scenario: Transferência com data futura
Given que o usuário preenche o formulário corretamente  
And a data é "amanhã"  
When clicar em "Transferir"  
Then a transferência deve ser agendada com sucesso  

##### Scenario: Cancelar operação
When o usuário clicar em "Cancelar"  
Then os campos devem ser limpos ou retornar à tela anterior  

##### Scenario: Valor maior que o saldo
Given que o saldo do usuário é R$ 200,00  
And o valor informado é R$ 300,00  
When clicar em "Transferir"  
Then o sistema deve exibir a mensagem "Saldo insuficiente"  

##### Scenario: Valor igual a zero
Given que o valor da transferência é 0  
When clicar em "Transferir"  
Then o sistema deve exibir a mensagem "Valor inválido"  

##### Scenario: Cliente destino vazio
Given que o campo "Cliente destino" está vazio  
When clicar em "Transferir"  
Then o sistema deve impedir o envio da transferência  

##### Scenario: Data de efetivação no passado
Given que a data informada é anterior ao dia atual  
When clicar em "Transferir"  
Then o sistema deve exibir "Data inválida"  

##### Scenario: Campos com dados inválidos
Given que o campo "Valor" contém "cem reais"  
When clicar em "Transferir"  
Then o sistema deve exibir "Formato inválido"  

##### Scenario: Todos os campos vazios
When o usuário clicar em "Transferir" sem preencher nada  
Then o botão deve estar desabilitado ou exibir erros de validação  

##### Scenario: Transferência sem conexão com a internet
Given que o dispositivo está offline  
When clicar em "Transferir"  
Then o sistema deve exibir "Sem conexão com a internet"  

##### Scenario: Verificação de acessibilidade
When o usuário navega usando teclado e leitor de tela  
Then todos os elementos devem ser acessíveis e legívei  
