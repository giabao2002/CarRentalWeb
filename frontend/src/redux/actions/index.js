import { createActions, createAction } from "redux-actions";

export const getType = reduxAction => {
  if(typeof(reduxAction) == 'function') {
    return reduxAction().type;
  }
};

export const login = createActions({
    loginRequest: payload => payload,
    loginSuccess: payload => payload,
    loginFailure: err => err,  
});

export const register = createActions({
    registerRequest: payload => payload,
    registerSuccess: payload => payload,
    registerFailure: err => err,  
});

export const getAllCars = createActions({
  getAllCarsRequest: null,
  getAllCarsSuccess: payload => payload,
  getAllCarsFailure: err => err,
});

export const logout = createAction("LOGOUT");