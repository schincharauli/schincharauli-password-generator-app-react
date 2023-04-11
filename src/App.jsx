import styled from "styled-components";
import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";

import "./App.css";
import {
  numbers,
  upperCaseLetters,
  lowerCaseLetters,
  specialCharacters,
} from "./characters";

function App() {
  const [data, setData] = useState(0);

  const [password, setPassword] = useState("");

  const [passwordLength, setPasswordLength] = useState(20);
  const [includeUppercase, setIncludeUppercase] = useState(false);
  const [includeLowercase, setIncludeLowercase] = useState(false);
  const [includeNumbers, setIncludeNumbers] = useState(false);
  const [includeSymbols, setIncludeSymbols] = useState(false);

  const handleGeneratePassword = (e) => {
    let characterList = "";
    if (includeUppercase) {
      characterList = characterList + upperCaseLetters;
    }
    if (includeLowercase) {
      characterList = characterList + lowerCaseLetters;
    }
    if (includeNumbers) {
      characterList = characterList + numbers;
    }
    if (includeSymbols) {
      characterList = characterList + specialCharacters;
    }

    setPassword(createPassword(characterList));
  };

  const createPassword = (characterList) => {
    let password = "";
    const characterListLength = characterList.length;

    for (let i = 0; i < passwordLength; i++) {
      const characterIndex = Math.round(Math.random() * characterListLength);
      password = password + characterList.charAt(characterIndex);
    }
    return password;
  };

  const copytoFun = () => {
    let newTextArea = document.createElement("textarea");
    newTextArea = innerText = password;
    document.body.appendChild(newTextArea);
    newTextArea.select();
    document.execComand("copy");
    newTextArea.remove();
  };
  const handleCopyPassword = (e) => {
    copytoFun();
  };

  return (
    <div className="App">
      <div className="container">
        <div className="generator">
          <h2 className="generator-header">Password Generator</h2>
          <div className="generator-password">
            <h3 className="fieldText">{password}</h3>
            <button onClick={handleCopyPassword} className="copy-btn">
              <svg width="21" height="24" xmlns="http://www.w3.org/2000/svg">
                <path
                  className="copied"
                  d="M20.341 3.091 17.909.659A2.25 2.25 0 0 0 16.319 0H8.25A2.25 2.25 0 0 0 6 2.25V4.5H2.25A2.25 2.25 0 0 0 0 6.75v15A2.25 2.25 0 0 0 2.25 24h10.5A2.25 2.25 0 0 0 15 21.75V19.5h3.75A2.25 2.25 0 0 0 21 17.25V4.682a2.25 2.25 0 0 0-.659-1.591ZM12.469 21.75H2.53a.281.281 0 0 1-.281-.281V7.03a.281.281 0 0 1 .281-.281H6v10.5a2.25 2.25 0 0 0 2.25 2.25h4.5v1.969a.282.282 0 0 1-.281.281Zm6-4.5H8.53a.281.281 0 0 1-.281-.281V2.53a.281.281 0 0 1 .281-.281H13.5v4.125c0 .621.504 1.125 1.125 1.125h4.125v9.469a.282.282 0 0 1-.281.281Zm.281-12h-3v-3h.451c.075 0 .147.03.2.082L18.667 4.6a.283.283 0 0 1 .082.199v.451Z"
                  fill="#A4FFAF"
                />
              </svg>
            </button>
          </div>

          <div className="output-container">
            <label className="sliderLabel" for="slider">
              Character Length{" "}
              <span className="sliderValue" id="sliderValue">
                <p>{data}</p>
              </span>
            </label>
            <input
              defaultValue={passwordLength}
              onChange={(e) => {
                setPasswordLength(e.target.value);
                setData(e.target.value);
              }}
              id="passwordStrength"
              name="password-strength"
              className="slider"
              type="range"
              min="0"
              max="20"
              value={data}
            />

            <div className="form-group">
              <label htmlFor="uppercase-letters">
                <input
                  checked={includeUppercase}
                  onChange={(e) => setIncludeUppercase(e.target.checked)}
                  type="checkbox"
                  id="uppercaseLetters"
                  name="uppercase-letters"
                />
                <p>Include Uppercase Letters</p>
              </label>
            </div>

            <div className="form-group">
              <label htmlFor="lovercase-letters">
                <input
                  checked={includeLowercase}
                  onChange={(e) => setIncludeLowercase(e.target.checked)}
                  type="checkbox"
                  id="lowercaseLetters"
                  name="lowercase-letters"
                />
                <p> Include Lowercase Letters</p>
              </label>
            </div>

            <div className="form-group">
              <label htmlFor="included-numbers">
                <input
                  checked={includeNumbers}
                  onChange={(e) => setIncludeNumbers(e.target.checked)}
                  type="checkbox"
                  id="inculdeNumbers"
                  name="included-numbers"
                />
                <p>Include Numbers</p>
              </label>
            </div>

            <div className="form-group">
              <label htmlFor="included-symbols">
                <input
                  checked={includeSymbols}
                  onChange={(e) => setIncludeSymbols(e.target.checked)}
                  type="checkbox"
                  id="inculdeSymbols"
                  name="included-symbols"
                />
                <p>Include Symbols</p>
              </label>
            </div>

            <div className="strength flex">
              <h2 className="">Strength</h2>
              <div className="strengthLvl">
                <p className="" id="levelTxt">
                  weak
                </p>
                <div id="bar1" class="bars bar1"></div>
                <div id="bar2" class="bars bar2"></div>
                <div id="bar3" class="bars bar3"></div>
                <div id="bar4" class="bars bar4"></div>
              </div>
            </div>

            <button onClick={handleGeneratePassword} className="generator-btn">
              Generate Password
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
