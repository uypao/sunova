import * as types from './actionTypes';
import axios from 'axios';
import config from '../../config.json';

export function loadCarsSuccess(cars){
  return { type: types.LOAD_CARS_SUCCESS, cars };
}

export function loadCars(){
  let url = config.url.cars;
  return function (dispatch) {
    axios.get(url)
    .then(function (res) {
      let cars = res.data;
      dispatch(loadCarsSuccess(cars));
    })
    .catch(function (err) {
    });
  };
}
