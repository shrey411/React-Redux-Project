
export const LOAD_PRODUCTS = 'LOAD_PRODUCTS';



export const FETCH_PRODUCTS_REQUEST = 'FETCH_PRODUCTS_REQUEST';
export const FETCH_PRODUCTS_SUCCESS = 'FETCH_PRODUCTS_SUCCESS';
export const FETCH_PRODUCTS_FAILURE = 'FETCH_PRODUCTS_FAILURE';
export const SET_HAS_MORE = 'SET_HAS_MORE'; 

export const loadProducts = (products) => {
  return {
    type: LOAD_PRODUCTS,
    payload: products
  };
};

// For Add Item to Cart
export const addCart = (products) =>{
  return {
      type:"ADDITEM",
      payload:products
  }
}

// For Delete Item to Cart
export const delCart = (products) =>{
  return {
      type:"DELITEM",
      payload:products
  }
}



export const fetchProductsRequest = () => ({
  type: FETCH_PRODUCTS_REQUEST
});

export const fetchProductsSuccess = (data) => ({
  type: FETCH_PRODUCTS_SUCCESS,
  payload: data
});

export const fetchProductsFailure = (error) => ({
  type: FETCH_PRODUCTS_FAILURE,
  payload: error
});
export const setHasMore = (value) => ({
  type: SET_HAS_MORE,
  payload: value
});
