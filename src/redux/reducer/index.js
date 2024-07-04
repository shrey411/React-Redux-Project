// // reducers.js

// import { products } from '../../JsonData/productData';
// import { LOAD_PRODUCTS } from '../action';

// const initialState = {
//   products: [...products],
//   cart: []
// };

// const reducer = (state = initialState, action) => {
//   switch (action.type) {
//     case LOAD_PRODUCTS:
//       return {
//         ...state,
//         products: action.payload
//       };
//     case "ADDITEM":
//     case "DELITEM":
//       return {
//         ...state,
//         cart: handleCart(state.cart, action)
//       };
//     default:
//       return state;
//   }
// };

// const handleCart = (state = [], action) => {
//   const product = action.payload;
//   switch (action.type) {
//     case "ADDITEM":
//       // Check if product already in cart
//       const exist = state.find((x) => x.id === product.id);
//       if (exist) {
//         // Increase the quantity
//         return state.map((x) => (x.id === product.id ? { ...x, qty: x.qty + 1 } : x));
//       } else {
//         return [...state, { ...product, qty: 1 }];
//       }
//     case "DELITEM":
//       const exist2 = state.find((x) => x.id === product.id);
//       if (exist2.qty === 1) {
//         return state.filter((x) => x.id !== exist2.id);
//       } else {
//         return state.map((x) => (x.id === product.id ? { ...x, qty: x.qty - 1 } : x));
//       }
//     default:
//       return state;
//   }
// };

// export default reducer;

// reducer.js

import { act } from "react-dom/test-utils";
import {
  FETCH_PRODUCTS_REQUEST,
  FETCH_PRODUCTS_SUCCESS,
  FETCH_PRODUCTS_FAILURE,
  SET_HAS_MORE,
} from "../action/index";

const initialState = {
  items: [],
  loading: false,
  error: null,
  hasMore: true,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_PRODUCTS_REQUEST:
      return {
        ...state,
        loading: true,
        error: null,
      };
    case FETCH_PRODUCTS_SUCCESS:
      return {
        ...state,
        loading: false,
        items: [...state.items, ...action.payload],
      };
    case FETCH_PRODUCTS_FAILURE:
      console.log(action);

      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    case SET_HAS_MORE:
      return {
        ...state,
        hasMore: action.payload,
      };
    default:
      return state;
  }
};

export default reducer;
