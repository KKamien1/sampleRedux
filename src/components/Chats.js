import React from 'react';

const Chat = ({ message }) => {
  const { text, is_user_msg } = message;
  return <span className={`Chat ${is_user_msg ? 'is-user-msg' : ''} `}>{text}</span>;
};

export default function Chats({ messages }) {
  console.log(messages);
  return messages.map(message => <Chat message={message} key={message.number} />);
}
