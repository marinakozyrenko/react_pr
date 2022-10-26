import React, { useState, useEffect, UseRef } from 'react';
import './App.css';
// import Message from './message';

function App() {
  const [messageList, setMessageList] = useState([]);
  const [text, setText] = useState('');
  const [author, setAuthor] = useState('');

  useEffect(() => {
    setTimeout(() => (
      botAnswer(messageList)
    ), 2000)
  }, [messageList])

  const handleSubmit = (e) => {
    e.preventDefault();

    setMessageList(prevState => [...prevState, {
      id: giveLastId(prevState),
      author,
      text
    }])
  }

  function giveLastId(array) {
    return array.length ? array[array.length - 1].id + 1 : 0;
  }

  function botAnswer() {
    const lastAuthor = messageList[messageList.length - 1];
    if (lastAuthor && lastAuthor.author) {
      setMessageList(prevState => [...prevState, {
        id: giveLastId(prevState),
        text: `Message of author ${lastAuthor.author} sent`
      }])
    }
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>Text</label>
        <input value={text} onChange={(e) => setText(e.target.value)} />
        <label>Name</label>
        <input value={author} onChange={(e) => setAuthor(e.target.value)} />
        <button type='submit'>Send message</button>
      </form>
      {messageList.map((message) => {
        return (
          <div key={message.id}>
            {message.author && <p>Author: {message.author}</p>}
            <p>{message.author && <span>Text:</span>} {message.text}</p>
          </div>
        )
      })}
    </div>
  );
}

export default App;
