import {
  INCLUIR_LOCAL, EXCLUIR_LOCAL, SELECIONAR_LOCAL, DESSELECIONAR_LOCAL
} from './actionTypes';

export const incluirLocal = descricao => ({
  type: INCLUIR_LOCAL,
  descricao
});

export const excluirLocal = () => ({
  type: EXCLUIR_LOCAL
});

export const selecionarLocal = key => ({
  type: SELECIONAR_LOCAL,
  key
});

export const desselecionarLocal = () => ({
  type: DESSELECIONAR_LOCAL
});
