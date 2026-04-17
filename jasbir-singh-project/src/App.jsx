import { useState, useEffect } from "react";
import "./App.css";
import CardList from "./components/CardList";
import Heading from "./components/Heading";
import SearchInput from "./components/SearchInput";

function App() {
  const [users, setUsers] = useState([]);
  const [searchValue, setSearchValue] = useState("");
  const [filteredUsers, setFilteredUsers] = useState([]);

  const handleChange = (event) => {
    setSearchValue(event.target.value);
  };

  useEffect(() => {
    // Fetching data or other side effects can be handled here
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((users) => setUsers(users));
  }, []);

  useEffect(() => {
    const filteredUsers = users.filter((user) =>
      user.name.toLowerCase().includes(searchValue.toLowerCase()),
    );
    setFilteredUsers(filteredUsers);
  }, [searchValue, users]);

  return (
    <main className="App">
      <Heading />
      <SearchInput handleChange={handleChange} />
      <CardList cards={filteredUsers} />
    </main>
  );
}

export default App;
