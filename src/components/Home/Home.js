import React, { Component } from 'react';

import AppBar from 'material-ui/AppBar';
import Drawer from 'material-ui/Drawer';

import RecentConversations from '../RecentConversations/RecentConversations';

import './Home.css';

class Home extends Component {
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
            <RecentConversations />
          </Drawer>
          <div className="page-container">
            This is a home page
          </div>
        </div>
      </div>
    );
  }
}

export default Home;