import { Route, Routes } from "react-router";
import Home from "./routes/Home/Home.jsx";

const App = () => {
  return (
    <main className="App">
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </main>
  );
};

export default App;
