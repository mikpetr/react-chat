import React, { Component } from 'react';

import Avatar from 'material-ui/Avatar';

import './Message.css';

class Message extends Component {

  render () {
    return (
      <div className={'Message ' + this.props.align}>
        <Avatar className="avatar" src={this.props.avatar} />
        <div className="text">{this.props.text}</div>
      </div>
    );
  }
}

export default Message;