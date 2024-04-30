import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';

import {MatListModule} from '@angular/material/list';
import { IProduto } from '../../interfaces/produto.interface';

@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [MatListModule ],
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.css'
})
export class CartComponent implements OnInit, OnChanges{
  ngOnInit(): void {
    console.log(this.addedPurchaseList)
  }
  @Input("PurchaseList") addedPurchaseList: IProduto[] = [];

  ngOnChanges(changes: SimpleChanges) : void {
    //console.log(this.addedGamesList);
    localStorage.setItem("addedGameList", JSON.stringify(this.addedPurchaseList))
  }
  
  removeGameFromCart(product: IProduto){
    const productIndex = this.addedPurchaseList.findIndex((currentGame)=> {
      return currentGame.id === product.id;
    })
    this.addedPurchaseList.splice(productIndex, 1);
  }
  incrementTotalGameCopies(product: IProduto) {
    product.totalAdicionadoAoCart++;
    if (product.totalAdicionadoAoCart > product.quantidadeEmEstoque){
      product.totalAdicionadoAoCart = product.quantidadeEmEstoque;
    }
    localStorage.setItem("addedGameList", JSON.stringify(this.addedPurchaseList));
  }
  
  decrementTotalGameCopies(product: IProduto){
    product.totalAdicionadoAoCart--;
  
    if (product.totalAdicionadoAoCart<=0){
      this.removeGameFromCart(product)
    }
    localStorage.setItem("addedGameList", JSON.stringify(this.addedPurchaseList));
  }
}
