import {
  USER_DETAILED_FAIL,
  USER_DETAILED_REQUEST,
  USER_DETAILED_SUCCESS,
  USER_LOGIN_FAIL,
  USER_LOGIN_REQUEST,
  USER_LOGIN_SUCCESS,
  USER_LOGOUT,
  USER_REGISTER_FAIL,
  USER_REGISTER_REQUEST,
  USER_REGISTER_SUCCESS,
} from "../constants/userConstant";

export const userLoginReducer = (state = {}, action) => {
  switch (action.type) {
    case USER_LOGIN_REQUEST:
      return { loading: true };
    case USER_LOGIN_SUCCESS:
      return {
        loading: false,
        userInfo: action.payload,
      };
    case USER_LOGIN_FAIL:
      return { loading: false, error: action.payload };
    case USER_LOGOUT:
      return {};
    default:
      return state;
  }
};
export const userRegisterReducer = (state = {}, action) => {
  switch (action.type) {
    case USER_REGISTER_REQUEST:
      return { loading: true };
    case USER_REGISTER_SUCCESS:
      return {
        loading: false,
        userInfo: action.payload,
      };
    case USER_REGISTER_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};
export const userDetailsReducer = (state = {user:{}}, action) => {
  switch (action.type) {
    case USER_DETAILED_REQUEST:
      return {...state, loading: true };
    case USER_DETAILED_SUCCESS:
      return {
        loading: false,
        user: action.payload,
      };
    case USER_DETAILED_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};
