import React, { useState, useEffect } from 'react';
import './App.css';
import { Button, FormControl, InputLabel, Input } from '@material-ui/core';
import Message from './Message';
import firebase from "firebase"
import db from "./firebase"


function App() {
  const [input, setInput] = useState('')
  const [messages, setMessages] = useState([])
  const [userName, setUsername] = useState('')

  useEffect(() => {
    // when loaded run this once
    db.collection("messages").onSnapshot(snapshot => { 
      setMessages(snapshot.docs.map(doc => doc.data()))
    })
  }, [])


  useEffect(() => {
    // code is run here
    // if blank code is executed once on app.js load
    // if we have a variable added it runs everytime its changed 
    setUsername(prompt('Please enter your name'))
  }
  , []) // condition

  const sendMessage = (event) => {
      // all sent message logic goes here
      event.preventDefault()
      setMessages([
        ...messages, { userName: userName, text: input }
      ])
      setInput('')
  }
  return (
    <div className="App">
      <h1> An app for those chatty people </h1>
      <h2> Welcome {userName} </h2>



      <form>
        <FormControl>
          <InputLabel >Enter a message...</InputLabel>
          <Input input value={input} onChange={event => setInput(event.target.value)}/>
          <Button disabled={!input} variant= "contained" color="primary" type='submit' onClick={sendMessage}>Send Message</Button> 
        </FormControl>
      </form>

      {/* messages */}
      {
        messages.map(message => (
          <Message username={userName} message={message} />
        ))
      }

    </div>
  );
}

export default App;
