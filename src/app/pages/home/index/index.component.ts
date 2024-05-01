import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { ProdutosCategoriaComponent } from '../../../components/produtos-categoria/produtos-categoria.component';
import { IProduto } from '../../../interfaces/produto.interface';
import { KeyValuePipe, NgFor } from '@angular/common';

import { MatSidenavModule } from '@angular/material/sidenav';
import { MatButtonModule } from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { CartComponent } from '../../../components/cart/cart.component';
import { HeaderComponent } from '../../../components/header/header.component';


@Component({
  selector: 'app-index',
  standalone: true,
  imports: [ProdutosCategoriaComponent, NgFor, KeyValuePipe, MatSidenavModule, MatButtonModule, MatIconModule, CartComponent, MatCardModule, HeaderComponent],
  templateUrl: './index.component.html',
  styleUrl: './index.component.css'
})
export class IndexComponent implements OnInit{


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
      "marca": "Prato Fino",
      "descricao": "Arroz Prato Fino Longo Fino Tipo 5kg",
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

  @Output() addBookToCart: EventEmitter<IProduto> = new EventEmitter();
  categoriasProdutos: any;
  addedPurchaseList: IProduto[] = [];
  addedNewPurchaseList: IProduto[] = [];
  searchPurchaseList: IProduto[] = [];
  productInOffer: IProduto[] = this.produtoList.filter((produto) => produto.promocao);
  scrollableContent: HTMLElement | undefined;
  scrollableContentNovos: HTMLElement | undefined;
  scrollableContentSearch: HTMLElement | undefined;
  actionVisible: boolean = false;
  actions: HTMLElement | undefined;
  constructor() {
    this.categoriasProdutos = this.groupByCategory(this.produtoList);
    console.log(this.categoriasProdutos);
  }
  
  ngOnInit() {
    this.addedPurchaseList = JSON.parse(localStorage.getItem("addedPurchaseList") || "[]");
    this.addedNewPurchaseList = JSON.parse(localStorage.getItem("productList") || "[]");
  }
  ngAfterViewInit() {
    this.scrollableContent = document.querySelector('.scrollable-container') as HTMLElement;
    this.scrollableContentNovos = document.querySelector('.novos-container') as HTMLElement;
    this.scrollableContentSearch = document.querySelector('.novos-containerSearch') as HTMLElement;
    if(this.addedNewPurchaseList.length > 5) {
      this.actionVisible = true;
    }
  }

  findOrAddProduct(product: IProduto) {
    for (let i=0; i<this.addedPurchaseList.length; i++) {
      const currProduct = this.addedPurchaseList[i];
      if (product.id === currProduct.id) {
        currProduct.totalAdicionadoAoCart = (product.totalAdicionadoAoCart < product.quantidadeEmEstoque)? currProduct.totalAdicionadoAoCart + 1 : currProduct.totalAdicionadoAoCart;
        return;
      }
    }

    product.totalAdicionadoAoCart = 1;
    this.addedPurchaseList.push(product);
  }
  addPurchaseToCart(product: IProduto) {
    console.log(product);
    this.findOrAddProduct(product);
    this.addedPurchaseList = [...this.addedPurchaseList];
    this.addBookToCart.emit(product);
  }

  addedSerch(buscado: string) {
    console.log(buscado);
    this.searchPurchaseList = this.produtoList.filter((produto) => produto.nome.toLowerCase().includes(buscado.toLowerCase()));
    this.searchPurchaseList = this.searchPurchaseList.concat(this.addedNewPurchaseList.filter((produto) => produto.nome.toLowerCase().includes(buscado.toLowerCase())));
    console.log(this.searchPurchaseList);

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

  scrollLeft() {
    
    if(this.scrollableContent)
      this.scrollableContent.scrollLeft -= 170; // ajuste conforme necessário
   console.log(this.scrollableContent?.scrollLeft);
  }

  scrollRight() {
    if(this.scrollableContent)
      this.scrollableContent.scrollLeft += 170; 

  }
  scrollLeftNovos() {
    
    if(this.scrollableContentNovos)
      this.scrollableContentNovos.scrollLeft -= 170; 
  }

  scrollRightNovos() {
    if(this.scrollableContentNovos)
      this.scrollableContentNovos.scrollLeft += 170; 
  }

  scrollLeftSearch() {
    
    if(this.scrollableContentSearch)
      this.scrollableContentSearch.scrollLeft -= 170; 
  }

  scrollRightSearch() {
    if(this.scrollableContentSearch)
      this.scrollableContentSearch.scrollLeft += 170; 
  }
}