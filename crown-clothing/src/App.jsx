import { Route, Routes } from "react-router";
import Layout from "./components/Layout/Layout.jsx";
import Home from "./routes/Home/Home.jsx";
import Shop from "./routes/Shop/Shop.jsx";
import Contact from "./routes/Contact/Contact.jsx";
import SignIn from "./routes/Auth/SignIn.jsx";
import Cart from "./routes/Cart/Cart.jsx";

const App = () => {
  return (
    <main className="App">
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="shop" element={<Shop />} />
          <Route path="contact" element={<Contact />} />
          <Route path="signin" element={<SignIn />} />
          <Route path="cart" element={<Cart />} />
        </Route>
      </Routes>
    </main>
  );
};

export default App;
