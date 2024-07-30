import { call, put } from "redux-saga/effects";
import { getAllCars, getAreas } from "../actions";
import * as api from "../../api";

export function* getAllCarsSaga(action){
    try {
        const cars = yield call(api.fetchAllCars);
        yield put(getAllCars.getAllCarsSuccess(cars.data));
    } catch (error) {
        yield put(getAllCars.getAllCarsFailure(error));
    }
}

export function* getAreasSaga(action){
    try {
        const areas = yield call(api.fetchAreas);
        yield put(getAreas.getAreasSuccess(areas.data));
    } catch (error) {
        yield put(getAreas.getAreasFailure(error));
    }
}
