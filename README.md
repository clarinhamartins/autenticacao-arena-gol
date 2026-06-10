# Arena Gol — Tela de Autenticação

Este repositório contém o código da interface de Login e Cadastro da plataforma Arena Gol, desenvolvida para o acompanhamento da Copa do Mundo 2026. O projeto foi construído utilizando tecnologias nativas (HTML, CSS e JavaScript), com foco no cumprimento dos requisitos de usabilidade, validação de dados e tratamento de eventos.

---

## Tecnologias Utilizadas

* **HTML5:** Utilização de tags semânticas para organizar a estrutura da página.
* **CSS3:** Uso de variáveis para gerenciamento de cores e layout responsivo que se adapta a computadores e dispositivos móveis.
* **JavaScript:** Programação baseada em eventos para o controle das validações em tempo real e alternância entre as telas.
* **Lucide Icons:** Biblioteca utilizada via link (CDN) para exibição dos ícones da interface.

---

## Requisitos Implementados no Sistema

Este projeto compreende exclusivamente o desenvolvimento do fluxo visual e lógico das telas de Login e Cadastro. O sistema realiza as validações de dados locais, simula o estado de carregamento e exibe alertas de sucesso ao submeter os formulários, porém não realiza a integração com banco de dados e não redireciona para uma plataforma interna. Trata-se estritamente da interface de autenticação (Frontend).

### 1. Painel de Login
* **Foco Automático:** O campo de e-mail recebe o cursor assim que a página é carregada através do atributo nativo de foco.
* **Identificação Clara:** O campo de usuário exibe o texto explicativo informando a necessidade de e-mail corporativo ou usuário.
* **Ocultação de Senha:** O campo de senha inicia oculto por padrão.
* **Lembrar de Mim:** Inclusão de uma caixa de seleção para manter o usuário conectado, posicionada logo acima da ação principal.
* **Botão de Envio:** O botão possui o maior destaque visual da página através da cor verde de destaque.
* **Indicador de Carregamento:** Ao clicar em entrar, o sistema simula uma requisição mudando o texto do botão e exibindo um ícone animado de carregamento.
* **Link de Recuperação:** O link para redefinição de senha foi posicionado de forma discreta ao lado da identificação do campo.
* **Acesso Social:** Opções para autenticação via Google e GitHub integradas em um bloco separado por uma linha divisória.

### 2. Painel de Cadastro
* **Nome Completo:** Campo de texto com orientação clara de preenchimento.
* **Validação de E-mail:** O sistema verifica se o texto digitado corresponde a um formato de e-mail válido. Caso o usuário digite algo incorreto, o campo recebe uma borda vermelha de aviso.
* **Critérios de Senha:** Exibição de um texto auxiliar informando a obrigatoriedade de no mínimo 8 caracteres, contendo letras e números.
* **Confirmação de Senha:** O JavaScript monitora os dois campos de senha em tempo real. Se os valores forem diferentes, uma mensagem de erro é exibida na tela.
* **Termos de Uso:** Inclusão de caixa de seleção obrigatória vinculada ao link dos termos.
* **Acesso Social Secundário:** Opções para cadastro via Google e GitHub posicionadas no rodapé da seção.

### 3. Comportamentos do JavaScript
* **Botão Desabilitado:** Os botões de envio começam bloqueados e só são liberados quando todos os critérios de validação do formulário são atendidos pelo usuário.
* **Visualização da Senha:** O ícone de olho altera o formato do campo de senha para texto, permitindo visualizar o que foi digitado, funcionando tanto no login quanto no cadastro.
* **Tratamento de Preenchimento Automático:** O código monitora se o navegador preencheu os campos salvos automaticamente, garantindo que o botão seja liberado mesmo sem o usuário digitar.
* **Alternância de Telas:** A mudança entre os formulários de login e cadastro ocorre na mesma página, limpando o estado visual dos ícones de senha ao alternar.

---

## Estrutura de Arquivos

* `index.html`: Código de estrutura dos formulários e elementos textuais.
* `style.css`: Configuração visual, espaçamentos e regras de responsividade.
* `script.js`: Toda a lógica de comportamento, validações e escuta de eventos.
* `README.md`: Documentação do projeto

---

## Como Executar

1. Baixe ou clone os arquivos do repositório.
2. Abra o arquivo `index.html` em qualquer navegador web para testar as validações e o comportamento do sistema.