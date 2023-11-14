import "./App.css";
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import Pay from "./Components/pay/pay";
import Success from "./Components/success/success";
import Navbar from "./Components/Navbar";
import Home from "./Pages/Home";
import ProductList from "./Pages/ProductList";
import Product from "./Pages/Product";
import Register from "./Pages/Register";
import Login from "./Pages/Login";
import Cart from "./Pages/Cart";
import { useSelector } from "react-redux";

function App() {
  const user = useSelector((state) => state.user.currentUser);
  console.log(user);
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/pay" element={<Pay />} />
          <Route path="/success" element={<Success />} />
          <Route path="/" exact element={<Home />} />
          <Route
            path="/login"
            element={user ? <Navigate replace to={"/"} /> : <Login />}
          />
          <Route
            path="/register"
            element={user ? <Navigate replace to={"/"} /> : <Register />}
          />
          <Route path="/products" element={<ProductList />}>
            <Route path="/products/:category" element={<ProductList />} />
          </Route>
          <Route path="/product/:productId" element={<Product />} />
          <Route path="/cart" element={<Cart />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
