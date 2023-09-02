import { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./Pages/HomePage";
import ByCategoryPage from "./Pages/ByCategoryPage";
import DetailsPage from "./Pages/DetailsPage";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/byCatagory/:catagoryID" element={<ByCategoryPage />} />
          <Route path="/details/:postID" element={<DetailsPage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
