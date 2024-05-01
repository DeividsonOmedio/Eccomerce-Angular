import { Component } from '@angular/core';
import { CreateProductComponent } from '../../../components/create-product/create-product.component';
import { MatIconModule } from '@angular/material/icon';
import { HeaderComponent } from '../../../components/header/header.component';

@Component({
  selector: 'app-dashboard-admin',
  standalone: true,
  imports: [CreateProductComponent, MatIconModule, HeaderComponent],
  templateUrl: './dashboardAdmin.component.html',
  styleUrl: './dashboardAdmin.component.css'
})
export class DashboardAdminComponent {

}
