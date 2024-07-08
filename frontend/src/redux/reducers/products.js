import { INIT_STATE } from "../../constant";
import { getAllCars, getType } from "../actions";

export default function productReducers(state = INIT_STATE.products, action) {
  switch (action.type) {
    case getType(getAllCars.getAllCarsRequest):
    case getType(getAllCars.getAllCarsFailure):
      return state;
    case getType(getAllCars.getAllCarsSuccess):
      return {
        ...state,
        cars: action.payload,
      };
    default:
      return state;
  }
}
