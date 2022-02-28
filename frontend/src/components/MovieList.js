import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Button, Card, CardContent, Typography } from "@mui/material";

import * as config from "../config/config.json";

const configBackend = config;

const MoviesList = () => {
  const [movies, setMovies] = useState([]);
  const navigate = useNavigate();

  const loadMovies = async () => {
    const response = await fetch(`${configBackend.url_backend}/api/movie/`);
    const data = await response.json();
    setMovies(data);
  };

  const handleDelete = async (id) => {
    try {
      await fetch(`${configBackend.url_backend}/api/movie/${id}`, {
        method: "DELETE",
      });
      setMovies(movies.filter((movie) => movie._id !== id));
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    loadMovies();
  }, []);

  return (
    <>
      <h1>Lista de películas</h1>
      {movies.map((movie) => (
        <Card
          style={{
            marginBottom: ".7rem",
            backgroundColor: "#1e272e",
          }}
          key={movie._id}
        >
          <CardContent
            style={{
              display: "flex",
              justifyContent: "space-between",
            }}
          >
            <div
              style={{
                color: "white",
              }}
            >
              <Typography>{movie.name}</Typography>
              <Typography>
                {new Date(movie.releaseDate).toLocaleDateString()}
              </Typography>
              <Typography>{movie.genre}</Typography>
            </div>
            <div>
              <Button
                variant="contained"
                color="success"
                onClick={() => navigate(`/api/movie/${movie._id}`)}
              >
                Editar
              </Button>
              <Button
                variant="contained"
                color="error"
                onClick={() => handleDelete(movie._id)}
                style={{ marginLeft: ".5rem" }}
              >
                Eliminar
              </Button>
            </div>
          </CardContent>
        </Card>
      ))}
    </>
  );
};

export default MoviesList;
