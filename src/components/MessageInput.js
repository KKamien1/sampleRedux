import React from 'react';
import store from '../store';
import { setTypingValue, sendMessage } from '../actions';

const MessageInput = ({ value }) => {
  const state = store.getState();
  const handleChange = (e) => {
    store.dispatch(setTypingValue(e.target.value));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { typing, activeUserId } = state;
    store.dispatch(sendMessage(typing, activeUserId));
  };

  return (
    <form onSubmit={handleSubmit} className="Message">
      <input
        className="Message__input"
        onChange={handleChange}
        value={value}
        placeholder="write a message"
      />
    </form>
  );
};

export default MessageInput;
