import React, { Component } from 'react';
import TextField from 'material-ui/TextField';
import IconButton from 'material-ui/IconButton';
import Message from '../Message/Message';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import ContentSend from 'material-ui/svg-icons/content/send';

import './Conversation.css';

const styles = getMuiTheme(getMuiTheme);

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
        <div className="send-message-block">
          <TextField
            hintText="Enter your message"
            fullWidth={true}
          />
          <IconButton className="send-button" style={{ position: 'absolute' }}>
            <ContentSend color={styles.palette.primary1Color} />
          </IconButton>
        </div>
      </div>
    );
  }
}

export default Conversation;