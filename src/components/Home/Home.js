import React, { Component } from 'react';

import AppBar from 'material-ui/AppBar';
import Drawer from 'material-ui/Drawer';

import RecentConversations from '../RecentConversations/RecentConversations';
import Conversation from '../Conversation/Conversation';

import './Home.css';

class Home extends Component {

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

  render () {
    return (
      <div className="Home">
        <AppBar
          title="Conversation name"
          iconClassNameRight="muidocs-icon-navigation-expand-more" />
        
        <div>
          <Drawer docked={true} containerStyle={{
            top: '64px',
            width: '25%'
          }}>
            <RecentConversations conversations={this.state.conversations} />
          </Drawer>
          <div className="page-container">
            <Conversation />
          </div>
        </div>
      </div>
    );
  }
}

export default Home;