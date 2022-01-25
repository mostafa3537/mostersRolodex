import React from "react";
import CardList from "./card-list.component/card-list";
import Box from "./box.component/box";
import "./App.css";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      monsters: [],
      searchFeild: "",
    };
  }

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((data) => this.setState({ monsters: data }));
  }
  render() {
    const { monsters, searchFeild } = this.state;
    const filterMonster = monsters.filter((monster) =>
      monster.name.toLowerCase().includes(searchFeild.toLowerCase())
    );

    return (
      <div className="App">
        <h1>Monster Rolodex</h1>
        <Box
          placeholder="monster search"
          changeHandler={(e) => this.setState({ searchFeild: e.target.value })}
        />
        <CardList monsters={filterMonster} />
      </div>
    );
  }
}

export default App;
