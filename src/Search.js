import React from "react";
import "./Search.css";

export default function Search() {
  return (
    <div className="Search">
      <form>
        <input
          type="search"
          placeholder="Enter a city"
          required
          className="search-form-input"
        />
        <input type="submit" value="Search" className="search-form-button" />
      </form>
    </div>
  );
}
