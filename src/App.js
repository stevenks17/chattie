import React, { useState } from 'react';
import './App.css';

function App() {
  const [input, setInput] = useState('')
  return (
    <div className="App">
      <h1> An app for those talkative few </h1>

      <input value={input} onChange={event => setInput(event.target.value)}></input>
      <button>Send Message</button> 
      {/* input field */}
      {/* button */}


      {/* messages */}

    </div>
  );
}

export default App;
