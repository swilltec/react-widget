import React, { useState } from "react";
import { Accordion } from "./Accordion";
import { items, options } from "./data";
import { Dropdown } from "./Dropdown";
import { Search } from "./Search";



export const App = () => {
  const [selected, setSelected] = useState(options[0])
  const [showDropdown, setshowDropdown] = useState(true)

  return (
    <div>
      {/* <Accordion items={items} /> */}
      {/* <Search /> */}
      <button onClick={() => setshowDropdown(!showDropdown)}>Toggle dropdown</button> 
      {showDropdown ? <Dropdown 
      selected={selected}
      onSelectedChange={setSelected}
      options={options} /> : null}
    </div>
  );
};
