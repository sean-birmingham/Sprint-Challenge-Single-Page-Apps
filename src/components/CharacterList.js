import React from "react";
import { Link } from "react-router-dom";
import SearchForm from "./SearchForm";

export default function CharacterList() {

  return (
    <section className="character-list">
      <Link to="/">Home</Link>
      <SearchForm />
    </section>
  );
}
