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
  @Output() search: EventEmitter<string> = new EventEmitter();
  @Input() busca: string = '';

  addedSerach( ) {
    console.log(this.busca);
    this.search.emit(this.busca);
  }
}
