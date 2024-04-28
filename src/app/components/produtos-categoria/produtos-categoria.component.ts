import { Component, Input, OnInit } from '@angular/core';
import { ProdutoComponent } from '../produto/produto.component';
import { KeyValuePipe, NgFor } from '@angular/common';

@Component({
  selector: 'app-produtos-categoria',
  standalone: true,
  imports: [ProdutoComponent, NgFor, KeyValuePipe],
  templateUrl: './produtos-categoria.component.html',
  styleUrl: './produtos-categoria.component.css'
})
export class ProdutosCategoriaComponent implements OnInit{
  @Input() produtosCategoriaList: [] | any;
  
  ngOnInit(): void {
    console.log(this.produtosCategoriaList);
  }

}
