import React, { useState } from "react";


export default function SearchForm({ onSearch }) {
  // TODO: Add stateful logic for query/form data
  const [search, setSearch] = useState('');
  

  const handleInputChange = event => {
    setSearch(event.target.value)
  };

  return (
    <section className="search-form">
      <form onSubmit={(event) => onSearch(search, event)}>
        <input
          onChange={handleInputChange}
          placeholder="name"
          value={search}
          name="name"
        />
        <button type="submit">Search</button>
      </form>
    </section>
  );
}