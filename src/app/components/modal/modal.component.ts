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
  ngOnInit(): void {
    console.log(this.produto);
  }
  FecharModal() {
    this.modalVisibility.emit(false);
  }
}
