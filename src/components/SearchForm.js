import React, { useState, useEffect } from "react";
import axios from "axios";
import CharacterCard from "./CharacterCard";

export default function SearchForm() {

  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState([]);

  useEffect(() => {
    axios
      .get("https://rickandmortyapi.com/api/character/")
      .then(response => {
        const results = response.data.results.filter(char => char.name.toLowerCase().includes(searchTerm.toLowerCase())
        );
        setSearchResults(results);
      });
  }, [searchTerm]);

  const handleChange = event => {
    setSearchTerm(event.target.value)
  };

  console.log("search term", searchTerm)
  return (
    <section className="search-form">
      <form>
        <label htmlFor="name"></label>
        <input id="name" type="text" name="textfield" placeholder="search" onChange={handleChange} value={searchTerm} />
      </form>
      <div>
        {searchResults.map(character => {
          return (
            <CharacterCard
              name={character.name}
              gender={character.gender}
              image={character.image}
              species={character.species}
              status={character.status}
            />)
        })}
      </div>
    </section>
  );
}
