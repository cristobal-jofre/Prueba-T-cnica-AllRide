import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

import {
  Button,
  Card,
  CardContent,
  Grid,
  TextField,
  Typography,
  CircularProgress,
} from "@mui/material";

import * as config from "../config/config.json";

const configBackend = config;

const MovieForm = () => {
  const [movie, setMovie] = useState({
    name: "",
    releaseDate: "",
    genre: "",
  });
  const [loading, setLoading] = useState(false);
  const [editing, setEditing] = useState(false);

  const navigate = useNavigate();
  const params = useParams();

  useEffect(() => {
    if (params.id) {
      loadMovie(params.id);
    }
  }, [params.id]);

  const loadMovie = async (id) => {
    const res = await fetch(`${configBackend.url_backend}/api/movie/${id}`);
    const data = await res.json();
    setMovie({
      name: data.name,
      releaseDate: new Date(data.releaseDate).toLocaleDateString(),
      genre: data.genre,
    });
    setEditing(true);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setLoading(true);
    try {
      if (editing) {
        const response = await fetch(
          `${configBackend.url_backend}/api/movie/${params.id}`,
          {
            method: "PUT",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(movie),
          }
        );
        const a = await response.json();
        console.log(a);
      } else {
        const response = await fetch(
          `${configBackend.url_backend}/api/movie/`,
          {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(movie),
          }
        );
        await response.json();
      }
      setLoading(false);
      navigate("/");
    } catch (error) {
      console.error(error);
    }
  };

  const handleChange = (e) =>
    setMovie({ ...movie, [e.target.name]: e.target.value });

  return (
    <Grid
      container
      alignItems="center"
      direction="column"
      justifyContent="center"
    >
      <Grid item xs={3}>
        <Card
          sx={{ mt: 5 }}
          style={{
            backgroundColor: "#1E272E",
            padding: "1rem",
          }}
        >
          <Typography variant="h5" textAlign="center" color="white">
            {editing ? "Actualizar película" : "Crear película"}
          </Typography>
          <CardContent>
            <form onSubmit={handleSubmit}>
              <TextField
                variant="filled"
                label="Título "
                sx={{
                  display: "block",
                  margin: ".5rem 0",
                }}
                name="name"
                onChange={handleChange}
                value={movie.name}
                inputProps={{ style: { color: "white" } }}
                InputLabelProps={{ style: { color: "white" } }}
              />
              <TextField
                variant="filled"
                label="Fecha de lanzamiento "
                sx={{
                  display: "block",
                  margin: ".5rem 0",
                }}
                name="releaseDate"
                onChange={handleChange}
                value={movie.releaseDate}
                inputProps={{ style: { color: "white" } }}
                InputLabelProps={{ style: { color: "white" } }}
              />
              <TextField
                variant="filled"
                label="Género "
                sx={{
                  display: "block",
                  margin: ".5rem 0",
                }}
                name="genre"
                onChange={handleChange}
                value={movie.genre}
                inputProps={{ style: { color: "white" } }}
                InputLabelProps={{ style: { color: "white" } }}
              />

              <Button
                type="submit"
                variant="contained"
                color="primary"
                disabled={!movie.name || !movie.releaseDate || !movie.genre}
              >
                {loading ? (
                  <CircularProgress color="inherit" size={25} />
                ) : (
                  "Guardar"
                )}
              </Button>
            </form>
          </CardContent>
        </Card>
      </Grid>
    </Grid>
  );
};

export default MovieForm;
