import React from 'react';
import Button from '@material-ui/core/Button';
import icon_ticket from '../../icons/ticket.png';

const BuyButton = ({
  text = 'Get your tickets',
  background = '#ffa600',
  color = '#fff',
  url,
}) => {
  return (
    <Button
      href={url}
      variant="contained"
      size="small"
      style={{
        background,
        color,
      }}
    >
      <img src={icon_ticket} alt="ticket icon" className="iconImage" />
      {text}
    </Button>
  );
};

export default BuyButton;
