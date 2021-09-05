import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import Prods from './prods';
import {Button} from '@material-ui/core';
import Grid from '@material-ui/core/Grid';
import Header from '../Header/index';


const useStyles= makeStyles({
  page:{
    padding:'15px'
  },
  button:{
    backgroundColor:'#c1c1c1',
    width:'90px',
    height:'90px'
  },
  control:{
    paddingTop:'10px'
  }
})
const Prod =()=>{
  const classes = useStyles();
  

  
  return(
      <>
        <Header/>
        <Grid container spacing={5} className={classes.control}>
          <Grid item xs={4}>
            <Button className={classes.button}>

            </Button>
          </Grid>
          <Grid item xs={4}>
          <Button className={classes.button}>
              
              </Button>
            
          </Grid>
          <Grid item xs={4}>
              <Button className={classes.button}>
              
              </Button>
          </Grid>

        </Grid>
        <div className={classes.page}>
          <Prods/>
        </div>
      </>
  );
  
  

}

export default Prod;
