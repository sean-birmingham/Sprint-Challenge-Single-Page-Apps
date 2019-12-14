import React, { useState, useEffect } from "react";

export default function SearchForm() {

  const [searchTerm, setSearchTerm] = useState("");

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
    </section>
  );
}
