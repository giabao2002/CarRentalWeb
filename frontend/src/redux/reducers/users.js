import { INIT_STATE } from "../../constant";
import { login, register, logout, getType } from "../actions";

export default function userReducers(state = INIT_STATE.user, action) {
  switch (action.type) {
    case getType(login.loginSuccess):
        return action.payload;
    case getType(register.registerRequest):
    case getType(register.registerSuccess):
    case getType(register.registerFailure):
      return state;
    case getType(logout):
      return null;
    default:
      return state;
  }
}
