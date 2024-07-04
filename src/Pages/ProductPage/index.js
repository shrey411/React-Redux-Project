// import React, { useCallback, useEffect, useState } from "react";
// import { VariableSizeGrid as Grid } from "react-window";
// import { Wrapper } from "./Style";
// import { useDispatch, useSelector } from "react-redux";
// import { addCart, loadProducts } from "../../redux/action";

// const ProductPage = () => {
//   const [visibleProducts, setVisibleProducts] = useState(10); // Initially show 10 products
//   const products = useSelector((state) => state.products);
//   const dispatch = useDispatch();

//   const addProduct = (product) => {
//     dispatch(addCart(product));
//   }

//   console.log(products);
//   const loadMoreProducts = useCallback(() => {
//     setVisibleProducts(prevCount => prevCount + 10);
//   }, []);

//   useEffect(() => {
//     dispatch(loadProducts(require("../../JsonData/productData").products));
//   }, [dispatch]);

//   const Row = ({ columnIndex, rowIndex, style, isScrolling }) => {
//     const index = rowIndex * 4 + columnIndex;
//     const product = products[index];
//     if (!product) return null;

//     return (
//       <div style={style} className="product-card">
//         <img
//           src={product.images[0]}
//           alt={product.title}
//           className="product-image"
//         />
//         <div className="product-details">
//           <h3 className="product-title">{product.title}</h3>
//           <span className="product-price">₹ {product.price}</span>
//           <div className="add-btn mt-2">
//             <button
//               className="btn btn-dark m-1"
//               onClick={() => addProduct(product)}
//             >
//               Add to Cart
//             </button>{" "}
//           </div>
//         </div>
//       </div>
//     );
//   };

//   const ProductGrid = ({ height, width }) => {
//     return (
//       <Grid
//         columnCount={4} // Number of columns in the grid
//         columnWidth={() => width / 4} // Width of each column
//         rowCount={Math.ceil(visibleProducts / 4)} // Number of rows in the grid
//         rowHeight={() => 550} // Height of each row
//         height={height} // Height of the grid container
//         width={width} // Width of the grid container
//         itemData={products} // No additional data to pass
//         overscanCount={4} // Number of extra rows/columns to render outside the visible area

//       >
//         {Row}
//       </Grid>
//     );
//   };

//   return (
//     <>
//       <Wrapper>
//         <div className="product-container">
//           <div className="product-headerDemo">
//             <h2>Products</h2>
//           </div>
//         </div>
//         <div className="product-list mt-4">
//           <ProductGrid useIsScrolling height={1000} width={1490} />{" "}
//           {/* Adjust the width as needed */}
//         </div>
//       </Wrapper>
//     </>
//   );
// };

// export default ProductPage;

// import React, { useCallback, useEffect, useState } from "react";
// import { VariableSizeGrid as Grid, areEqual } from "react-window"; // Import areEqual for memoization
// import { Wrapper } from "./Style";
// import { useDispatch, useSelector } from "react-redux";
// import { addCart, loadProducts } from "../../redux/action";
// import InfiniteLoader from "react-window-infinite-loader";
// // import { InfiniteLoader } from "react-virtualized";

// const ProductPage = () => {
//   const [visibleProducts, setVisibleProducts] = useState(10); // Initially show 10 products
//   const products = useSelector((state) => state.products);
//   const dispatch = useDispatch();

//   const addProduct = (product) => {
//     dispatch(addCart(product));
//   };

//   const loadMoreProducts = useCallback(() => {
//     setVisibleProducts((prevCount) => prevCount + 10);
//   }, []);

//   useEffect(() => {
//     dispatch(loadProducts(require("../../JsonData/productData").products));
//   }, [dispatch]);

//   // Function to check if the item is loaded
//   const isItemLoaded = (index) => index < products.length;

//   // Function to load more items
//   const loadMoreItems = (startIndex, stopIndex) => {
//     // You can fetch more data here if needed
//     console.log("Load more items", startIndex, stopIndex);
//   };

//   // Memoized Row component
//   const Row = React.memo(({ columnIndex, rowIndex, style }) => {
//     const index = rowIndex * 4 + columnIndex;
//     const product = products[index];
//     if (!product) return null;

//     return (
//       <div style={style} className="product-card">
//         <img
//           src={product.images[0]}
//           alt={product.title}
//           className="product-image"
//         />
//         <div className="product-details">
//           <h3 className="product-title">{product.title}</h3>
//           <span className="product-price">₹ {product.price}</span>
//           <div className="add-btn mt-2">
//             <button
//               className="btn btn-dark m-1"
//               onClick={() => addProduct(product)}
//             >
//               Add to Cart
//             </button>{" "}
//           </div>
//         </div>
//       </div>
//     );
//   }, areEqual);

//   // Memoized ProductGrid component
//   const ProductGrid = React.memo(({ height, width }) => {
//     return (
//       <Grid
//         columnCount={4}
//         columnWidth={() => width / 4}
//         rowCount={Math.ceil(visibleProducts / 4)}
//         rowHeight={() => 550}
//         height={height}
//         width={width}
//         itemData={products}
//         overscanCount={4}
//       >
//         {Row}
//       </Grid>
//     );
//   }, areEqual);

//   return (
//     <>
//       <Wrapper>
//         <div className="product-container">
//           <div className="product-headerDemo">
//             <h2>Products</h2>
//           </div>
//         </div>
//         <div className="product-list mt-4">
//           <InfiniteLoader
//             isItemLoaded={isItemLoaded}
//             itemCount={20} // Adjust the itemCount to include additional items
//             loadMoreItems={loadMoreItems}
//             loader={<p>Loading</p>}
//           >
//             {({ onItemsRendered, ref }) => (
//               <ProductGrid
//                 useIsScrolling
//                 height={2200}
//                 width={1490}
//                 onItemsRendered={onItemsRendered}
//                 ref={ref}
//               />
//             )}
//           </InfiniteLoader>
//         </div>
//       </Wrapper>
//     </>
//   );
// };

// export default ProductPage;

// import React, { Fragment, useState } from "react";
// import { FixedSizeList as List } from "react-window";
// import InfiniteLoader from "react-window-infinite-loader";
// import { products } from "../../JsonData/productData";
// import { Wrapper } from "./Style";
// import { useDispatch, useSelector } from "react-redux";
// import { addCart } from "../../redux/action";

// // Assuming you've copied the `products` array here

// export default function App() {
//   const [hasNextPage, setHasNextPage] = useState(true);
//   const [isNextPageLoading, setIsNextPageLoading] = useState(false);
//   const [items, setItems] = useState([]);
//   const products = useSelector((state) => state.products);
//     const dispatch = useDispatch();

//     const addProduct = (product) => {
//       dispatch(addCart(product));
//     };
//   const loadNextPage = () => {
//     console.log("loadNextPage");
//     setIsNextPageLoading(true);
//     setTimeout(() => {
//       setItems(prevItems => [
//         ...prevItems,
//         ...products.slice(prevItems.length, prevItems.length + 10) // Slice the products array to get the next set of items
//       ]);
//       setIsNextPageLoading(false);
//       setHasNextPage(items.length < 33);
//     }, 4000);
//   };

//   const itemCount = hasNextPage ? items.length + 1 : items.length;

//   const loadMoreItems = isNextPageLoading ? () => {} : loadNextPage;

//   const isItemLoaded = index => !hasNextPage || index < items.length;

//   const Item = ({ index, style }) => {
//     let content;

//     // Check if the items array is empty or undefined before accessing its elements
//     if (!items || items.length === 0 || index >= items.length) {
//       content = "Loading...";
//     } else {
//       const product = items[index];
//       content = (
//         <Wrapper>
//         <div className="product-card">
//          <img
//            src={product.images[0]}
//            alt={product.title}
//            className="product-image"
//          />
//          <div className="product-details">
//            <h3 className="product-title">{product.title}</h3>
//            <span className="product-price">₹ {product.price}</span><br></br>
//            <span className="product-desc">{product.description.substring(0,90)}...</span>
//            <div className="add-btn mt-2">
//              <button
//                className="btn btn-dark m-1"
//                onClick={() => addProduct(product)}
//              >
//                Add to Cart
//              </button>{" "}
//            </div>
//          </div>
//        </div>
//        </Wrapper>
//       );
//     }

//     return <div style={{...style, display:"flex",alignItems:"center" , justifyContent: "center"}} >{content}</div>;
//   };

//   return (
//     <Fragment>
//       <InfiniteLoader
//         isItemLoaded={isItemLoaded}
//         itemCount={itemCount}
//         loadMoreItems={loadMoreItems}
//       >
//         {({ onItemsRendered, ref }) => (
//           <List
//             className="List"
//             height={650}
//             itemCount={itemCount}
//             itemSize={600} // Adjust item size as needed
//             onItemsRendered={onItemsRendered}
//             ref={ref}
//             width={1490}
//             // style={{overflowY : "hidden"}}
//           >
//             {Item}
//           </List>
//         )}
//       </InfiniteLoader>
//     </Fragment>
//   );
// }

// import React, { useState, useEffect } from "react";
// import InfiniteScroll from "react-infinite-scroll-component";
// import ProductCard from "../../Component/ProductCard";
// import Loader from "../../Component/Loader";
// // import Loader from "./Loader";

// const InfiniteScrollExample1 = () => {
//   const [items, setItems] = useState([]);
//   const [hasMore, setHasMore] = useState(true);
//   const [index, setIndex] = useState(1);

//   useEffect(() => {
//     fetch("https://api.escuelajs.co/api/v1/products?offset=1&limit=6")
//       .then((res) => res.json())
//       .then((data) => setItems(data))
//       .catch((err) => console.log(err));
//   }, []);

//   const fetchMoreData = () => {
//     fetch(`https://api.escuelajs.co/api/v1/products?offset=${index}0&limit=12`)
//       .then((res) => res.json())
//       .then((data) => {
//         setItems((prevItems) => [...prevItems, ...data]);
//         data.length > 0 ? setHasMore(true) : setHasMore(false);
//       })
//       .catch((err) => console.log(err));

//     setIndex((prevIndex) => prevIndex + 1);
//   };

//   return (
//     <InfiniteScroll
//       dataLength={items.length}
//       next={fetchMoreData}
//       hasMore={hasMore}
//       loader={<Loader />}
//     >
//       <div className='container'>
//         <div className='row'>
//           {items &&
//             items.map((item) => <ProductCard data={item} key={item.id} />)}
//         </div>
//       </div>
//     </InfiniteScroll>
//   );
// };

// export default InfiniteScrollExample1;

import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchProductsRequest,
  fetchProductsSuccess,
  fetchProductsFailure,
} from "../../redux/action/index";
import InfiniteScroll from "react-infinite-scroll-component";
import ProductCard from "../../Component/ProductCard";
import Loader from "../../Component/Loader";

const InfiniteScrollExample1 = () => {
  const dispatch = useDispatch();
  const { items, loading, error } = useSelector((state) => state.products);
  const [hasMoreProducts, setHasMoreProducts] = useState(true);
  const [fetchErrorHandler, setFetchErrorHandler] = useState(false);


  useEffect(() => {
    // dispatch(fetchProductsRequest());
    // fetch("https://api.escuelajs.co/api/v1/products?offset=1&limit=6")
    //   .then((res) => res.json())
    //   .then((data) => dispatch(fetchProductsSuccess(data)))
    //   .catch((err) => {
    //     if (!fetchErrorHandler) {
    //       dispatch(fetchProductsFailure(err));
    //       alert("an error occurred: " + err)
    //       setFetchErrorHandler(true)
    //     }
    //   });
    fetchMoreData()
  }, [dispatch, fetchErrorHandler]);

  const fetchMoreData = () => {
    fetch(
      `https://api.escuelajs.co/api/v1/products?offset=${items.length}&limit=12`
    )
      .then((res) => res.json())
      .then((data) => {
        if (data.length > 0) {
          dispatch(fetchProductsSuccess(data));
        } else {
          setHasMoreProducts(false);
        }
      })
      .catch((err) => {
        dispatch(fetchProductsFailure(err));
        // Handle the error
      });
  };

  return (
    <InfiniteScroll
      dataLength={items.length}
      next={fetchMoreData}
      hasMore={!loading && !error && hasMoreProducts} // Adjust this according to your logic
      loader={<Loader />}
    >

      <div className="container mt-5">
        <div className="header-product text-center mt-3">
          <h2>Products</h2>
        </div>
        <div className="row mt-4">
          {items &&
            items.map((item) => <ProductCard data={item} key={item.id} />)}
        </div>
      </div>
    </InfiniteScroll>
  );
};

export default InfiniteScrollExample1;
