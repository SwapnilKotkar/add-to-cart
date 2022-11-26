import React, { useEffect } from "react";
import { Pagination, PaginationItem } from "@material-ui/lab";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

import useStyles from "./styles";
import { getProducts } from "../actions/products";

const Paginate = ({ page }) => {
  const { numberOfPages } = useSelector((state) => state.productsReducer);
  const dispatch = useDispatch();
  const classes = useStyles();

  useEffect(() => {
    if (page) {
      dispatch(getProducts(page));
    }
  }, [page, dispatch]);

  return (
    <Pagination
      classes={{ ul: classes.ul }}
      count={numberOfPages}
      page={Number(page) || 1}
      variant="outlined"
      color="primary"
      renderItem={(item) => (
        <PaginationItem {...item} component={Link} to={`/products?page=${item.page}`} />
      )}
    />
  );
};

export default Paginate;
