import { useState, useEffect } from "react";

function MonsterRolodexFunc() {
  const [listOfMonster, setListOfMonster] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  const handleChange = (e) => {
    console.log(e?.target?.value);
    setSearchTerm(e?.target?.value);
  };

  useEffect(() => {
    fetch("")
      .then((res) => res.json())
      .then((data) => setListOfMonster(data))
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div>
      <h1>Monster rolodex</h1>
      <input
        type="text"
        name="search-monster"
        id="search-monster"
        onChange={handleChange}
        value={searchTerm}
      />
      {listOfMonster?.length > 0 &&
        listOfMonster.map((item, idx) => {
          const { img, name, desc } = item;

          return (
            <div key={idx}>
              <img src={img} alt={name} />
              <h2>{name}</h2>
              <p>{desc}</p>
            </div>
          );
        })}
    </div>
  );
}

export default MonsterRolodexFunc;
