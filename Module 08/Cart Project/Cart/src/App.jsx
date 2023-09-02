import { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import ProductPage from "./Pages/ProductPage";
import LoginPage from "./Pages/LoginPage";
import OtpPage from "./Pages/OTP-Page";
import CartPage from "./Pages/CartPage";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<ProductPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/otp" element={<OtpPage />} />
          <Route path="/cart-list" element={<CartPage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
