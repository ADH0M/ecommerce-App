import Login from "./Components/Auth/Login";

import Layout from "./Components/layout/Layout";
import { Route, Routes } from "react-router";
import SignUp from "./Components/Auth/SignUp";
import ShopPage from "./Pages/Shop/Shop";
import Home from "./Pages/Home/Home";
import MenSection from "./Pages/MenSection/MenSection";
import TrySlide from "./Pages/Home/TrySlide";
import allImg from "./assets/Shop";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route path="/" element={<Home />} />
        <Route path="login" element={<Login />} />
        <Route path="signup" element={<SignUp />} />
        <Route path="shop" element={<ShopPage />} />
        <Route path="aboutus" element={<TrySlide data={allImg} />} />
        <Route path="shop/Men/:id" element={<MenSection />} />
      </Route>
    </Routes>
  );
}

export default App;
