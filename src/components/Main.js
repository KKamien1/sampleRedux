import React from 'react';

import Empty from './Empty';
import ChatWindow from './ChatWindow';

const Main = ({ user, activeUserId }) => {
  const renderMainContent = () => {
    if (!activeUserId) {
      return <Empty user={user} activeUserId={activeUserId} />;
    }
    return <ChatWindow activeUserId={activeUserId} />;
  };

  return <main className="Main">{renderMainContent()}</main>;
};

export default Main;
