import axios from "axios";
import qs from "qs";

const LOGIN_SUCCESS = "LOGIN_SUCCESS";
const LOGOUT = "LOGOUT";
const LOGIN_DATA = "LOGIN_DATA";
const ERRORMSG = "ERRORMSG";

const initState = {
  userName: "",
  redirect: "",
  msg: ""
};

export function user(state = initState, action) {
  switch (action.type) {
    default:
      return state;
  }
}

function loginSuccess() {
  return { type: LOGIN_SUCCESS };
}

function logout() {
  return { type: LOGOUT };
}

function errorMsg(msg) {
  return { type: ERRORMSG, msg };
}

function loginData(data) {
  return { type: LOGIN_DATA, ...data };
}

export function login({ userName, password }) {
  if (!userName) {
    return errorMsg("用户名或密码必须输入");
  }
  if (!password) {
    return errorMsg("用户名或密码必须输入");
  }
  return dispatch => {
    axios.post(qs.stringify({ userName, password })).then(res => {
      if (res.status === 200 && res.data.code === 0) {
        //登录成功
      } else {
        //服务器错误
      }
    });
  };
}
