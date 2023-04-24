import axios from "axios";
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

export const login = (email,password) => async (dispatch) => {
  console.log("💕💕💕",email,password)
  try {
    dispatch({ type: USER_LOGIN_REQUEST });
    const config={
        headers:{
            'content-type':"application/json"
        }
    }
    const { data } = await axios.post("api/user/login",{email,password},config);

    dispatch({ type: USER_LOGIN_SUCCESS, payload: data });
    localStorage.setItem('userInfo',JSON.stringify(data))
  } catch (error) {
    dispatch({
      type: USER_LOGIN_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};
export const register = (name,email,password) => async (dispatch) => {
  try {
    dispatch({ type: USER_REGISTER_REQUEST });
    const config={
        headers:{
            'content-type':"application/json"
        }
    }
    const { data } = await axios.post("api/user",{name,email,password},config);

    dispatch({ type: USER_REGISTER_SUCCESS, payload: data });
    dispatch({ type: USER_LOGIN_SUCCESS, payload: data });
    localStorage.setItem('userInfo',JSON.stringify(data))
  } catch (error) {
    dispatch({
      type: USER_REGISTER_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};
export const getUserDetails = (id) => async (dispatch,getState) => {
  console.log("===>💕💕 I am running",getState(),id)
  try {
    dispatch({ type: USER_DETAILED_REQUEST });
    const {userLogin:{userInfo}}=getState()
    const config={
        headers:{
            Authorization:`Bearer ${userInfo.token}`
        }
    }
    const { data } = await axios.get(`api/user/${id}`,config);
console.log("user",data)
    dispatch({ type: USER_DETAILED_SUCCESS, payload: data });
    localStorage.setItem('userInfo',JSON.stringify(data))
  } catch (error) {
    dispatch({
      type: USER_DETAILED_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export const logout=()=>dispatch=>{
  localStorage.removeItem('userInfo')
  dispatch({type:USER_LOGOUT})
}