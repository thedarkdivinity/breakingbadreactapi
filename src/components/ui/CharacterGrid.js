import React from 'react';
import CharacterItem from "./CharacterItem";

const CharacterGrid = ({items}) => {
   return (<section className="cards">
   {items.map((item)=>(
       <CharacterItem key={Math.random().toString()} item={item}/>
   ))}
    </section>);
}

export default CharacterGrid
