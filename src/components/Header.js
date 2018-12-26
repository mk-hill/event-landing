import React, { Component } from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import MenuIcon from '@material-ui/icons/Menu';
import IconButton from '@material-ui/core/IconButton';
import SideNav from './SideNav';

class Header extends Component {
  state = {
    isNavOpen: false,
    navTitles: [
      'Event Countdown',
      'About Event',
      'Highlights',
      'Pricing',
      'Location',
    ],
  };

  toggleDrawer(bool) {
    this.setState({ isNavOpen: bool });
  }

  render() {
    const { isNavOpen, navTitles } = this.state;
    return (
      <AppBar
        position="fixed"
        style={{
          backgroundColor: '#303030',
          boxShadow: 'none',
          padding: '.5rem 0',
        }}
      >
        <Toolbar>
          <div className="header-logo">
            <div className="font-concert header-logo-branding">Branding</div>
            <div className="header-logo-title">Event tickets</div>
          </div>
          <IconButton
            aria-label="Menu"
            color="inherit"
            onClick={() => this.toggleDrawer(true)}
          >
            <MenuIcon />
          </IconButton>
          <SideNav
            open={isNavOpen}
            onClose={bool => this.toggleDrawer(bool)}
            titles={navTitles}
          />
        </Toolbar>
      </AppBar>
    );
  }
}

export default Header;
