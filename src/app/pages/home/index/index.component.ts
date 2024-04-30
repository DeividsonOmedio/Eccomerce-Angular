import { Component } from '@angular/core';
import { ProdutosCategoriaComponent } from '../../../components/produtos-categoria/produtos-categoria.component';
import { IProduto } from '../../../interfaces/produto.interface';
import { KeyValuePipe, NgFor } from '@angular/common';

import { MatSidenavModule } from '@angular/material/sidenav';
import {MatButtonModule} from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { CartComponent } from '../../../components/cart/cart.component';

@Component({
  selector: 'app-index',
  standalone: true,
  imports: [ProdutosCategoriaComponent, NgFor, KeyValuePipe, MatSidenavModule, MatButtonModule, MatIconModule, CartComponent],
  templateUrl: './index.component.html',
  styleUrl: './index.component.css'
})
export class IndexComponent {

  produtoList: IProduto[] = [
    {
      "id": 1,
      "nome": "Arroz Tipo 1",
      "marca": "Sempre Bom",
      "descricao": "Arroz Sempre Bom Longo Fino Tipo 5kg",
      "medida": "5Kg",
      "categoria": "Dispensa",
      "preco": 27.90,
      "precoPromocional": 19.90,
      "promocao": true,
      "quantidadeEmEstoque": 50,
      "imagem": "arrozSempreBom.jpg",
      "totalAdicionadoAoCart": 0
    },
    {
      "id": 2,
      "nome": "Arroz Tipo 1",
      "marca": "Sempre Bom",
      "descricao": "Arroz Sempre Bom Longo Fino Tipo 5kg",
      "medida": "5Kg",
      "categoria": "Dispensa",
      "preco": 27.90,
      "precoPromocional": 19.90,
      "promocao": true,
      "quantidadeEmEstoque": 50,
      "imagem": "arrozPratoFino.jpg",
      "totalAdicionadoAoCart": 0
    },
    {
      "id": 3,
      "nome": "Feijão Carioca",
      "marca": "Galante",
      "descricao": "Feijão Carioca Galante 1kg",
      "medida": "1Kg",
      "categoria": "Dispensa",
      "preco": 10.78,
      "precoPromocional": 6.90,
      "promocao": true,
      "quantidadeEmEstoque": 100,
      "imagem": "feijaoGalante.webp",
      "totalAdicionadoAoCart": 0
    },
    {
      "id": 4,
      "nome": "Bombom",
      "marca": "Garoto",
      "descricao": "Bombom Garoto Sortido 250g",
      "medida": "250g",
      "categoria": "Dispensa",
      "preco": 11.90,
      "precoPromocional": 7.90,
      "promocao": true,
      "quantidadeEmEstoque": 50,
      "imagem": "bombomGaroto.webp",
      "totalAdicionadoAoCart": 0
    },
  
    {
      "id": 5,
      "nome": "Refrigerante",
      "marca": "Coca Cola",
      "descricao": "Refrigerante Coca Cola Pet 2l",
      "medida": "2 Litros",
      "categoria": "Bebidas",
      "preco": 11.90,
      "precoPromocional": 6.90,
      "promocao": true,
      "quantidadeEmEstoque": 40,
      "imagem": "cocaCola.jpg",
      "totalAdicionadoAoCart": 0
    },
  
    {
      "id": 6,
      "nome": "Cerveja Latão",
      "marca": "Brahma",
      "descricao": "Cerveja Brahma Lata 473ml",
      "medida": "473ml",
      "categoria": "Bebidas",
      "preco": 4.90,
      "precoPromocional": 2.90,
      "promocao": true,
      "quantidadeEmEstoque": 150,
      "imagem": "brahma.jpg",
      "totalAdicionadoAoCart": 0
    },
  
    {
      "id": 7,
      "nome": "Cerveja",
      "marca": "Heineken",
      "descricao": "Cerveja Heineken Premium Long Neck 330ml",
      "medida": "330ml",
      "categoria": "Bebidas",
      "preco": 5.98,
      "precoPromocional": 3.90,
      "promocao": true,
      "quantidadeEmEstoque": 100,
      "imagem": "heineken.jpg",
      "totalAdicionadoAoCart": 0
    },
  
    {
      "id": 8,
      "nome": "Vinho",
      "marca": "Canção",
      "descricao": "Vinho Brasileiro Canção Tinto 750ml Seco",
      "medida": "750ml",
      "categoria": "Bebidas",
      "preco": 13.99,
      "precoPromocional": 13.99,
      "promocao": false,
      "quantidadeEmEstoque": 70,
      "imagem": "vinhoCancao.webp",
      "totalAdicionadoAoCart": 0
    },
  
  ]

  categoriasProdutos: any;
  addedPurchaseList: IProduto[] = [];

  constructor() {
    this.categoriasProdutos = this.groupByCategory(this.produtoList);
    console.log(this.categoriasProdutos);
  }
  
  groupByCategory(produtos: IProduto[]): any {
    
    return produtos.reduce((grupo: any, produto) => {
      const categoria = produto.categoria;
      if (!grupo[categoria]) {
        grupo[categoria] = [];
      }
      grupo[categoria].push(produto);
      return grupo;
    }, {});
  }
  
}