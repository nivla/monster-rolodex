import React from "react";
import "./search_box.styles.css";

import "./search_box.styles.css";

function SearchBox({ placeholder, onChange }) {
  return (
    <div>
      <input
        type="search"
        placeholder={placeholder}
        onChange={onChange}
        className="search"
      />
    </div>
  );
}

export default SearchBox;
