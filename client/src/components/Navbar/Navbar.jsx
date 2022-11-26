import React from 'react'
import { Link } from 'react-router-dom'
import { AppBar, Typography, Button } from '@material-ui/core'
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';


import useStyles from '../../styles';

const Navbar = () => {
  const classes = useStyles();

  return (
    <AppBar className={classes.appBar}  position='static' color='inherit'>
        <Link to={'/'} style={{textDecoration: 'none'}}><Typography className={classes.heading} variant='h4' align='center'>Products</Typography></Link>
        <Link to={'/cart'}><Button color='primary' size='small'><ShoppingCartIcon/></Button></Link>
    </AppBar>

  )
}

export default Navbar