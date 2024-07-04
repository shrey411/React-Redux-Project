// import { fetchProductsFailure, fetchProductsRequest, fetchProductsSuccess } from ".";

  
//   export const fetchProducts = () => {
//     return async (dispatch) => {
//       dispatch(fetchProductsRequest());
//       try {
//         const response = await fetch("https://api.escuelajs.co/api/v1/products?offset=1");
//         const data = await response.json();
//         dispatch(fetchProductsSuccess(data));
//       } catch (error) {
//         dispatch(fetchProductsFailure(error));
//         alert("An error occurred: " + error);
//       }
//     };
//   };
  