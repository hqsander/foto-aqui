/* eslint-disable import/prefer-default-export */
import { ADD_LOCAL } from '../actions/actionTypes';

const initialState = {
  locais: []
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_LOCAL:
      return {
        ...state,
        locais: state.locais.concat({
          key: Math.random(),
          local: action.local,
          foto: {
            uri: action.foto.uri
          },
          coordenadas: action.coordenadas
        })
      };
    default:
      return state;
  }
};

export default reducer;
