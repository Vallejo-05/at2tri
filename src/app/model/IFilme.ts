/* eslint-disable eol-last */
export interface IFilme{
  nome: string;
  lancamento: string;
  cartaz: string;
  descricao1: string;
  criador: string[];
  relaciondos: string;
  pagina?: string; //** a ? indica que o campo nao é obrigatorio*/
  favorito: boolean;
}
