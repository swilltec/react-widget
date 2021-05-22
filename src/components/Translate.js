import React, { useState }  from 'react'
import { Dropdown } from './Dropdown'
import {languageOptions} from './data'

const Translate = () => {
    const [language, setlanguage] = useState(languageOptions[0])
    return (
        <div>
            <Dropdown 
            label="Select a language"
            selected={language}
            onSelectedChange={setlanguage}
            options={languageOptions}/>
        </div>
    )
}

export default Translate
