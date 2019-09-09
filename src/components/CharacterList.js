import React, { useEffect, useState } from "react";
import CharacterCard from "./CharacterCard";
import axios from 'axios'; 
import SearchForm from './SearchForm';

export default function CharacterList() {
  // TODO: Add useState to track data from useEffect
  const [character, setCharacter] = useState();
  const [mark, setMark] = useState('');
  useEffect(() => {   
     
      axios
        
      .get(`https://rickandmortyapi.com/api/character/?name=${mark}`)
        .then(response => {
          setCharacter(response.data.results);
        })
        .catch(error => {
          console.error('Server Error', error);
        });
    

  }, [mark]);
function onSearch(search, event) {
  event.preventDefault()
  setMark(search);
  
}
if(!character){ return null; }
  return (
   <div>
   <SearchForm onSearch= {onSearch}/>
   <section className="character-list grid-view">
      {character.map(character1 => (
        <CharacterCard key={character1.id} character={character1} />
      ))}
    </section>
   </div> 
  );
}
