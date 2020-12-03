import "./App.css";
import { useEffect, useState } from "react";

import CardList from "./components/card-list/card_list";
import SearchBox from "./components/search_box/search_box";

const initialMonsters = [
  {
    name: "Frankstein",
    id: 1,
  },
  {
    name: "Dracula",
    id: 2,
  },
  {
    name: "Zombie",
    id: 3,
  },
];

function App() {
  const [monsters, setMonsters] = useState(initialMonsters);
  const [searchField, setSearchField] = useState("");

  const filteredMonsters = monsters.filter((monster) =>
    monster.name.toLowerCase().includes(searchField.toLowerCase())
  );

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((users) => setMonsters(users));
  }, []);

  const handlechange = (e) => {
    setSearchField(e.target.value);
  };

  return (
    <div className="App">
      <h1>Monsters Rolodex</h1>
      <SearchBox onChange={handlechange} />
      <CardList monsters={filteredMonsters} />
    </div>
  );
}

export default App;
