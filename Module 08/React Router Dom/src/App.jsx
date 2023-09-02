import { BrowserRouter, Route, Routes } from "react-router-dom";

import WithRoutesRoute from "./Components/WithRoutes/WithRoutesRoute";
import Home from "./Components/pages/Home";
import WithLink from "./Components/WithLink/WithLink";

function App() {
  return (
    <>
      <WithRoutesRoute />
    </>
  );
}

export default App;
