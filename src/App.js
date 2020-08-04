import React, { useState } from 'react';
import './App.css';
import { Button } from '@material-ui/core';


function App() {
  const [input, setInput] = useState('')
  const [messages, setMessages] = useState([])
  console.log(input)
  console.log(messages)
  const sendMessage = (event) => {
      // all sent message logic goes here
      event.preventDefault()
      setMessages([...messages, input])
      setInput('')
  }
  return (
    <div className="App">
      <h1> An app for those talkative few </h1>

      <form>
        <input value={input} onChange={event => setInput(event.target.value)}></input>
        <Button disabled={!input} variant= "contained" color="primary" type='submit' onClick={sendMessage}>Send Message</Button> 
      </form>

      {/* messages */}
      {
        messages.map(message => (
          <p>{message}</p>
        ))
      }

    </div>
  );
}

export default App;
