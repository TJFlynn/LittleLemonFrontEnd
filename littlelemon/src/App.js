import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./pages/Layout";
import Home from "./pages/Home";
import About from "./pages/About";
import Menu from "./pages/Menu";
import NoPage from "./pages/NoPage";
import Reservations from './pages/Reservations';
import Book from './pages/Book';
import ConfirmedBooking from './components/ConfirmedBooking';

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="home" element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="menu" element={<Menu />} />
        <Route path="book" element={<Book />} />
        <Route path="reservations" element={<Reservations />} />
        <Route path="confirmed" element={<ConfirmedBooking />} />
        <Route path="*" element={<NoPage />} />
      </Route>
    </Routes>
  </BrowserRouter>
  );
}

export default App;
