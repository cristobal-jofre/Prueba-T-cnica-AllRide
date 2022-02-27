import MovieList from "./components/MovieList";
import MovieForm from "./components/MovieForm";
import Navbar from "./components/Navbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import { Container } from "@mui/material";

export const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Container>
        <Routes>
          <Route index path="/" element={<MovieList />} />
          <Route path="/api/movie" element={<MovieForm />} />
          <Route path="/api/movie/:id" element={<MovieForm />} />
        </Routes>
      </Container>
    </BrowserRouter>
  );
};

export default App;
