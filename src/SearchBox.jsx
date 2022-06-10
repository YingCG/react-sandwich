import React, { useState } from 'react'

export default function SearchBox({requestSearch}) {

  const [query, setQuery] = useState('')

  const searchInput = () => {
      if(query) {
          requestSearch(query);
      }
  }

  function updateQuery(e) {
    setQuery(e.target.value);
  }

  return (
    <div>
        <input type='text' name='search' placeholder='Search' value={query} onChange={updateQuery}/>
        <button id='search-button' onClick={searchInput}>Search</button>
    </div>
  )
}
