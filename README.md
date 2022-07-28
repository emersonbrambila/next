# Informações do teste

- Utilizar os dados do .env.example para criar seu .env
- Implementar campo de senha na criação e edição de usuário.
- Só deve enviar o campo de senha na edição caso o usuário insira uma senha.
- Implementar loading na listagem principal e ao carregar edição de usuário.


## Informações adicionais


Este é um projeto [Next.js](https://nextjs.org/) feito com [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

# Importante - Branchs

## Iniciando

Instale as dependências utilizando:

```bash
npm i
```

Para rodar o servidor de desenvolvimento:

```bash
npm run dev
```

Abra [http://localhost:3000](http://localhost:3000) no seu navegador para ver o resultado.

## CSS e Estilos

O projeto utiliza `sass` e `css module`. O que isso significa?

Os arquivos de estilo são modularizados para que não influenciem em outras páginas como acontece em uma aplicação react padrão.

Arquivos de estilo globais devem ser criados em:

src > assets > styles com a extensão scss.

Após criados devem ser importados no src_pages_app.js.

Já os arquivos modularizados, além de contarem com algums especifidades devem ser criados junto ao componente com o nome styles.module.scss.

Após criar você pode importar ele no componente:

`import styles from './styles.module.scss'`.

Esse estilo funciona como um objeto e também será minificado específicamente para aplicação na página do componente, melhorando o build.

No componente você pode aplicá-lo:

```code
<div styles={`classe-css-global ${styles.classe_do_seu_arquivo_module}`}></div>
```

Também é possível importar usando desestruturação:

`import { classe_do_seu_arquivo } from './styles.module.scss'`

Para aplicar:

```code
<div styles={`classe-css-global ${classe_do_seu_arquivo}`}></div>
```

No front de desenvolvimento ou compilado a classe terá o mesmo nome com a adição de alguns dígitos aleatórios para evitar sobreposição de classes.

Para utilizar "classes" dentro de classes modulares, ex:

```code
.classe{

  .outraClasse{}
}
```

É necessário utilizar:

```code
":global(.nomeDaClasse)" ou [class~="nomeDaClasse"]
```

## Estrutura das pastas

Este projeto está dividido em duas pastas principais:

### public:

Na pasta public devem ser inseridos os arquivos estáticos, como imagens, pdfs e outros arquivos que poderão ser acessados a partir da raíz do site.

No Next.js você pode colocar uma imagem na pasta public/images e utilizá-la como um HTML normal usando nos estilos e nas tags de img o src a partir da raiz.

### src:

Na pasta src fica localizado o código.

**Temos aqui:**

#### - assets:

Na pasta `/assets` devem ser inseridos os arquivos os arquivos mais globais do projeto.
Ex: folhas de estilo globais, svgs, fontes etc.

### pages:

Na pasta `/pages` nós temos as rotas do projeto com as configurações de build específicas de cada rota.

Cada arquivo ou pasta dentro da pasta pages responderá conforme uma rota.

Ex: pages > login.js = site.com/login.

Mais infos: [Introdução a rotas no Next](https://nextjs.org/docs/routing/introduction).

#### - screens:

Na pasta `/screens` devem ser criados os componentes principais das páginas. A que se deve isso? Isso colabora para melhorar a organização do projeto já que apenas a "rota" estará na pasta pages mas o conteúdo pesado e seus componentes relacionados estarão na pasta respectiva da página.

**Criar sempre no padrão:**

```
Pasta: nomeDaPagina > Arquivos: index.js e styles.module.scss.
```

**Observação:**

Caso a página possua componentes que sejam únicos e exclusivos da mesma é indicado criar o componente dentro da pasta da página.

```
Pasta: nomeDaPagina > Arquivos: index.js e styles.module.scss.
                                edit > index.js e styles.module.scss ou apenas "edit.js"
```

#### - sharedComponents:

Como o próprio nome ja diz, nesta pasta devem ser criados os componentes que podem ser usados entre páginas diferentes.

**Criar sempre no padrão:**

```
Pasta: nomeDoComponente > Arquivos: index.js e styles.module.scss.
```

#### - providers:

Na pasta `/providers` devem ser inseridos os arquivos de providers. Ex: Context do React

#### - config:

Na pasta `/config` devem ser inseridos os arquivos de configurações. Ex: Variáveis globais, rotas privadas.

#### - services:

Na pasta `/services` devem ser inseridos os arquivos de conexões com aplicações externas. Ex: api

#### - utils:

Na pasta `/utils` devem ser inseridos os arquivos de javascript com funções que podem ser aproveitadas por diversas páginas. Ex: Códigos de funções repetitivas e similares.

## Saiba mais

Saiba mais sobre o Next.js nos seguintes links:

- [Next.js Documentation](https://nextjs.org/docs) - conheça as funções gerais do Next.js.
- [Learn Next.js](https://nextjs.org/learn) - Tutorial interativo.
- [Repositório Github Next.js](https://github.com/vercel/next.js/).

## Build e Deploy

Para gerar o build utilize npm run build.

Para iniciar o servidor rodando a partir do build utilize npm start.

O build deve ser gerado diretamente no servidor utilizando o CI/CD.

- [Next.js Documentation](https://nextjs.org/docs) - conheça as funções gerais do Next.js.
- [Learn Next.js](https://nextjs.org/learn) - Tutorial interativo.
- [Repositório Github Next.js](https://github.com/vercel/next.js/).

Este projeto roda em um servidor NODE, de preferência linux.
