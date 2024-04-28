import { Routes } from '@angular/router';
import { DashboardAdminComponent } from './pages/admin/dashboard/dashboardAdmin.component';
import { IndexComponent } from './pages/home/index/index.component';

export const routes: Routes = [
    {path: '', component: IndexComponent},
    {path:'admin/dashboard', component: DashboardAdminComponent}
];
