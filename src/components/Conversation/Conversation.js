import React, { Component } from 'react';

import Avatar from 'material-ui/Avatar';

import './Conversation.css';

class Conversation extends Component {
  render () {
    return (
      <div className="Conversation">
        Conversation here
        <div className="message">
          <Avatar className="avatar" src="images/ok-128.jpg" />
          <div className="text">some text</div>
        </div>
      </div>
    );
  }
}

export default Conversation;