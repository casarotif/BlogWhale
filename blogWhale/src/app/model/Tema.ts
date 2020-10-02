import { Postagem } from './Postagem'

export class Tema {
    public id: number
    public descricao: string
    public postagem: Postagem[] //o array [] por postagem ser many to one para tema
}