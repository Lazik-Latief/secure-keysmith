// import { useState,useEffect, useCallback, useRef } from 'react'

// function App() {
  
//   const [password, setPassword] = useState("")
//   const [length, setLength] = useState(8)
//   const [numberAllowed, setNumberAllowed] = useState(false)
//   const [characterAllowed, setCharacterAllowed] = useState(false)

//   const passwordRef = useRef(null)

//   const  copyClip = useCallback (()=>{
//      passwordRef.current?.select();
//     window.navigator.clipboard.writeText(password);
//   }, [password]);

  
//   //function to generate password

//   const passwordGene = useCallback(()=>{

//     let pass =""
//     let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"

//     if(numberAllowed) str += "0123456789"
//     if(characterAllowed) str += "{}[]';:\/*-$#@!~"

//     for(let i = 1; i <= length; i++){
//     let char = Math.floor(Math.random() * str.length + 1 )

//     pass += str.charAt(char)
//     }
//     setPassword(pass)
//   }, [length, numberAllowed, characterAllowed, setPassword])

//   useEffect(()=>{
//     passwordGene()
//   },[length, numberAllowed, characterAllowed,passwordGene])

//   return (
//     <>
//     <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-black via-gray-900 to-gray-800 px-4">
//     <div className="w-full max-w-lg rounded-2xl bg-gray-900/80 backdrop-blur-xl shadow-2xl border border-gray-700 p-6">
//        <h1 class="text-3xl bg-pink-500  py-4 px-4 font-bold ">
//     My Password Generator
//   </h1>
//       <div className="flex items-center bg-gray-800 rounded-xl overflow-hidden border border-gray-700 mb-6">
//   <input type="text"
//     value={password}
//     onChange={(e)=>{e.target.value}}
//     ref ={passwordRef}

//   />
//  <button onClick={
//     copyClip()
//  }  className="bg-blue-600 hover:bg-blue-700 transition px-5 py-3 text-white font-medium">Copy</button>
//  </div>

//     {/* Controls */}
//         <div className="space-y-5 text-sm text-gray-300">
//     <input type="range"
//       onChange={(e)=>{setLength(e.target.value)}}
//       value={length}
//     />
//     <label  >Length : {length}</label>

//     <input type="checkbox"
//       value={characterAllowed}
//       onChange={()=>{setCharacterAllowed((prev) => !prev)}}
//     />
  
//    <label  >Character</label>
    
//     <input type="checkbox"
//       value={numberAllowed}
//       onChange={()=>{setNumberAllowed((prev) => !prev)}}
//     />
//      <label  >Number</label>
//      </div>
//     </div>
//     </div>
    
//     </>
//   )
// }

// export default App

// tailwind version :::

import { useState, useEffect, useCallback, useRef } from "react";

function App() {
  // states for password and settings
  const [password, setPassword] = useState("");
  const [length, setLength] = useState(8);
  const [numberAllowed, setNumberAllowed] = useState(false);
  const [characterAllowed, setCharacterAllowed] = useState(false);  
  const [strengthScore, setStrengthScore] = useState(0);
const [strengthText, setStrengthText] = useState("");

// check password strength
useEffect(() => {
  let score = 0;

  // length check
  if (password.length >= 8) {
    score++;
  }

  // number check
  if (numberAllowed) {
    score++;
  }

  // special character check
  if (characterAllowed) {
    score++;
  }

  // set score
  setStrengthScore(score);

  // set strength text
  if (score === 1) {
    setStrengthText("Weak");
  } else if (score === 2) {
    setStrengthText("Moderate");
  } else if (score === 3) {
    setStrengthText("Strong");
  } else {
    setStrengthText("");
  }
}, [password, numberAllowed, characterAllowed]);


  // reference for input box
  const passwordRef = useRef(null);

  // copy password to clipboard
  const copyToClipboard = useCallback(() => {
    passwordRef.current?.select();
     window.navigator.clipboard.writeText(password);
  }, [password]);

  // password generator logic
  const generatePassword = useCallback(() => {
    let pass = "";
    let chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";

    if (numberAllowed) chars += "0123456789";
    if (characterAllowed) chars += "!@#$%^&*(){}[]<>?/";

    for (let i = 0; i < length; i++) {
      const randomIndex = Math.floor(Math.random() * chars.length);
      pass += chars.charAt(randomIndex);
    }

    setPassword(pass);
  }, [length, numberAllowed, characterAllowed]);

  // regenerate password on change
  useEffect(() => {
    generatePassword();
  }, [length, numberAllowed, characterAllowed, generatePassword]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-tr from-[#0f0c29] via-[#302b63] to-[#24243e] px-4">
      
      {/* Main Card */}
      <div className="w-full max-w-md rounded-2xl bg-white/10 backdrop-blur-xl border border-white/20 shadow-2xl p-6">
        
        {/* Title */}
        <h1 className="text-center text-3xl font-bold text-white mb-6 tracking-wide">
          🔐 Password Generator
        </h1>

        {/* Password Box */}
        <div className="flex items-center bg-black/40 rounded-xl overflow-hidden border border-white/20 mb-6">
          <input
            type="text"
            value={password}
            readOnly
            ref={passwordRef}
            className="w-full bg-transparent text-white px-4 py-3 outline-none text-lg"
          />

          <button
            onClick={copyToClipboard}
            className="bg-pink-600 hover:bg-pink-700 transition px-4 py-3 text-white font-medium"
          >
            Copy
          </button>
        </div>
        <div>
          <p className="text-white mb-4">Strength: <span className="font-bold">{strengthText}</span></p>
        </div>

        {/* Controls */}
        <div className="space-y-5 text-sm text-gray-200">

          {/* Length Slider */}
          <div>
            <div className="flex justify-between mb-1">
              <span>Password Length</span>
              <span className="font-bold">{length}</span>
            </div>

            <input
              type="range"
              min="6"
              max="20"
              value={length}
              onChange={(e) => setLength(e.target.value)}
              className="w-full accent-pink-500"
            />
          </div>

          {/* Options */}
          <div className="flex items-center justify-between">
            <label className="flex items-center gap-2 cursor-pointer">
              <input
                type="checkbox"
                checked={numberAllowed}
                onChange={() => setNumberAllowed((prev) => !prev)}
                className="accent-pink-500"
              />
              Include Numbers
            </label>

            <label className="flex items-center gap-2 cursor-pointer">
              <input
                type="checkbox"
                checked={characterAllowed}
                onChange={() => setCharacterAllowed((prev) => !prev)}
                className="accent-pink-500"
              />
              Special Characters
            </label>
          </div>
        </div>

        {/* Footer */}
        <p className="text-center text-xl text-gray-400 mt-6">
          Built on Day 3 of <span className="text-pink-400 text-2xl">#LetsCode </span> 
        </p>
      </div>
    </div>
  );
}

export default App;
