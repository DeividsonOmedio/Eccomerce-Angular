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
export class ProdutosCategoriaComponent {

  @Input() produtosCategoriaList: [] | any;
  @Output() addBookToCart: EventEmitter<IProduto> = new EventEmitter();

  addedPurchaseList: IProduto[] = [];

  




  addPurchaseToCart(product: IProduto) {
    
    this.addedPurchaseList = [...this.addedPurchaseList];
    this.addBookToCart.emit(product);
  }

}