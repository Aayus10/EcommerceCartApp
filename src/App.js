import { Box } from "@mantine/core";
import "./App.css";
import Header from "./components/header/Header";
import Main from "./components/mainarea/Main";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import CartMain from "./components/mainarea/cart/CartMain";

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/cart" element={<CartMain />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
