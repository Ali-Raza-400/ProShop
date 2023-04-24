import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import {
  productDetailReducer,
  productListReducer,
} from "./reducers/productReducer";
import { cartReducer} from './reducers/cartReducer'
import { userLoginReducer, userRegisterReducer,userDetailsReducer, userUpdateProfileReducer } from "./reducers/userReducer";
// import { cartReducer } from "./reducers/cartReducer";
const reducer = combineReducers({
  productList: productListReducer,
  ProductDetails: productDetailReducer,
  cart: cartReducer,
userLogin:userLoginReducer,
userRegister:userRegisterReducer,
userDetails:userDetailsReducer,
userUpdateProfile: userUpdateProfileReducer,
});
const cartItemFromStorage=localStorage.getItem('cartItems')?JSON.parse(localStorage.getItem('cartItems')):[]
const userInfoFromStorage=localStorage.getItem('userInfo')?JSON.parse(localStorage.getItem('userInfo')):null
const initialValues = {cart:{cartItems:cartItemFromStorage},userLogin:{userInfo:userInfoFromStorage}};
const middleware = [thunk];
export const store = createStore(
  reducer,
  initialValues,
  composeWithDevTools(applyMiddleware(...middleware))
);
