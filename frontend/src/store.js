import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import { productDetailReducer, productListReducer } from "./reducers/productReducer";
const reducer = combineReducers({
  productList: productListReducer,
  ProductDetails:productDetailReducer
});
const initialValues = {};
const middleware = [thunk];
export const store = createStore(
  reducer,
  initialValues,
  composeWithDevTools(applyMiddleware(...middleware))
);
