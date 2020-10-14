/**
     * Sublist Component
     * Generic list component used to display associated items for a specific item
     * ex: associated films and planets for a character
*/

import React from 'react';
import { Link } from "react-router-dom";


function Sublist({title, items}) {
  return (
    <>
      <h3>{ title }</h3>
      <ul>
        {items.map(item =>
          <li key={item.id}><Link to={item.url}>{item.display}</Link></li>
        )}
      </ul>
    </>
  );
}

export default Sublist;