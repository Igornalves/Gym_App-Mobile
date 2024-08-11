# Projeto de Aplicativo Mobile para Academia 

Bom este projeto se refere a uma interface funcional para atender a uma academia de forma completa, tambem e um projeto feito para conhecimento mais aprofundados na tecnologia de desenvolvimento hibrido para mobile.

## Índice

- [Tecnologias e Ferramentas Utilizadas](#tecnologias-e-ferramentas-utilizadas)
- [Estrutura do Projeto](#estrutura-do-projeto)
- [Pré-requisitos](#pré-requisitos)
- [Instalação e Configuração](#instalação-e-configuração)
- [Execução do Projeto](#execução-do-projeto)

## Tecnologias e Ferramentas Utilizadas

Foi Utilizado no projeto varias tecnologias para desenvolvimento das interfaces e sua conexao com o Back-end:

<div style="display: inline_block"  align="center">
  <img align="center" alt="TypeScript" height="49" width="51" src="https://skillicons.dev/icons?i=typescript">
  <img align="center" alt="React" height="49" width="51" src="https://skillicons.dev/icons?i=react">
  <img align="center" alt="Python" height="49" width="51" src="https://skillicons.dev/icons?i=nodejs">
  <img align="center" alt="Python" height="49" width="51" src="https://skillicons.dev/icons?i=figma">
  <img align="center" alt="Python" height="49" width="51" src="https://skillicons.dev/icons?i=styledcomponents">
  <img align="center" alt="Python" height="49" width="51" src="https://skillicons.dev/icons?i=svg">
</div>

<br>

- [React Native](#https://reactnative.dev/docs/environment-setup)
- [Expo](#https://docs.expo.dev/)
- [gluestack-ui](#https://gluestack.io/)
- [react-navigation](#https://reactnavigation.org/docs/getting-started/)
- [vector-icons](#https://icons.expo.fyi/Index)
- [react-native-svg-transformer](#https://www.npmjs.com/package/react-native-svg-transformer)
- [styled-components](#https://styled-components.com/docs)

## Estrutura do Projeto

Toda a sua arquitetura de pagina e seu desing foi feito como prototipacao no Figma Community
no projeto [Ignite Gym](#https://figma.com/design/gnFbyGC1i5IdhIepGyB0rG/Ignite-Gym-(Community)?node-id=37-6&t=ibNmFWSpycz5UZyI-0)
onde foi acompanhado o processo de criacao da interface e tambem para implementacao de APP real para um cliente ficticio

<div>
<img align="center" alt="Python" src="./src/assets/imagem do figma.png">
</div>

<br>

Aqui abaixo estao algums videos de como a inteface estar rodando: 

<video src="./src/assets/Vídeo sem título ‐ Feito com o Clipchamp.mp4" controls="controls" style="max-width: 100%; height: auto;">
</video>

## Pré-requisitos

Algums Pré-requisitos importantes para vc poder rodar o projeto na sua maquina local seria vc ter instalado as seguintes ferramentas que sao: 

- [Node.js](#https://nodejs.org/en/download/package-manager/current)
<br>
ambiente de execução JavaScript que permite executar código JavaScript fora de um navegador
<br>
<br>

- [Expo Go](#https://expo.dev/go)
<br>
aplicativo móvel que permite testar e visualizar aplicativos React Native em desenvolvimento diretamente em dispositivos Android e iOS sem a necessidade de compilar ou instalar o aplicativo completo
<br>
<br>

- [Vs.code](#https://code.visualstudio.com/download)
<br>
editor de código-fonte leve, mas poderoso, desenvolvido pela Microsoft. É amplamente utilizado por desenvolvedores devido à sua flexibilidade, extensibilidade e excelente suporte para diversas linguagens de programação
<br>
<br>

- [Git](#https://git-scm.com/downloads)
<br>
sistema de controle de versão distribuído, que permite que desenvolvedores rastreiem as mudanças no código-fonte durante o desenvolvimento de software. Ele é amplamente utilizado por equipes de desenvolvimento para colaborar de forma eficiente e segura, mantendo o histórico de alterações e facilitando o gerenciamento de versões do software.
<br>
<br>

## Executando o Projeto de forma local 

primeiro passo para vc conseguir executar o projeto de forma local seria usando o git instalado na sua maquina para fazer um clone do projeto para alguma pasta que vc deseja fazer isso

crie uma pasta: 

<div>
<img align="center" alt="Python" src="https://www.ciabyte.com.br/imagens/pastas-windows-explorer.png">
</div>

<br>

Apos cria sua pasta vc vai entra no vscode para utilizar o seguint comando no terminal 

```powershell
git clone https://github.com/Igornalves/Gym_App-Mobile.git
```

Com o projeto ja estando clonado vc agora vc poder instalar todas as dependencias do projeto usando o seguinte comandado

```terminal
npm install 
```

agora com todas as dependencias instaladas vc pode executar o projeto de forma completa 

OBS:. a versao do Expo mais a do Expo Go tem que estar sincronizadas, Ex:. SDK:51 / "expo": "~51.0.22". Desta forma o seu APP vai funcinar de forma completa e local 

```
npm run start 
```

Logo apos isso vc vera uma opcao para conectar o seu APP usando o QR code para localizar o seu App rodado na rede local 

<div>
<img align="center" alt="Python" src="https://miro.medium.com/v2/resize:fit:1400/1*RLn8J9mFSo6O9N6jf7Pomw.png">
</div>

<br>

Desta forma agora vc podera usar o aplicativo e tambem fazeer alteracoes no codigo fonte do projeto.
