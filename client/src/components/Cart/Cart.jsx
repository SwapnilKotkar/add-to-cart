import React from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  CircularProgress,
  Button
} from "@mui/material";
import { useSelector, useDispatch } from "react-redux";
import DeleteIcon from '@mui/icons-material/Delete';

import { removeFromCart } from '../../actions/products'

const Cart = () => {
  const { cart, isLoading } = useSelector((state) => state.productsReducer);
  const dispatch = useDispatch();

  if( !cart.length && !isLoading ) return <h4>Your cart is empty</h4>;

  return (
    isLoading ? <CircularProgress/> : (
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell align="left">Product</TableCell>
              <TableCell align="center">Price</TableCell>
              <TableCell align="right">Remove</TableCell>
            </TableRow>
          </TableHead>
          <TableBody style={{margin: "10px 0"}}>
            {
              cart.map((item) => (
                <TableRow
                  key={item._id}
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell component="th" scope="row">{item.Title}</TableCell>
                  <TableCell align="center" style={{ color: "#82CD47", fontSize: "16px", fontWeight: "bold"}}>₹{item.Variant_Price}</TableCell>
                  <TableCell align="right"><Button size="small" color="primary" onClick={() => { dispatch(removeFromCart(item._id)) }}><DeleteIcon fontSize="small"/> Delete</Button></TableCell>
                </TableRow>
              ))
            }
          </TableBody>
        </Table>
      </TableContainer>
    )
  );
};

export default Cart;
