import React, { Component } from 'react';

import Message from '../Message/Message';

import './Conversation.css';

class Conversation extends Component {

  constructor (props) {
    super(props);

    this.state = {
      userId: 2,
      conversation: {
        title: 'Dacha party',
        messages: [
          {
            user: {
              id: 1,
              avatar: 'images/ok-128.jpg'
            },
            text: 'Hello. How it\'s going?'
          }, {
            user: {
              id: 2,
              avatar: 'images/kolage-128.jpg'
            },
            text: 'Hi. It is Fine.'
          }, {
            user: {
              id: 2,
              avatar: 'images/kolage-128.jpg'
            },
            text: 'I have prepared space. We are ready :)'
          }
        ]
      }
    };
  }

  getMessages (messages) {
    return messages.map((message, index) => {
      let align = message.user.id === this.state.userId ? 'right' : 'left';
      return <Message align={align} avatar={message.user.avatar} text={message.text} key={index} />;
    });
  }

  render () {
    return (
      <div className="Conversation">
        <h3>{this.state.conversation.title}</h3>
        {this.getMessages(this.state.conversation.messages)}
      </div>
    );
  }
}

export default Conversation;