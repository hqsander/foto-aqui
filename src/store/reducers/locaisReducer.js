import {
  INCLUIR_LOCAL,
  EXCLUIR_LOCAL,
  SELECIONAR_LOCAL,
  DESSELECIONAR_LOCAL
} from '../actions/actionTypes';

import imgLocal from '../../../assets/liberdade.jpg';

const initialState = {
  locais: [],
  localSelecionado: null
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case INCLUIR_LOCAL:
      return {
        ...state,
        locais: state.locais.concat({
          key: Math.random().toString(),
          descricao: action.descricao,
          imagem: imgLocal
        })
      };
    case EXCLUIR_LOCAL:
      return {
        ...state,
        locais: state.locais.filter(local => local.key !== state.localSelecionado.key),
        localSelecionado: null
      };
    case SELECIONAR_LOCAL:
      return {
        ...state,
        localSelecionado: state.locais.find(local => local.key === action.key)
      };
    case DESSELECIONAR_LOCAL:
      return {
        ...state,
        localSelecionado: null
      };
    default:
      return state;
  }
};

export default reducer;
