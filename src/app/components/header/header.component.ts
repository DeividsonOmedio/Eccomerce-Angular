import { Component } from '@angular/core';
import { NgbNav } from '@ng-bootstrap/ng-bootstrap';


@Component({
  selector: 'app-header',
  standalone: true,
  imports: [NgbNav],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {

}
