import React, { useState } from "react";
import Route from "./Route";
import { Accordion } from "./Accordion";
import { items, options } from "./data";
import { Dropdown } from "./Dropdown";
import { Search } from "./Search";
import Translate from "./Translate";
import { Header } from "./Header";

export const App = () => {
  const [selected, setSelected ] = useState(options[0])

  return (
    <div>
      <Header />
      < Route path="/">
        <Accordion items={items} />
      </Route>
      < Route path="/search">
          <Search />
      </Route>
      < Route path="/dropdown">
          <Dropdown 
          label="Select a color"
          selected={selected}
          onSelectedChange = {setSelected}
          options={options} />
      </Route>

      < Route path="/translate">
        <Translate   />
      </Route>
    </div>
  );
};
