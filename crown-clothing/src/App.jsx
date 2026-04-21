import { Route, Routes } from "react-router";
import Layout from "./components/Layout/Layout.jsx";
import Home from "./routes/Home/Home.jsx";
import Shop from "./routes/Shop/Shop.jsx";

const App = () => {
  return (
    <main className="App">
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="shop" element={<Shop />} />
        </Route>
      </Routes>
    </main>
  );
};

export default App;
