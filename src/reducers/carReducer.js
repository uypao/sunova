import * as types from '../actions/actionTypes';
import initialState from './initialState';
import update from 'immutability-helper';

export default function carReducer(state = initialState.cars, action) {
  switch (action.type) {
    case types.LOAD_CARS_SUCCESS:
      return action.cars;
    default:
      return state;
  }
}
