import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { IProduto } from '../../interfaces/produto.interface';
import * as bootstrap from '@ng-bootstrap/ng-bootstrap';


@Component({
  selector: 'app-modal',
  standalone: true,
  imports: [],
  templateUrl: './modal.component.html',
  styleUrl: './modal.component.css'
})
export class ModalComponent implements OnInit{
ClickInternoModal(event: any) {
  event.stopPropagation()
}
  @Input() produto?: IProduto;
  @Input() quantidadeItem: number = 1;
  @Output() modalVisibility: EventEmitter<boolean> = new EventEmitter();
  @Output() addPurchaseToCart: EventEmitter<any> = new EventEmitter();
  
  addedPurchaseList: IProduto[] = [];
  testModal: any;
  
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

    product.totalAdicionadoAoCart = this.quantidadeItem;
    this.addedPurchaseList.push(product);
   
  }

addToShoppingCart() {
  this.addPurchaseToCart.emit(this.addedPurchaseList);

  console.log("Book added to cart successfully!");
  this.findOrAddProduct(this.produto)
  console.log(this.addedPurchaseList);
  localStorage.setItem("addedPurchaseList", JSON.stringify(this.addedPurchaseList));
  this.FecharModal();
}


FecharModal() {
  this.modalVisibility.emit(false);
}

incrementQuantidade() {
  this.quantidadeItem++;
  console.log(this.quantidadeItem);
}
decrementQuantidade() {
  this.quantidadeItem > 1 ? this.quantidadeItem-- : this.quantidadeItem = 1;
  console.log(this.quantidadeItem);
}

}