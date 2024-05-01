import { Component, EventEmitter, Input, Output } from '@angular/core';
import { NgbNav } from '@ng-bootstrap/ng-bootstrap';

import { MatToolbarModule } from '@angular/material/toolbar';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [NgbNav, MatToolbarModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
SerchBtn() {
  this.addedSerch(this.busca);
}
  @Output() search: EventEmitter<string> = new EventEmitter();
  @Input() busca: string = ''; 
  
  addedSerch(busca: string) {
    this.search.emit(busca);
  }
 
}
