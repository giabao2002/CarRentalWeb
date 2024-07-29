import { takeLatest } from "redux-saga/effects";
import * as Actions from "../actions";
import { fetchUserSaga, createUserSaga } from "./users";
import { getAllCarsSaga, getAreasSaga } from "./products";

function* mySaga() {
    yield takeLatest(Actions.login.loginRequest, fetchUserSaga);
    yield takeLatest(Actions.register.registerRequest, createUserSaga);
    yield takeLatest(Actions.getAllCars.getAllCarsRequest, getAllCarsSaga);
    yield takeLatest(Actions.getAreas.getAreasRequest, getAreasSaga);
}

export default mySaga;