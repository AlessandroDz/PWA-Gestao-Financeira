# Personal Finance Manager

A personal finance management application developed with a focus on privacy, customization, simplicity, and offline access.

## About the Project

Personal Finance Manager is a project that aims to provide a flexible tool for organizing and monitoring personal finances, allowing each user to adapt the application to their needs and the way they manage their money.

The goal is to bring together tools for tracking expenses, financial transactions, and investments in one place, with a customizable experience and a preference for local data storage.

The objective is to develop a practical, accessible, and adaptable application that gives users greater control over their information and how they organize their finances.

## Motivation

Financial organization is an important part of everyday life, but everyone has different needs, habits, and ways of managing money. A tool that works well for one person may not meet another person's needs.

In addition, financial information is personal and requires careful consideration of privacy, data storage, and access.

These considerations inspired the idea of developing a personal finance manager based on four core principles:

- **Privacy:** Prioritize local storage of financial records, reducing the need to share personal data with external servers.
- **Offline Availability:** Allow access to core features without constantly relying on an internet connection.
- **Simplicity:** Provide an intuitive interface that makes it easier to record, review, and organize financial information.
- **Customization:** Allow users to adapt categories, settings, and tracking methods to their financial circumstances, rather than forcing them to follow a rigid organizational model.

In addition to addressing these needs, this project is an opportunity to apply knowledge gained at university and through independent study by building a real-world application and continuously improving programming and software engineering skills.

## Objectives

- Centralize the organization of personal financial information.
- Enable users to record, review, and track expenses and other financial transactions.
- Provide tools for monitoring investments, viewing performance, and accessing financial reports.
- Allow users to customize the application according to their needs and preferences.
- Explore integrations with payment cards and financial services to simplify the consolidation of financial information.
- Investigate Open Finance integration to retrieve financial data through authorized connections.
- Prioritize local data storage and reduce unnecessary exposure of personal information.
- Develop an application that supports offline functionality.
- Apply software development best practices, code organization, data modeling, and data persistence.
- Strengthen programming knowledge acquired at university and through independent study by building a practical project.

## Features

The project is currently under development. Features are divided into those already implemented and those planned for future development.

### Implemented

- [x] Initial project structure using React, TypeScript, and Vite.
- [x] Initial configuration of Dexie.js for working with the local database.
- [x] Initial tests for saving records to the local database.

### Planned

**Financial Management**
- [ ] Create, edit, view, and delete expenses.
- [ ] Organize transactions using customizable categories.
- [ ] View the complete transaction history.
- [ ] Generate spending summaries by period.
- [ ] Customize financial settings and organizational preferences.

**Cards and Investments**
- [ ] Explore card integrations to import or retrieve expenses, depending on the availability of services and APIs.
- [ ] View and organize investment information.
- [ ] Generate investment summaries and reports.
- [ ] Investigate Open Finance integration to connect accounts and retrieve financial information with user authorization.

**User Experience and Data Storage**
- [ ] Develop an interface optimized for iPhone.
- [ ] Support offline access to core features.
- [ ] Enable installation on the iPhone Home Screen.
- [ ] Develop a data backup and recovery strategy.
- [ ] Evaluate additional security measures to protect financial information.

## Technologies Used

- **React:** Builds the application interface.
- **TypeScript:** Provides static typing and code organization.
- **Vite:** Development environment and build tool.
- **Dexie.js:** A library that simplifies access to and management of the local database.
- **IndexedDB:** Browser technology for storing structured data locally.

## Privacy and Data Storage

The project's architecture prioritizes local storage of financial information, aiming to reduce reliance on external servers and give users greater control over their data.

Offline functionality is another core objective, allowing essential features to be used without an internet connection once the necessary setup is complete.

Future integrations with financial services will be evaluated based on their technical requirements, authorization mechanisms, and privacy implications. These integrations may require an internet connection and external services.

Local storage alone does not guarantee absolute protection. Therefore, development will also consider risks related to device access, browser security, and data backups.

## Getting Started

### Prerequisites

- Node.js and npm installed.
- Git installed, if you want to clone the repository.

### Installation

Clone the repository:

```bash
git clone REPOSITORY_URL
```

Navigate to the project directory:

```bash
cd PROJECT_DIRECTORY
```

Install the dependencies:

```bash
npm install
```

Start the development server:

```bash
npm run dev
```

Vite will display the local address in the terminal where you can access the application through your browser.

## Project Status

**In development.**

The project is in its early stages. The application structure has been configured, and initial local data persistence tests have been performed. Financial management features, customization, integrations, and offline functionality will be implemented and validated incrementally.

## License

The project's license has not yet been determined.



#Portugues
# Gerenciador Financeiro Pessoal

Aplicação de gerenciamento financeiro pessoal desenvolvida com foco em privacidade, personalização, simplicidade e funcionamento offline.

## Sobre o projeto

O Gerenciador Financeiro Pessoal é um projeto que busca oferecer uma ferramenta flexível para organizar e acompanhar a vida financeira, permitindo que cada usuário adapte a aplicação às suas necessidades e à maneira como administra seu dinheiro.

A proposta é reunir, em um único lugar, recursos para acompanhar despesas, movimentações financeiras e investimentos, com uma experiência personalizável e prioridade para o armazenamento local dos dados.

O objetivo é desenvolver uma aplicação prática, acessível e adaptável, que ofereça ao usuário maior controle sobre suas informações e sobre a forma como organiza suas finanças.

## Motivação

A organização financeira é uma parte importante da vida cotidiana, mas cada pessoa possui necessidades, hábitos e formas diferentes de administrar o próprio dinheiro. Uma ferramenta que funciona bem para alguém pode não atender às necessidades de outra pessoa.

Além disso, informações financeiras são pessoais e exigem cuidados com privacidade, armazenamento e acesso aos dados.

A partir dessas questões, surgiu a ideia de desenvolver um gerenciador financeiro que priorize quatro princípios:

- **Privacidade:** priorizar o armazenamento local das informações financeiras, reduzindo a necessidade de compartilhar dados pessoais com servidores externos.
- **Disponibilidade offline:** permitir o acesso às principais funcionalidades sem depender constantemente de uma conexão com a internet.
- **Simplicidade:** oferecer uma interface intuitiva que facilite o registro, a consulta e a organização das informações financeiras.
- **Personalização:** permitir que o usuário adapte categorias, configurações e formas de acompanhamento à sua realidade financeira, em vez de precisar se ajustar a um modelo rígido de organização.

Além de atender a essas necessidades, o projeto também representa uma oportunidade de aplicar conhecimentos adquiridos na universidade e nos estudos independentes, desenvolvendo uma aplicação real e evoluindo continuamente as habilidades de programação e engenharia de software.

## Objetivos

- Centralizar a organização das informações financeiras pessoais.
- Permitir o registro, a consulta e o acompanhamento de despesas e outras movimentações financeiras.
- Oferecer recursos para acompanhar investimentos, visualizar resultados e consultar relatórios financeiros.
- Permitir a personalização da aplicação conforme as necessidades e preferências de cada usuário.
- Explorar integrações com cartões e serviços financeiros para facilitar a consolidação das informações.
- Estudar a integração com o Open Finance para obter dados financeiros por meio de conexões autorizadas.
- Priorizar o armazenamento local e reduzir a exposição desnecessária de dados pessoais.
- Desenvolver uma aplicação com suporte ao funcionamento offline.
- Aplicar boas práticas de programação, organização de código, modelagem de dados e persistência de informações.
- Consolidar conhecimentos de programação adquiridos na universidade e nos estudos independentes por meio de um projeto prático.

## Funcionalidades

O projeto está em desenvolvimento. As funcionalidades abaixo estão divididas entre o que já foi implementado e o que está planejado.

### Implementado

- [x] Estrutura inicial do projeto com React, TypeScript e Vite.
- [x] Configuração inicial do Dexie.js para trabalhar com o banco de dados local.
- [x] Testes iniciais de gravação de registros no banco de dados local.

### Planejado

**Gerenciamento financeiro**
- [ ] Cadastro, edição, consulta e exclusão de despesas.
- [ ] Organização das movimentações por categorias personalizáveis.
- [ ] Consulta do histórico completo de movimentações.
- [ ] Resumos de gastos por período.
- [ ] Personalização das configurações e da organização financeira.

**Cartões e investimentos**
- [ ] Explorar a integração com cartões para importar ou consultar gastos, conforme a disponibilidade dos serviços e das APIs.
- [ ] Consulta e organização de informações sobre investimentos.
- [ ] Relatórios e resumos de investimentos.
- [ ] Estudar a integração com o Open Finance para conectar contas e consultar informações financeiras mediante autorização.

**Experiência e armazenamento**
- [ ] Interface adaptada para iPhone.
- [ ] Funcionamento offline das funcionalidades principais.
- [ ] Instalação na Tela de Início do iPhone.
- [ ] Estratégia de backup e recuperação dos dados.
- [ ] Avaliação de medidas adicionais de segurança e proteção das informações.

## Tecnologias utilizadas

- **React:** construção da interface da aplicação.
- **TypeScript:** tipagem estática e organização do código.
- **Vite:** ambiente de desenvolvimento e ferramenta de build.
- **Dexie.js:** biblioteca que simplifica o acesso e o gerenciamento do banco de dados local.
- **IndexedDB:** tecnologia de armazenamento de dados estruturados no navegador.

## Privacidade e armazenamento

A arquitetura do projeto prioriza o armazenamento local das informações financeiras, buscando reduzir a dependência de servidores externos e dar ao usuário maior controle sobre seus dados.

O funcionamento offline é outro objetivo central, permitindo que as principais funcionalidades sejam utilizadas sem conexão com a internet após a configuração necessária.

As integrações futuras com serviços financeiros serão avaliadas considerando suas necessidades técnicas, os mecanismos de autorização e os impactos sobre a privacidade. Essas integrações poderão exigir conexão com a internet e serviços externos.

O armazenamento local, por si só, não garante proteção absoluta. Por isso, o desenvolvimento também deverá considerar os riscos relacionados ao acesso ao dispositivo, à segurança do navegador e à realização de backups.

## Como executar o projeto

### Pré-requisitos

- Node.js e npm instalados.
- Git instalado, caso deseje clonar o repositório.

### Instalação

Clone o repositório:

```bash
git clone URL_DO_REPOSITORIO
```

Entre na pasta do projeto:

```bash
cd PASTA_DO_PROJETO
```

Instale as dependências:

```bash
npm install
```

Inicie o ambiente de desenvolvimento:

```bash
npm run dev
```

O Vite exibirá no terminal o endereço local para acessar a aplicação pelo navegador.

## Status do projeto

**Em desenvolvimento.**

O projeto está em sua fase inicial, com a estrutura da aplicação configurada e os primeiros testes de persistência local realizados. As funcionalidades de gerenciamento financeiro, personalização, integrações e utilização offline serão implementadas e validadas gradualmente.

## Licença

A licença do projeto ainda será definida.
