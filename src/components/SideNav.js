import React from 'react';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import { scroller } from 'react-scroll';

const SideNav = ({ open, onClose, titles }) => {
  const scrollAndClose = section => {
    scroller.scrollTo(section, {
      duration: 1200,
      delay: 50,
      smooth: true,
      offset: -150,
    });
    onClose(false);
  };
  return (
    <Drawer anchor="right" open={open} onClose={() => onClose(false)}>
      <List component="nav">
        {titles.map(title => (
          <ListItem key={title} button onClick={() => scrollAndClose(title)}>
            {title}
          </ListItem>
        ))}
      </List>
    </Drawer>
  );
};

export default SideNav;
