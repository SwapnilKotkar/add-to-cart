import React from 'react'
import { Link } from 'react-router-dom'
import { AppBar, Typography, Button } from '@mui/material'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

import useStyles from '../../styles';

const Navbar = () => {
  const classes = useStyles();

  return (
    <AppBar className={classes.appBar} position='static' color='inherit'>
      <div className={classes.box}>
      <div>
        <Link to={'/'} style={{textDecoration: 'none'}}><Typography className={classes.heading} variant='h4' align='center'>Products</Typography></Link>
        </div>
        <div>
        <Link to={'/cart'}><Button color='primary' size='small'><ShoppingCartIcon/></Button></Link>
        </div>
      </div>
        
    </AppBar>

  )
}

export default Navbar