import React from 'react';
import MenuIcon from '@material-ui/icons/Menu';
import { Link } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import Button from '@material-ui/core/Button';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import MailIcon from '@material-ui/icons/Mail';

const useStyles = makeStyles({
  list: {
    width: 250,
    backgroundSize:"100%",
    height:'100%',
    backgroundColor:"#ffc371"

  },
  fullList: {
    width: 'auto',
  },
});

export default function TemporaryDrawer() {
  const classes = useStyles();
  const [state, setState] = React.useState({
    top: false,
    left: false,
    bottom: false,
    right: false,
  });

  const toggleDrawer = (side, open) => event => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }

    setState({ ...state, [side]: open });
  };

  const sideList = side => (
    <div
      className={classes.list}
      role="presentation"
      onClick={toggleDrawer(side, false)}
      onKeyDown={toggleDrawer(side, false)}
    >
      <List >
        {['Home', 'Add+', 'Meus Negócios', 'Dashboard'].map((text, index) => (
          <ListItem button key={text}>
            <ListItemIcon>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon>
            {text === "Home"?< Link to='/'><ListItemText primary={text} /></Link>:null}
            {text === "Add+"?< Link to='/perfil'><ListItemText primary={text} /></Link>:null}
            {text === "Meus Negócios"?< Link to='/vitrine'><ListItemText primary={text} /></Link>:null}
            {text === "Dashboard"?< Link to='/admin'><ListItemText primary={text} /></Link>:null}


          </ListItem>
        ))}
      </List>
     
    </div>
  );

  
  return (
    <div>
           
      <Button onClick={toggleDrawer('left', true)}>
      <MenuIcon/>
      </Button>
    
      <Drawer  open={state.left} onClose={toggleDrawer('left', false)}>
        {sideList('left')}
      </Drawer>
    
    
      <Drawer anchor="right" open={state.right} onClose={toggleDrawer('right', false)}>
        {sideList('right')}
      </Drawer>
    </div>
  );
}