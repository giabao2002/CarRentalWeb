import { NotificationManager } from "react-notifications";
import { call, put } from "redux-saga/effects";
import { getAllCars } from "../actions";
import * as api from "../../api";

export function* getAllCarsSaga(action){
    try {
        const users = yield call(api.fetchAllCars);
        yield put(getAllCars.getAllCarsSuccess(users.data.data));
    } catch (error) {
        NotificationManager.error("", error.response.data.message,3000);
        yield put(getAllCars.getAllCarsFailure(error));
    }
}
