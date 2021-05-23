import axios from "axios";
import React, { useEffect, useState } from "react";
import { GOOGLE_API_KEY } from "./data";

const Convert = ({ language, text }) => {
  const [translated, setTranslated] = useState("");

  useEffect(() => {
    const translate = async () => {
      const { data } = await axios.post(
        "https://translation.googleapis.com/language/translate/v2",
        {},
        {
          params: {
            q: text,
            target: language.value,
            key: GOOGLE_API_KEY,
          },
        }
      );
      setTranslated(data.data.translations[0].translatedText)
    };
    translate()
   
  }, [language, text]);
  return <div>
      <h1 className="ui header">{translated}</h1>
  </div>;
};

export default Convert;
