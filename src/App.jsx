import "./App.css";
import { Link } from "react-router-dom";
import { Routes, Route } from "react-router-dom";
import MainPage from "./pages/MainPage/MainPage";
import DetailPage from "./pages/DetailPage/DetailPage";

const App = () => {
  return (
    <div className="app">
      <h1 className="title">
        <Link to="/">TOP ANIME LIST</Link>
      </h1>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/product/:id" element={<DetailPage />} />
      </Routes>
    </div>
  );
};

export default App;
