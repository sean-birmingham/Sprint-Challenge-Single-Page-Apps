import React, { useState } from "react";

export default function SearchForm() {

  return (
    <section className="search-form">
      <form>
        <label htmlFor="name"></label>
        <input id="name" type="text" name="textfield" placeholder="search" />
      </form>
    </section>
  );
}
