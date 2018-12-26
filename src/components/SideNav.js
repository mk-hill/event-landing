import React from 'react';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';

const SideNav = ({ open, onClose, titles }) => {
  return (
    <Drawer anchor="right" open={open} onClose={() => onClose(false)}>
      <List component="nav">
        {titles.map(title => (
          <ListItem key={title} button onClick={() => console.log(title)}>
            {title}
          </ListItem>
        ))}
      </List>
    </Drawer>
  );
};

export default SideNav;
