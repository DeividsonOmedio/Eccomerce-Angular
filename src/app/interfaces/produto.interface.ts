export interface IProduto{
    id: number;
    nome: string;
    marca: string
    descricao: string;
    medida: string;
    categoria: string;
    preco: number;
    precoPromocional: number;
    promocao: boolean;
    quantidadeEmEstoque: number,
    imagem: string
}