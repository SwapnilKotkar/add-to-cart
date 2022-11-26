import React, { useState } from 'react';
import FileBase from 'react-file-base64';
import { TextField, Button, Typography, Paper} from '@material-ui/core';
import { useDispatch } from 'react-redux'

import useStyles from './styles';

import { createProduct } from '../../actions/products'

const Form = () => {
  const dispatch = useDispatch();

  const [productData, setProductData] = useState({
    Title: "",
    Body: "",
    Tags: "",
    Variant_Price: "",
    Image_Src: ""
  });
  
  const classes = useStyles();

  const handleChange = (e) => {
    const {name, value} = e.target;

    setProductData({...productData, [name]:value})
  }

  const clear = () => {
    setProductData(
      {
        Title: "",
        Body: "",
        Tags: "",
        Variant_Price: "",
        Image_Src: ""
      }
    )
  }

  const handleSubmit = (e) => {
    e.preventDefault();

    dispatch(createProduct(productData));

    clear();
  }

  return (
    <Paper className={classes.paper}>
      <form autoComplete='off' className={`${classes.root} ${classes.form}`} onSubmit={handleSubmit}>
        <Typography variant='h6'>Post a product</Typography>
        <TextField name="Title" variant='outlined' label='Title' fullWidth value={productData.Title} onChange={handleChange} required></TextField>
        <TextField name="Body" variant='outlined' label='Description' fullWidth value={productData.Body} onChange={handleChange} required></TextField>
        <TextField name="Tags" variant='outlined' label='Tags' fullWidth value={productData.Tags} onChange={(e) => { setProductData({...productData, Tags: e.target.value.split(',')})}} required></TextField>
        <TextField name="Variant_Price" variant='outlined' label='Variant_Price' type="number" fullWidth value={productData.Variant_Price} onChange={handleChange} required></TextField>
        <div className={classes.fileInput}><FileBase type="file" mulitple={false} onDone={({base64}) => setProductData({...productData, Image_Src: base64}) }/></div>
        <Button className={classes.buttonSubmit} variant='contained' color='primary' size='large' type='submit' fullWidth>Submit</Button>
        <Button variant='contained' color='secondary' size='small' onClick={clear} fullWidth>Clear</Button>
      </form>
    </Paper>
  )
}

export default Form