import React from 'react';

const Chat = ({ message }) => {
  const { text, is_user_msg } = message;
  return <span className={`Chat ${is_user_msg ? 'is-user-msg' : ''} `}>{text}</span>;
};

class Chats extends React.Component {
  constructor(props) {
    super(props);
    this.chatsRef = React.createRef();
  }

  componentDidMount() {
    this.scrollToBottom();
  }

  componentDidUpdate() {
    this.scrollToBottom();
  }

  scrollToBottom() {
    this.chatsRef.current.scrollTop = this.chatsRef.current.scrollHeight;
  }

  render() {
    const { messages } = this.props;
    console.log(this.chatsRef);
    return (
      <div className="Chats" ref={this.chatsRef}>
        {messages.map(message => (
          <Chat message={message} key={message.number} />
        ))}
      </div>
    );
  }
}

export default Chats;
