import Movie from "../models/Movie";

export const getMovies = async (req, res) => {
  try {
    const movies = await Movie.find();
    return res.status(200).json(movies);
  } catch (error) {
    return res.status(500).json({
      msg: "Ocurrió un error al obtener las películas",
      error,
    });
  }
};

export const getMovie = async (req, res) => {
  try {
    const { id } = req.params;
    if (!id) {
      throw new Error("Params is undefined");
    }
    const result = await Movie.findById(id);
    return res.status(200).json(result);
  } catch (error) {
    return res.status(500).json({
      msg: "Ocurrió un error al obtener la película",
      error,
    });
  }
};

export const createMovie = async (req, res) => {
  try {
    const { name, releaseDate, genre } = req.body;

    if (!name || !releaseDate || !genre) {
      throw new Error("Body is undefined");
    }
    const movie = new Movie({ name, releaseDate, genre });
    await movie.save();
    return res.status(201).json({
      msg: "Película creada",
      movie,
    });
  } catch (error) {
    return res.status(500).json({
      msg: "Ocurrió un error al crear la película",
      error,
    });
  }
};

export const updateMovie = async (req, res) => {
  try {
    const { id } = req.params;
    if (!id) {
      throw new Error("Params is undefined");
    }
    req.body.releaseDate = new Date(req.body.releaseDate).toLocaleDateString();
    const result = await Movie.findByIdAndUpdate(id, req.body);
    return res.status(200).json({
      msg: "Película actualizada",
      result,
    });
  } catch (error) {
    return res.status(500).json({
      msg: "Ocurrió un error al actualizar la película",
      error,
    });
  }
};

export const deleteMovie = async (req, res) => {
  try {
    const { id } = req.params;
    if (!id) {
      throw new Error("Params is undefined");
    }
    const result = await Movie.findByIdAndDelete(id);
    return res.status(200).json({
      msg: "Película eliminada",
      result,
    });
  } catch (error) {
    return res.status(500).json({
      msg: "Ocurrió un error al eliminar la película",
      error,
    });
  }
};
