import React, { useEffect, useState } from 'react'
import { Container, Grow, Grid, Paper, AppBar, TextField, Button} from '@material-ui/core'
import { useDispatch } from 'react-redux'
import { useLocation, useNavigate} from 'react-router-dom'
import ChipInput from 'material-ui-chip-input'

import { getProducts, getProductsBySearch } from '../../actions/products'
import Products from '../../components/Products/Products';
import Form from '../../components/Form/Form';
import Paginate from '../../components/Paginate'
import useStyles from './styles';

const useQuery = () => {
  return new URLSearchParams(useLocation().search)
}

const Home = () => {
  const navigate = useNavigate();
  const classes = useStyles();
  const dispatch = useDispatch();
  const query = useQuery();
  const page = query.get('page') || 1 ;
  // const searchQuery = query.get('searchQuery');
  const [search, setSearch] = useState('')
  const [SKU, setSKU] = useState('')
  const [tags, setTags] = useState([])

  const searchProduct = () => {
    if(search.trim() || SKU.trim() || tags){
      dispatch(getProductsBySearch({ search, SKU, tags: tags.join(',')}))
      navigate(`/products/search?searchQuery=${search || 'none'}&sku=${SKU}&tags=${tags.join(',')}`)
    }else{
      navigate('/')
    }
  }

  const handleAdd = (tag) => { setTags([...tags, tag])}

  const handleDelete = (tagToDelete) => { setTags(tags.filter((tag) => tag !== tagToDelete))}

  useEffect(() => {
    dispatch(getProducts())
  }, [dispatch])

  return (
    <Grow in>
        <Container className={classes.containerWidth}>
            <Grid className={classes.gridContainer} container justifyContent='space-between' alignItems='stretch' spacing={3}>
              <Grid item xs={12} sm={6} md={9}>
                <Products/>
              </Grid>
              <Grid item xs={12} sm={6} md={3}>
              <AppBar className={classes.appBarSearch} position='static' color='inherit'>
                <TextField style={{marginBottom: "10px"}} name='search' variant='outlined' label='Search products' fullWidth value={search} onChange={(e) => setSearch(e.target.value)}/>
                <TextField name='searchbySKU' variant='outlined' label='Search by SKU' fullWidth value={SKU} onChange={(e) => setSKU(e.target.value)}/>
                <ChipInput style={{margin: "10px 0"}} value={ tags } onAdd={handleAdd} onDelete={handleDelete} label='Search tags' variant='outlined'/>
                <Button onClick={searchProduct} color='primary' variant='contained'>Search</Button>
              </AppBar>
                <Form/>
                <Paper elevation={2} className={classes.pagination}>
                  <Paginate page={page}/>
                </Paper>
              </Grid>
            </Grid>
        </Container>
      </Grow>
  )
}

export default Home