import React, { useState } from "react";
import { Accordion } from "./Accordion";
import { items, options } from "./data";
import { Dropdown } from "./Dropdown";
import { Search } from "./Search";
import Translate from "./Translate";

export const App = () => {

  return (
    <div>
      {/* <Accordion items={items} /> */}
      {/* <Search /> */}
      <Translate />
    </div>
  );
};
