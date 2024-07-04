import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { addCart } from "../redux/action";


const ProductCard = ({ data }) => {
    const products = useSelector((state) => state.products);
    const dispatch = useDispatch();
  
    const addProduct = (data) => {
      dispatch(addCart(data));
    };
  return (
    <div class='col-lg-4 col-md-6 mb-4'>
      <div class='card'>
        <img src={data.images[0]} class='card-img-top' alt='Product Img'/>
        <div class='card-body'>
          <h5 class='card-title'>{data.title}</h5>
          <p class='card-text'>{data.description.substring(0,190)}...</p>
          <p class='card-text price'>Rs. {data.price}</p>
          <Link href='#' class='btn btn-primary' onClick={() => addProduct(data)}>
            Add to Cart
          </Link>
        </div>  
      </div>
    </div>
  );
};

export default ProductCard;