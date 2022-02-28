# Prueba-Tecnica-AllRide

The MERN Stack is an acronym for Postgres, Express, React, Node. It's a set of tools to create a complete web application.

To understand this project, I recommend that you could know these tolls:

* MongoDB
* Express
* React
* Node

And this other libraries That I Use in this project:

* Material UI

## Installation
This project consists in a Web Frontend Application and a Web Backend Application.

First, clone the repo:

<pre><code> git clone https://github.com/cristobal-jofre/PERN-Stack </code></pre>

to run the backend:
<pre><code> npm run dev </code></pre>


to run the frontend:

<pre><code> cd client
 npm start
</code></pre>


# Desafio Mercado Libre

## Welcome!

This is my proposed solution for `Desafío Frontend Mercado Libre`!

The technologies used were:

- NodeJS + TS
- React + TS
- Docker

## Prerequisites

To use these files, you must first have the following installed:
- [git](https://git-scm.com/)
- [docker](https://docs.docker.com/engine/installation/)
- [docker-compose](https://docs.docker.com/compose/install/)

## How to use

The following steps will run a local instance of the solution using the configuration file (`docker-compose.yml`):

1. Clone this repository.

```bash
git clone https://github.com/jpstorm21/desafio-mercado-libre.git
```
2. Change directory into the root of the project.

```bash
cd  desafio-mercado-libre
```

3. Build and Run the project with one of the follows commands:

- With docker-compose commands:

```bash
docker-compose up
# if you need the project execute in the background, use the -d, --detach option
docker-compose up -d
```
# Playground - Backend

To access to the backend, you have to open [http://localhost:3001](http://localhost:3001) in your browser.

API Resources:
 - [GET /api/items?q=:query](#get-items-by-search)
 - [GET /api/items/:id](#get-item-by-id)
### Get Items by Seacrh

Request:

`GET http://localhost:3001/api/items`

### `/items` Queries Parameters

These queries parameters are available on the `/product` route:

| Field query parameter | Description |
|-----------------------|-------------|
| `q` | Filter items by `name` that match the given string. *Min: 2 characters*|


### Example query using

`GET http://localhost:3001/api/items?q=ipad

Response body:

    {
        "data": {
            author: {
                "name": "Juan Pablo",
                "lastname": "Martínez",
            },
            items: [
                {
                  "id": "MLA546657",
                  "title": "ipad 4 generacion",
                  "picture": "https://http2.mlstatic.com/D_994609-MLA47871010530_102021-I.jpg",
                  "price": {
                      "currency": "ARG";
                      "amount": 3000;
                      "decimals": 0.0,
                  },
                  "condition": "new",
                  "free_shipping": true,
                },
                ...
            ],
            categories: [
                "tecnologia"
            ]
    }

### Get product by id

Request:

`GET http://localhost:3001/api/items/:id`

Response body:

    {
        "data": {
            author: {
                "name": "Juan Pablo",
                "lastname": "Martínez",
            },
            items: {
                  "id": "MLA546657",
                  "title": "ipad 4 generacion",
                  "picture": "https://http2.mlstatic.com/D_994609-MLA47871010530_102021-I.jpg",
                  "price": {
                      "currency": "ARG";
                      "amount": 3000;
                      "decimals": 0.0,
                  },
                  "condition": "new",
                  "free_shipping": true,
                  "description": "ipad muy bueno ....";
                  "sold_quantity": 45;
            }
    }

## Playground - Frontend

To access to the frontend, you just have to navigate to [http://localhost:3000](http://localhost:300) in your browser.

## Test and Coverage Backend

If you need to execute the test for the solution backend and generate the coverage report, then execute one of the follows commands:

```sh
cd backend
npm run test
```

### Note

Although it was not requested due to time issues, I did not manage to test on the frontend.


## Stop Solution

If need to stop the execution of the solution and remove the container associated, then execute one of the follows commands:

- With docker-compose
```sh
docker-compose down
```

Have a nice day. I really enjoyed solving this challenge :D
****
