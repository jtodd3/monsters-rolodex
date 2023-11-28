import logo from './logo.svg';
import './App.css';
import { useCallback, useEffect, useState } from 'react';
import CardList from './components/card-list/card-list';
import SearchBox from './components/search-box/search-box';

function App() {
  const [monsters, setMonsters] = useState([]);
  const [filteredMonsters, setFilteredMonsters] = useState(monsters);
  const [search, setSearch] = useState("");
  
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
    .then((response) => response.json())
    .then((users) => setMonsters(users))
  }, [])

  useEffect(() => {
    setFilteredMonsters(monsters.filter((monster) => monster.name.toLowerCase().includes(search)));
  }, [search, monsters])

  const onSearchChange = (e) => setSearch(e.target.value.toLowerCase());

    return (
      <div className='App'>
        <h1 className='app-title'>Monsters Rolodex</h1>
        <SearchBox onChange={onSearchChange} className="monsters-search-box" placeholder="Search monsters" />
        <CardList monsters={filteredMonsters} />
      </div>
    )
}

export default App;
