import { Component, Input, OnInit } from '@angular/core';
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
export class ProdutoComponent implements OnInit{
  @Input() produto?: IProduto;
  modalVisibility: boolean = false;
  ngOnInit(){
    console.log(this.produto);
  }
  adicionarCarrinho(){
    this.modalVisibility = true;
  }
  ModalVisibility() {
    this.modalVisibility = false;
  }
}