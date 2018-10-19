import React from 'react';

const ChatWindow = ({ activeUserId }) => (
  <div className="ChatWindow">
      Conversation for user id:
    {activeUserId}
  </div>
);

export default ChatWindow;
