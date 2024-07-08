import { createActions, createAction } from "redux-actions";

export const getType = (reduxAction) => {
  return reduxAction().type;
};

export const login = createAction({
    loginRequest: (payload) => payload,
    loginSuccess: (payload) => payload,
    loginFailure: (err) => err,  
});

export const register = createAction({
    registerRequest: (payload) => payload,
    registerSuccess: (payload) => payload,
    registerFailure: (err) => err,  
});

export const getAllCars = createActions({
  getAllCarsRequest: undefined,
  getAllCarsSuccess: (payload) => payload,
  getAllCarsFailure: (err) => err,
});

export const logout = createAction("LOGOUT");