import { ACAO_EXEMPLO } from '../actions/actionTypes';

const initialState = {
  campo: 'Leitura OK'
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ACAO_EXEMPLO:
      return {
        ...state,
        campo: action.nomePayload
      };
    default:
      return state;
  }
};

export default reducer;
