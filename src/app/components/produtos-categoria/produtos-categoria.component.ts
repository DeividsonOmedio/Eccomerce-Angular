import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ProdutoComponent } from '../produto/produto.component';
import { KeyValuePipe, NgFor } from '@angular/common';
import { IProduto } from '../../interfaces/produto.interface';


import { MatSidenavModule } from '@angular/material/sidenav';
import {MatButtonModule} from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { CartComponent } from '../cart/cart.component';
@Component({
  selector: 'app-produtos-categoria',
  standalone: true,
  imports: [ProdutoComponent, NgFor, KeyValuePipe, MatSidenavModule, MatButtonModule, MatIconModule, CartComponent],
  templateUrl: './produtos-categoria.component.html',
  styleUrl: './produtos-categoria.component.css'
})
export class ProdutosCategoriaComponent implements OnInit{

  @Input() produtosCategoriaList: [] | any;
  @Output() addBookToCart: EventEmitter<IProduto> = new EventEmitter();

  addedPurchaseList: IProduto[] = [];

  ngOnInit() {
    this.addedPurchaseList = JSON.parse(localStorage.getItem("addedPurchaseList") || "[]");
  }


  findOrAddProduct(product: IProduto) {
    // Checando se o livro que estou buscando já está no carrinho
    for (let i=0; i<this.addedPurchaseList.length; i++) {
      const currProduct = this.addedPurchaseList[i];
      if (product.id === currProduct.id) {
        currProduct.totalAdicionadoAoCart = (product.totalAdicionadoAoCart < product.quantidadeEmEstoque)? currProduct.totalAdicionadoAoCart + 1 : currProduct.totalAdicionadoAoCart;
        return;
      }
    }

    // Adicionando uma cópia de um novo livro ao carrinho
    product.totalAdicionadoAoCart = 1;
    this.addedPurchaseList.push(product);
  }

  addPurchaseToCart(product: IProduto) {
    console.log("teste adicionado ao cart!");
    console.log(product);
    this.findOrAddProduct(product);
    this.addedPurchaseList = [...this.addedPurchaseList];
    this.addBookToCart.emit(product);
  }

}