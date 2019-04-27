/* eslint-disable import/prefer-default-export */
import { ACAO_EXEMPLO } from './actionTypes';

export const acaoExemplo = conteudo => ({
  type: ACAO_EXEMPLO,
  nomePayload: conteudo
});
