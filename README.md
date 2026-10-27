# Personal Finance Manager

A personal finance management application developed with a focus on privacy, customization, simplicity, and offline access.

**Language:** English | [Português (Brasil)](README.pt-BR.md)

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


# Gerenciador Financeiro Pessoal

Aplicação de gerenciamento financeiro pessoal desenvolvida com foco em privacidade, personalização, simplicidade e acesso offline.

**Idioma:** [English](README.md) | Português (Brasil)

## Sobre o Projeto

O Gerenciador Financeiro Pessoal é um projeto que busca oferecer uma ferramenta flexível para organizar e acompanhar as finanças pessoais, permitindo que cada usuário adapte a aplicação às suas necessidades e à maneira como administra seu dinheiro.

A proposta é reunir, em um único lugar, recursos para acompanhar despesas, movimentações financeiras e investimentos, oferecendo uma experiência personalizável e priorizando o armazenamento local dos dados.

O objetivo é desenvolver uma aplicação prática, acessível e adaptável, que proporcione ao usuário maior controle sobre suas informações e sobre a forma como organiza suas finanças.

## Motivação

A organização financeira é uma parte importante da vida cotidiana, mas cada pessoa possui necessidades, hábitos e formas diferentes de administrar o próprio dinheiro. Uma ferramenta que funciona bem para alguém pode não atender às necessidades de outra pessoa.

Além disso, as informações financeiras são pessoais e exigem cuidados relacionados à privacidade, ao armazenamento e ao acesso aos dados.

Essas questões motivaram a criação de um gerenciador financeiro baseado em quatro princípios fundamentais:

- **Privacidade:** priorizar o armazenamento local dos registros financeiros, reduzindo a necessidade de compartilhar dados pessoais com servidores externos.
- **Disponibilidade offline:** permitir o acesso às principais funcionalidades sem depender constantemente de uma conexão com a internet.
- **Simplicidade:** oferecer uma interface intuitiva que facilite o registro, a consulta e a organização das informações financeiras.
- **Personalização:** permitir que o usuário adapte categorias, configurações e formas de acompanhamento à sua realidade financeira, em vez de precisar seguir um modelo rígido de organização.

Além de buscar atender a essas necessidades, o projeto representa uma oportunidade de aplicar conhecimentos adquiridos na universidade e por meio de estudos independentes, desenvolvendo uma aplicação prática e aprimorando continuamente as habilidades de programação e engenharia de software.

## Objetivos

- Centralizar a organização das informações financeiras pessoais.
- Permitir o registro, a consulta e o acompanhamento de despesas e outras movimentações financeiras.
- Oferecer recursos para acompanhar investimentos, visualizar seu desempenho e consultar relatórios financeiros.
- Permitir que cada usuário personalize a aplicação de acordo com suas necessidades e preferências.
- Explorar integrações com cartões e serviços financeiros para facilitar a consolidação das informações.
- Estudar a integração com o Open Finance para obter dados financeiros por meio de conexões autorizadas.
- Priorizar o armazenamento local e reduzir a exposição desnecessária de informações pessoais.
- Desenvolver uma aplicação com suporte ao funcionamento offline.
- Aplicar boas práticas de desenvolvimento de software, organização de código, modelagem de dados e persistência de informações.
- Consolidar conhecimentos de programação adquiridos na universidade e por meio de estudos independentes, desenvolvendo um projeto prático.

## Funcionalidades

O projeto está em desenvolvimento. As funcionalidades estão divididas entre aquelas já implementadas e aquelas planejadas para as próximas etapas.

### Implementado

- [x] Estrutura inicial do projeto com React, TypeScript e Vite.
- [x] Configuração inicial do Dexie.js para trabalhar com o banco de dados local.
- [x] Testes iniciais de gravação de registros no banco de dados local.

### Planejado

**Gestão Financeira**

- [ ] Cadastro, edição, consulta e exclusão de despesas.
- [ ] Organização das movimentações por categorias personalizáveis.
- [ ] Consulta do histórico completo de movimentações.
- [ ] Geração de resumos de gastos por período.
- [ ] Personalização das configurações e da organização financeira.

**Cartões e Investimentos**

- [ ] Explorar integrações com cartões para importar ou consultar despesas, conforme a disponibilidade de serviços e APIs.
- [ ] Consultar e organizar informações sobre investimentos.
- [ ] Gerar resumos e relatórios de investimentos.
- [ ] Estudar a integração com o Open Finance para conectar contas e consultar informações financeiras mediante autorização do usuário.

**Experiência do Usuário e Armazenamento de Dados**

- [ ] Desenvolver uma interface adaptada para iPhone.
- [ ] Implementar o acesso offline às principais funcionalidades.
- [ ] Permitir a instalação na Tela de Início do iPhone.
- [ ] Desenvolver uma estratégia de backup e recuperação de dados.
- [ ] Avaliar medidas adicionais de segurança para proteger as informações financeiras.

## Tecnologias Utilizadas

- **React:** construção da interface da aplicação.
- **TypeScript:** tipagem estática e organização do código.
- **Vite:** ambiente de desenvolvimento e ferramenta de build.
- **Dexie.js:** biblioteca que simplifica o acesso e o gerenciamento do banco de dados local.
- **IndexedDB:** tecnologia do navegador utilizada para armazenar dados estruturados localmente.

## Privacidade e Armazenamento de Dados

A arquitetura do projeto prioriza o armazenamento local das informações financeiras, buscando reduzir a dependência de servidores externos e proporcionar ao usuário maior controle sobre seus dados.

O funcionamento offline também é um dos principais objetivos, permitindo que as funcionalidades essenciais sejam utilizadas sem conexão com a internet após a configuração necessária.

As futuras integrações com serviços financeiros serão avaliadas considerando seus requisitos técnicos, mecanismos de autorização e impactos sobre a privacidade. Essas integrações poderão exigir conexão com a internet e o uso de serviços externos.

O armazenamento local, por si só, não garante proteção absoluta. Por isso, o desenvolvimento também deverá considerar os riscos relacionados ao acesso ao dispositivo, à segurança do navegador e à realização de backups.

## Como Executar o Projeto

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

Inicie o servidor de desenvolvimento:

```bash
npm run dev
```

O Vite exibirá no terminal o endereço local para acessar a aplicação pelo navegador.

## Status do Projeto

**Em desenvolvimento.**

O projeto está em sua fase inicial. A estrutura da aplicação foi configurada e os primeiros testes de persistência local foram realizados. As funcionalidades de gestão financeira, personalização, integrações e utilização offline serão implementadas e validadas gradualmente.

## Licença

A licença do projeto ainda será definida.
