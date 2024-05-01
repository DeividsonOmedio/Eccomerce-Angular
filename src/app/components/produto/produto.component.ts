import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { IProduto } from '../../interfaces/produto.interface';
import { NgIf } from '@angular/common';
import { ModalComponent } from '../modal/modal.component';

@Component({
  selector: 'app-produto',
  standalone: true,
  imports: [ ModalComponent,NgIf],
  templateUrl: './produto.component.html',
  styleUrl: './produto.component.css'
})
export class ProdutoComponent {
  @Input() produto?: IProduto;
  @Output() addBookToCart: EventEmitter<IProduto> = new EventEmitter();
  addedPurchaseList: IProduto[] = [];
  purchaseList: IProduto[] = [];
  modalVisibility: boolean = false;
  productReturn: any;

  
  adicionarCarrinho(){
    this.modalVisibility = true;
  }
  ModalVisibility() {
    this.modalVisibility = false;
  }
  addPurchaseToCart(produto: IProduto){ {
    console.log(produto);
    this.addBookToCart.emit(produto);
  }
}
}