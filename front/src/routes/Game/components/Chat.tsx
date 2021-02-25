import React, { useState, useEffect, useRef, useContext } from 'react';
import styled from 'styled-components';
import CommonContext from '~utils/CommonContext';

const Chat = () => {
  const [input, setInput] = useState('');
  const { ws, game, user, error, loading } = useContext(CommonContext);

  const sendMessage = (content) => {
    try {
      ws.send(
        JSON.stringify({
          type: 'client-message',
          payload: { author: user, content, game: game },
        })
      );
      setInput('');
    } catch (error) {
      console.debug(error);
    }
  };

  const handleInputChange = (event) => {
    const newInput = event.target.value;
    if (newInput[newInput.length - 1] === '\n') {
      sendMessage(newInput);
    } else {
      setInput(newInput);
    }
  };

  return (
    <Wrapper>
      <Messages>
        {game &&
          game.chat.messages.map((message) => (
            <Message key={message.id}>
              {message.author}: {message.content}
            </Message>
          ))}
      </Messages>
      <TextField
        placeholder="Send a message..."
        value={input}
        onChange={handleInputChange}
      />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  width: 100%;
  margin-top: 20px;
`;

const Message = styled.li`
  margin-bottom: 10px;
`;

const TextField = styled.textarea`
  margin-top: 20px;
  background-color: var(--main-900);
  color: white;
  border-radius: 4px;
  border: 2px solid var(--secondary-700);
  resize: none;
  width: 100%;
  box-sizing: border-box;
`;

const Messages = styled.div`
  height: 150px;
  overflow-y: scroll;
  border: 1px solid var(--main-500);
  border-radius: 5px;
  padding: 10px;
`;

export default Chat;