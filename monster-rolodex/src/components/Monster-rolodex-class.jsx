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
    fetch("")
      .then((res) => res.json())
      .then((data) => this.setState({ listOfMonster: data }))
      .catch((err) => {
        console.log(err);
      });
  };

  render() {
    const { searchTerm, listOfMonster } = this.state;

    return (
      <div>
        <h1>Monster rolodex</h1>
        <input
          type="text"
          name="search-monster"
          id="search-monster"
          onChange={this.handleChange}
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
}

export default MonsterRolodexClass;
