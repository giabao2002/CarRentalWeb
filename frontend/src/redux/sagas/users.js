import { NotificationManager } from "react-notifications";
import { call, put } from "redux-saga/effects";
import { login, register } from "../actions";
import * as api from "../../api";

export function* fetchUserSaga(action) {
  try {
    const user = yield call(api.fetchUser, action.payload);
    yield put(login.loginSuccess(user.data.data));
    NotificationManager.success("", user.data.message, 3000);
    localStorage.setItem(
      "user",
      JSON.stringify({
        username: user.data?.data.username,
        email: user.data?.data.email,
        userId: user.data?.data._id,
      })
    );
    window.location.href = "/";
  } catch (error) {
    yield put(login.loginFailure(error));
    NotificationManager.error("", "Đăng nhập không thành công!", 3000);
  }
}

export function* createUserSaga(action) {
  try {
    const user = yield call(api.fetchRegister, action.payload);
    yield put(register.registerSuccess(user.data));
    NotificationManager.success("", user.data.message, 3000);
    window.location.href = "/login";
  } catch (error) {
    yield put(register.registerFailure(error));
    NotificationManager.error("", error.response.data.message, 3000);
  }
}
