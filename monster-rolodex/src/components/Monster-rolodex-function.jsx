import { useState, useEffect } from "react";

function MonsterRolodexFunc() {
  const [listOfMonster, setListOfMonster] = useState([]);
  const [filteredMonster, setFilterMonster] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  const handleChange = (e) => {
    console.log(e?.target?.value);
    setSearchTerm(e?.target?.value);
  };

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((data) => setListOfMonster(data))
      .catch((err) => {
        console.log(err);
      });
  }, []);

  useEffect(() => {
    const filteredMonster = listOfMonster.filter((item) =>
      item.name.toLowerCase().includes(searchTerm)
    );
    setFilterMonster(filteredMonster);
  }, [listOfMonster, searchTerm]);

  return (
    <div>
      <div className="search-container">
        <h1 className="app-heading">Monster rolodex</h1>
        <input
          type="text"
          name="search-monster"
          id="search-monster"
          onChange={handleChange}
          value={searchTerm}
          className="search-input"
          placeholder="Search Monster"
        />
      </div>
      <ul className="card-list">
        {filteredMonster?.length > 0 &&
          filteredMonster.map((item) => {
            const { id, name, email } = item;

            return (
              <li className="card" key={id}>
                <img
                  src={`https://robohash.org/${id}?set=set2&size=180x180`}
                  alt={name}
                  className="card-img"
                />
                <h2 className="card-name">{name}</h2>
                <p className="card-email">{email}</p>
              </li>
            );
          })}
      </ul>
    </div>
  );
}

export default MonsterRolodexFunc;
