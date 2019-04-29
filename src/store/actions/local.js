/* eslint-disable import/prefer-default-export */
import { ADD_LOCAL } from './actionTypes';

export const addLocal = (local, coordenadas, foto) => ({
  type: ADD_LOCAL,
  local,
  coordenadas,
  foto
});
