Feature: Criar campanha Vazia 

   Scenario: CT01 - Criar campanha do tipo Vazia 
      Given que o usuário esteja na tela home 
      And clicar no menu lateral esquerdo em "campanhas"
      When preencher os dados na tela 
      Then o sistema deve criar a campanha do tipo vazia 

   Scenario: CT02 - Pesquisar campanha tipo Vazia
        Given que estou na tela de lista de campanhas
        When digitar no campo "Nome da campanha": <nome da campanha CT01>
        And clicar no botão "Pesquisar"
        Then o sistema deve exibir a campanha pesquisada

    Scenario: CT03 - Editar campanha tipo Vazia
        Given que estou na tela de lista de campanha 
        And selecionoar a campanha desejada 
        When clico no icone da lupa
        Then o sistema deve abrir a campanha para edição

 


