import React, { Component } from 'react';

import {List, ListItem} from 'material-ui/List';
import Subheader from 'material-ui/Subheader';
import Avatar from 'material-ui/Avatar';
import Divider from 'material-ui/Divider';
import CommunicationChatBubble from 'material-ui/svg-icons/communication/chat-bubble';

class RecentConversations extends Component {

  getConversationsList () {
    return this.props.conversations.map((conversation, index) => {
      return (
        <div key={index}>
          <ListItem
            leftAvatar={<Avatar src={conversation.avatar} />}
            rightIcon={<CommunicationChatBubble />}
            primaryText={conversation.name}
            secondaryText={
              <p>
                {conversation.lastMessage}
              </p>
            }
            secondaryTextLines={2} />
          
          <Divider inset={true} />
        </div>
      );
    });
  }

  render () {
    return (
      <List>
        <Subheader>Recent conversations</Subheader>
        {this.getConversationsList()}
      </List>
    );
  }
}

export default RecentConversations;
