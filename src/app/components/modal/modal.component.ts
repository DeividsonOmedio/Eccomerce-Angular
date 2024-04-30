import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { IProduto } from '../../interfaces/produto.interface';

@Component({
  selector: 'app-modal',
  standalone: true,
  imports: [],
  templateUrl: './modal.component.html',
  styleUrl: './modal.component.css'
})
export class ModalComponent implements OnInit{
  @Input() produto?: IProduto;
  @Output() modalVisibility: EventEmitter<boolean> = new EventEmitter();
  @Output() addPurchaseToCart: EventEmitter<any> = new EventEmitter();
  
  addedPurchaseList: IProduto[] = [];
  
  ngOnInit(): void {
    console.log(this.produto);
  }

  findOrAddProduct(product: IProduto | any) {
    for (let i=0; i<this.addedPurchaseList.length; i++) {
      const currProduct = this.addedPurchaseList[i];
      if (product.id === currProduct.id) {
        currProduct.totalAdicionadoAoCart = (product.totalAdicionadoAoCart < product.quantidadeEmEstoque)? currProduct.totalAdicionadoAoCart + 1 : currProduct.totalAdicionadoAoCart;
        return;
      }
    }

    product.totalAdicionadoAoCart = 1;
    this.addedPurchaseList.push(product);
    if (product) {
      product.totalAdicionadoAoCart = 1;
      this.addedPurchaseList.push(product);
    }
  }

addToShoppingCart() {
  this.addPurchaseToCart.emit(this.addedPurchaseList);

  console.log("Book added to cart successfully!");
  this.findOrAddProduct(this.produto)
console.log(this.addedPurchaseList);
  localStorage.setItem("addedBooksList", JSON.stringify(this.addedPurchaseList));
}


  FecharModal() {
    this.modalVisibility.emit(false);
  }
}
