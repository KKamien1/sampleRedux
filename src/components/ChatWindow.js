import React from 'react';
import _ from 'lodash';
import ChatHeader from './ChatHeader';
import Chats from './Chats';
import store from '../store';

const ChatWindow = ({ activeUserId }) => {
  const state = store.getState();
  const activeUser = state.contacts[activeUserId];
  const messages = state.messages[activeUserId];
  return (
    <div className="ChatWindow">
      Conversation for user id:
      {activeUserId}
      <ChatHeader user={activeUser} />
      <Chats messages={_.values(messages)} />
    </div>
  );
};

export default ChatWindow;
