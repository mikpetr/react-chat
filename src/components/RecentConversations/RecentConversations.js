import React, { Component } from 'react';

import {List, ListItem} from 'material-ui/List';
import Subheader from 'material-ui/Subheader';
import Avatar from 'material-ui/Avatar';
import Divider from 'material-ui/Divider';
import CommunicationChatBubble from 'material-ui/svg-icons/communication/chat-bubble';

class RecentConversations extends Component {
  constructor (props) {
    super(props);

    this.state = {
      conversations: [
        {
          avatar: 'images/ok-128.jpg',
          name: 'Brunch this weekend?',
          lastMessage: 'Brendan Lim -- I\'ll be in your neighborhood doing errands this weekend. Do you want to grab brunch?'
        }, {
          avatar: 'images/kolage-128.jpg',
          name: 'Summer BBQ -- 4',
          lastMessage: 'to me, Scott, Jennifer -- Wish I could come, but I\'m out of town this weekend.'
        }, {
          avatar: 'images/uxceo-128.jpg',
          name: 'Oui oui',
          lastMessage: 'Grace Ng -- Do you have Paris recommendations? Have you ever been?'
        }, {
          avatar: 'images/kerem-128.jpg',
          name: 'Birdthday gift',
          lastMessage: 'Kerem Suer -- Do you have any ideas what we can get Heidi for her birthday? How about a pony?'
        }, {
          avatar: 'images/raquelromanp-128.jpg',
          name: 'Recipe to try',
          lastMessage: 'Raquel Parrado -- We should eat this: grated squash. Corn and tomatillo tacos.'
        }
      ]
    };
  }

  getConversationsList (conversations) {
    return conversations.map((conversation, index) => {
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
        {this.getConversationsList(this.state.conversations)}
      </List>
    );
  }
}

export default RecentConversations;
