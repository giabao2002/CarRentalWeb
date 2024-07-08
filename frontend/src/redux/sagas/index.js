import { takeLatest } from "redux-saga/effects";
import * as Actions from "../actions";
import { fetchUserSaga, createUserSaga } from "./users";
import { getAllCarsSaga } from "./products";

function* mySaga() {
    yield takeLatest(Actions.login.loginRequest, fetchUserSaga);
    yield takeLatest(Actions.register.registerRequest, createUserSaga);
    yield takeLatest(Actions.getAllCars.getAllCarsRequest, getAllCarsSaga);
}

export default mySaga;