import React, { Component } from "react";

class MonsterRolodexClass extends Component {
  constructor(props) {
    super(props);

    this.state = {
      listOfMonster: [],
      searchTerm: "",
    };
  }

  handleChange = (e) => {
    this.setState({ searchTerm: e?.target?.value });
  };

  componentDidMount = () => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((data) => this.setState({ listOfMonster: data }))
      .catch((err) => {
        console.log(err);
      });
  };

  // componentDidUpdate = () => {
  //   const { listOfMonster, searchTerm } = this.state;

  //   console.log("Monsters : ", listOfMonster, searchTerm);

  //   if (searchTerm === "") return;

  //   console.log("Monsters : ", filteredMonster);

  //   // if (searchTerm)
  //   //   this.setState({ ...this.state, listOfMonster: filteredMonster });
  // };

  render() {
    let { searchTerm, listOfMonster } = this.state;

    //console.log("Before filter ", this.state);

    listOfMonster =
      listOfMonster?.length > 0 &&
      listOfMonster.filter((item) =>
        item.name.toLowerCase().includes(searchTerm)
      );

    //console.log("After filter ", this.state);

    return (
      <div>
        <div className="search-container">
          <h1 className="app-heading">Monster rolodex</h1>
          <input
            type="text"
            name="search-monster"
            id="search-monster"
            onChange={this.handleChange}
            value={searchTerm}
            className="search-input"
            placeholder="Search Monster"
          />
        </div>
        <ul className="card-list">
          {listOfMonster?.length > 0 &&
            listOfMonster.map((item) => {
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
}

export default MonsterRolodexClass;
