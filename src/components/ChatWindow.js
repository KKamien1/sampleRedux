import React from 'react';
import _ from 'lodash';
import ChatHeader from './ChatHeader';
import Chats from './Chats';
import MessageInput from './MessageInput';
import store from '../store';

const ChatWindow = ({ activeUserId }) => {
  const state = store.getState();
  const activeUser = state.contacts[activeUserId];
  const messages = state.messages[activeUserId];
  const { typing } = state;
  return (
    <div className="ChatWindow">
      Conversation for user id:
      {activeUserId}
      <ChatHeader user={activeUser} />
      <Chats messages={_.values(messages)} />
      <MessageInput value={typing} />
    </div>
  );
};

export default ChatWindow;
