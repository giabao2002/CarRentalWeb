import { call, put } from "redux-saga/effects";
import { login, register } from "../actions";
import * as api from "../../api";

export function* fetchUserSaga(action) {
  try {
    const user = yield call(api.fetchUser, action.payload);
    console.log(user);
    yield put(login.loginSuccess(user.data.data));
    localStorage.setItem(
      "user",
      JSON.stringify({
        username: user.data?.data.username,
        userId: user.data?.data.userid,
      })
    );
    window.location.href = "/";
  } catch (error) {
    yield put(login.loginFailure(error));
  }
}

export function* createUserSaga(action) {
  try {
    const user = yield call(api.fetchRegister, action.payload);
    yield put(register.registerSuccess(user.data));
    window.location.href = "/login";
  } catch (error) {
    yield put(register.registerFailure(error));
  }
}
