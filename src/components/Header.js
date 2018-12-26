import React, { Component } from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import MenuIcon from '@material-ui/icons/Menu';
import IconButton from '@material-ui/core/IconButton';
import SideNav from './SideNav';

class Header extends Component {
  state = {
    showHeader: false,
    isNavOpen: false,
  };

  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll);
  }

  handleScroll = () => {
    this.setState({ showHeader: window.scrollY > 100 });
  };

  toggleDrawer(bool) {
    this.setState({ isNavOpen: bool });
  }

  render(props) {
    const { showHeader, isNavOpen } = this.state;
    const { navTitles } = this.props;
    return (
      <AppBar
        position="fixed"
        style={{
          backgroundColor: showHeader ? '#303030' : 'transparent',
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
