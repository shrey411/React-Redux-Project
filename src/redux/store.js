
import { applyMiddleware, combineReducers, createStore } from 'redux';
import productsReducer from './reducer/index';
import handleCart from './reducer/handlerCart';
import { thunk } from 'redux-thunk';

const rootReducer = combineReducers({
    products: productsReducer ,
    cart: handleCart,
});

const store = createStore(rootReducer, applyMiddleware(thunk));


export default store;
