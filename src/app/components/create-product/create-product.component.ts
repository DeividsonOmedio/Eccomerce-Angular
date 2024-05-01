import { Component, OnInit } from '@angular/core';

import "./create-product.component.css";
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

import { provideNativeDateAdapter } from '@angular/material/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { IProduto } from '../../interfaces/produto.interface';

@Component({
  selector: 'app-create-product',
  standalone: true,
  imports: [MatFormFieldModule, MatInputModule, MatDatepickerModule, MatButtonModule, ReactiveFormsModule, MatCheckboxModule, MatIconModule],
  providers: [ provideNativeDateAdapter() ],
  templateUrl: './create-product.component.html',
  styleUrl: './create-product.component.css'
})
export class CreateProductComponent implements OnInit {
  productList: IProduto[] = [];
  productForm: FormGroup;

  constructor() {
    this.productForm = new FormGroup({
      nome: new FormControl(),
      marca: new FormControl(),
      descricao: new FormControl(),
      medida: new FormControl(),
      categoria: new FormControl(),
      preco: new FormControl(),
      precoPromocional: new FormControl(),
      promocao: new FormControl(),
      quantidadeEmEstoque: new FormControl(),
      imagem: new FormControl()
    });
  }
  ngOnInit(): void {
    this.productList = JSON.parse(localStorage.getItem("productList") || "[]");
  }
  submitForm() {
    const newProduct: IProduto = this.productForm.value;
    this.productList.push(newProduct);
    localStorage.setItem("productList", JSON.stringify(this.productList));
  }
}
