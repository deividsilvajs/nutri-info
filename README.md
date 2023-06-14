## Sobre

A API Rest Nutri Info é uma solução simples que fornece informações nutricionais de alimentos. Essa API foi projetada para complementar o projeto [More Health](https://github.com/deividsilvajs/more-health), proporcionando aos usuários acesso fácil e rápido a dados nutricionais precisos.

Obs1: O banco de dados está sendo simulado pelo arquivo "Database.ts" a fim de ilustrar como seria o funcionamento da API.

Obs2: Os alimentos retornam quantias nutricionais de 100 gramas.

## Índice

- [Requisitos](#requisitos)
- [Instalação](#instalação)
- [Como usar](#como-usar)
- [Tabela de Código](#tabela-de-código)
- [Exemplo de Solicitação HTTP](#exemplo-de-solicitação-http)
- [Resposta](#resposta)

## Requisitos

- Possuir o Node.js instalado na sua máquina.

## Instalação

Abra o terminal no diretório de sua preferência e execute os seguintes comandos:

```bash
git clone https://github.com/deividsilvajs/nutri-info
cd nutri-info
npm install
```

## Como usar

1. Para iniciar o servidor da API, abra o terminal e execute o comando "npx tsc" e "npm start" no diretório em que o repositório foi instalado.

2. Agora basta enviar solicitações HTTP para os endpoints correspondentes. Você pode consultar a tabela de código para conhecer todos os parâmetros aceitos.

## Tabela de Código

- arroz tipo 1 cozido: ar-1-co
- feijão preto cozido: fj-pr-co
- banana prata crua: bn-pt-cr
- frango peito cru: fg-pt-cr
- batata inglesa cozida: bt-in-co

## Exemplo de Solicitação HTTP

Aqui está um exemplo de como obter informações nutricionais para um alimento específico usando a API:

`http://localhost:8080/ar-1-co`

## Resposta

A resposta da API fornecerá os detalhes nutricionais do alimento solicitado, como o seguinte:

{
    nome: 'arroz tipo 1 cozido',
    cod: 'ar-1-co',
    carb: 28.1,
    prot: 2.5,
    gor: 0.2,
    cal: 128
}