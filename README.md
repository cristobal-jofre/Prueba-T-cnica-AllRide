# Prueba-Tecnica-AllRide

## Welcome !

This is my proposed solution for `Prueba Técnica Backend Developer Jr.`!

The technologies used were:

* MongoDB
* Express
* React
* NodeJS

And this other libraries That I Use in this project:

* Material UI

## Installation
This project consists in a Web Frontend Application and a Web Backend Application.

1. Clone this repository.

```bash
git clone https://github.com/cristobal-jofre/Prueba-Tecnica-AllRide
```

2. Change directory into the root of the project. 

```bash
cd prueba-allride
```

# Backend

to run the backend:

```bash
cd backend
npm run dev
```

# Frontend

to run the frontend:

```bash
cd frontend
npm start
```


To access to the backend, you have to open [http://localhost:3001](http://localhost:3001) in your browser.

API Resources:
 - [GET /api/movie/](#get-movies)
 - [GET /api/movie/:id](#get-movie-by-id)
 - [POST /api/movie/](#create-movie)
 - [PUT /api/movie/:id](#update-movie)
 - [DELETE /api/movie/:id](#delete-movie)

### Example input 
```
{
    "name": "Spider-Man: No Way Home",
    "releaseDate": "2021-12-16",
    "genre": "Superhéroes"
 }
```

### Get Movies 

Request:

`GET http://localhost:3001/api/movie`

Response body:

```
[
    {
        "_id": "621cc0481b563825b850c9b8",
        "name": "Spider-Man: No Way Home",
        "releaseDate": "2021-12-16T00:00:00.000Z",
        "genre": "Superhéroes",
        "createdAt": "2022-02-28T12:30:00.394Z",
        "updatedAt": "2022-02-28T12:30:00.394Z"
    }
]
```

### Get movie by id

Request:

`GET http://localhost:3001/api/movie/:id`

Response body:

```
{
    "_id": "621cc3931b563825b850c9d2",
    "name": "Spider-Man: No Way Home",
    "releaseDate": "2021-12-16T00:00:00.000Z",
    "genre": "Superhéroes",
    "createdAt": "2022-02-28T12:44:03.920Z",
    "updatedAt": "2022-02-28T12:44:03.920Z"
}
```

### Create movie

Request:

`POST http://localhost:3001/api/movie/`

Response body:

```
{
    "msg": "Película creada",
    "movie": {
        "name": "Spider-Man: No Way Home",
        "releaseDate": "2021-12-16T00:00:00.000Z",
        "genre": "Superhéroes",
        "_id": "621cc3931b563825b850c9d2",
        "createdAt": "2022-02-28T12:44:03.920Z",
        "updatedAt": "2022-02-28T12:44:03.920Z"
    }
}
```
NOTE: The format of releaseDate is YYYY-MM-DD

### Update movie

Request:

`PUT http://localhost:3001/api/movie/:id`

Response body:

```
{
    "msg": "Película actualizada",
    "result": {
        "_id": "621cc3931b563825b850c9d2",
        "name": "Spider-Man: No Way Home",
        "releaseDate": "2020-11-12T03:00:00.000Z",
        "genre": "Accion",
        "createdAt": "2022-02-28T12:44:03.920Z",
        "updatedAt": "2022-02-28T12:55:19.844Z"
    }
}
```

### Delete movie

Request:

`DELETE http://localhost:3001/api/movie/:id`

Response body:

```
{
    "msg": "Película eliminada",
    "result": {
        "_id": "621cc3931b563825b850c9d2",
        "name": "Spider-Man: No Way Home",
        "releaseDate": "2020-11-12T03:00:00.000Z",
        "genre": "Accion",
        "createdAt": "2022-02-28T12:44:03.920Z",
        "updatedAt": "2022-02-28T12:55:35.193Z"
    }
}
```

Have a nice day. I really enjoyed solving this challenge :D
****
