import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import "./App.css";
import BestSeller from "./pages/bestseller/BestSeller";
import Cart from "./pages/cart/Cart";
import ProductNewArrival from "./pages/productnewarrival/ProductNewArrival";
import Detail from "./pages/detail/Detail";
import Shoes from "./pages/shoes/Shoes";
import Apparel from "./pages/apparel/Apparel";
import Mug from "./pages/mug/Mug";
import Canvas from "./pages/canvas/Canvas";
import Blanket from "./pages/blanket/Blanket";
import Necklace from "./pages/necklace/Necklace";
import Contact from "./pages/contact/Contact";
export default function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/bestsellers" element={<BestSeller />}></Route>
        <Route path="/products"></Route>
        <Route path="/occasions"></Route>
        <Route path="/newarrival" element={<ProductNewArrival />}></Route>
        <Route path="/shoes" element={<Shoes />}></Route>
        <Route path="/apparel" element={<Apparel />}></Route>
        <Route path="/mug" element={<Mug />}></Route>
        <Route path="/canvas" element={<Canvas />}></Route>
        <Route path="/blanket" element={<Blanket />}></Route>
        <Route path="/necklace" element={<Necklace />}></Route>
        <Route path="/contact" element={<Contact />}></Route>
        <Route path="/bestsellers/:id" element={<Detail />}></Route>
        <Route path="/newarrival/:id" element={<Detail />}></Route>
        <Route path="/shoes/:id" element={<Detail />}></Route>
        <Route path="/apparel/:id" element={<Detail />}></Route>
        <Route path="/mug/:id" element={<Detail />}></Route>
        <Route path="/canvas/:id" element={<Detail />}></Route>
        <Route path="/blanket/:id" element={<Detail />}></Route>
        <Route path="/necklace/:id" element={<Detail />}></Route>
        <Route path="/contactus"></Route>
        <Route path="/reviews"></Route>
        <Route path="/cart" element={<Cart />} />
      </Routes>
    </div>
  );
}
