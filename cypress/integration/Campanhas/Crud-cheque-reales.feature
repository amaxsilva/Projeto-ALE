 Feature: Campanha cheque de reales
 
     Feature Description
 @ChequedeReales
    Scenario: CT01 - Criar campanha código - cheque de reales
        Given que o usuário esteja na tela home 
        And clicar no menu lateral esquerdo em "campanhas" e "lista de campanhas"
        When preencher os dados
        Then o sistema deve criar a campanha do tipo cheque reales

    Scenario: CT02 - Pesquisar campanha código - cheque de reales
        Given que estou na tela de lista de campanhas
        When digitar no campo "Nome da campanha": <nome da campanha CT01>
        And clicar no botão "Pesquisar"
        Then o sistema deve exibir a campanha pesquisada

    Scenario: CT03 - Editar campanha código - cheque de reales
        Given que estou na tela de lista de campanha 
        And selecionoar a campanha desejada 
        When clico no icone da lupa
        Then o sistema deve abrir a campanha para edição
        
    