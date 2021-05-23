import React, { useEffect, useState } from "react";
import { Dropdown } from "./Dropdown";
import { languageOptions } from "./data";
import Convert from "./Convert";

const Translate = () => {
  const [language, setlanguage] = useState(languageOptions[0]);
  const [text, setText] = useState("");
  const [debouncedText, setDebouncedText] = useState(text);

  useEffect(() => {
      const timerId = setTimeout( () => setDebouncedText(text), 1000)
      return () => {
        clearTimeout(timerId)
      }
  }, [text])


  return (
    <div>
      <div className="ui form">
        <div className="field">
            <label>Enter Text</label>
          <input value={text} onChange={(e) => setText(e.target.value)} />
        </div>
      </div>
      <Dropdown
        label="Select a language"
        selected={language}
        onSelectedChange={setlanguage}
        options={languageOptions}
      />
      <hr />
      <h3 className="ui header">Output</h3>
      <Convert text={debouncedText} language={language}/>
    </div>
  );
};

export default Translate;
