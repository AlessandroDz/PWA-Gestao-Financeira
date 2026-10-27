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
