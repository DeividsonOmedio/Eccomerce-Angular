import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';

import {MatListModule} from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';
import { IProduto } from '../../interfaces/produto.interface';
import "./cart.component.css";
@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [MatListModule, MatIconModule],
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.css'
})
export class CartComponent implements OnInit, OnChanges{
  ngOnInit(): void {
    console.log(this.addedPurchaseList)
  }
  @Input("PurchaseList") addedPurchaseList: IProduto[] = [];

  ngOnChanges(changes: SimpleChanges) : void {
    console.log("mudou");
    localStorage.setItem("addedPurchaseList", JSON.stringify(this.addedPurchaseList))
  }
  
  removeProductFromCart(product: IProduto){
    const productIndex = this.addedPurchaseList.findIndex((currentGame)=> {
      return currentGame.id === product.id;
    })
    this.addedPurchaseList.splice(productIndex, 1);
  }
  IncrementTotalProductCopies(product: IProduto) {
    product.totalAdicionadoAoCart++;
    if (product.totalAdicionadoAoCart > product.quantidadeEmEstoque){
      product.totalAdicionadoAoCart = product.quantidadeEmEstoque;
    }
    localStorage.setItem("addedPurchaseList", JSON.stringify(this.addedPurchaseList));
  }
  
  decrementTotalProductCopies(product: IProduto){
    console.log(product.totalAdicionadoAoCart);
    product.totalAdicionadoAoCart--;
    if (product.totalAdicionadoAoCart<=0){
      this.removeProductFromCart(product)
    }
    localStorage.setItem("addedPurchaseList", JSON.stringify(this.addedPurchaseList));
  }
  
  RemoveProductCopies(product: IProduto){
    this.removeProductFromCart(product);
    localStorage.setItem("addedPurchaseList", JSON.stringify(this.addedPurchaseList));
  }
}
