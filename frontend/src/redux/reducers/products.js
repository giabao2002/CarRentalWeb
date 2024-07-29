import { INIT_STATE } from "../../constant";
import { getAllCars, getType, getAreas } from "../actions";

export default function productReducers(state = INIT_STATE.products, action) {
  switch (action.type) {
    case getType(getAllCars.getAllCarsRequest):
    case getType(getAllCars.getAllCarsFailure):
    case getType(getAreas.getAreasRequest):
    case getType(getAreas.getAreasFailure):
      return state;
    case getType(getAllCars.getAllCarsSuccess):
      return {
        ...state,
        cars: action.payload,
      };
    case getType(getAreas.getAreasSuccess):
      return {
        ...state,
        areas: action.payload,
      };
    default:
      return state;
  }
}
