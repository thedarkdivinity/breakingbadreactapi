import React, { useState, useEffect } from "react";

import "./App.css";
import Header from "./components/ui/Header";
import CharacterGrid from "./components/ui/CharacterGrid";
import Search from "./components/ui/Search";

const App = () => {
  const [items, setItems] = useState([]);
  
  const [query,setQuery]=useState('');
  useEffect(() => {
    fetch(`https://www.breakingbadapi.com/api/characters?name=${query}`)
      .then((response) => response.json())
      .then((data) => {console.log(data)
      setItems(data)});
     
  }, [query]);
 
  return (
    <div className="container">
      <Header />
      <Search getQuery={(q)=>setQuery(q)}/>
      <CharacterGrid  items={items}/>
      <h1>yo brother</h1>
    </div>
  );
};

export default App;
