import Movie from "../models/Movie";

export const getMovies = async (req, res) => {
  const movies = await Movie.find();
  res.json(movies);
};

export const getMovie = async (req, res) => {
  try {
    const { id } = req.params;
    const result = await Movie.findById(id);
    res.json(result);
  } catch (error) {
    console.log(error);
  }
};

export const createMovie = async (req, res) => {
  try {
    const { name, releaseDate, genre } = req.body;
    const movie = new Movie({ name, releaseDate, genre });
    await movie.save();
    res.json({ status: "Movie saved " });
  } catch (error) {
    console.log(error);
  }
};

export const updateMovie = async (req, res) => {
  try {
    const { id } = req.params;
    const result = await Movie.findByIdAndUpdate(id, req.body);
    res.json({ status: "Movie updated " });
  } catch (error) {
    console.log(error);
  }
};

export const deleteMovie = async (req, res) => {
  try {
    const { id } = req.params;
    const result = await Movie.findByIdAndDelete(id);
    res.json({ status: "Movie deleted " });
  } catch (error) {
    console.log(error);
  }
};
