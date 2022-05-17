import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './admin/admin.component';
import { ContractorMapComponent } from './contractor-map/contractor-map.component';
import { ContractorTableComponent } from './contractor-table/contractor-table.component';
import { ContractorComponent } from './contractor/contractor.component';
import { EmployeeMapComponent } from './employee-map/employee-map.component';
import { EmployeeTableComponent } from './employee-table/employee-table.component';
import { ForbiddenComponent } from './forbidden/forbidden.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { AuthGuard } from './_auth/auth.guard';

const routes: Routes = [
  {path: 'home', component:HomeComponent},
  {path: 'admin', component:AdminComponent, canActivate:[AuthGuard], data:{roles:['Admin']}},
  {path: 'contractor', component:ContractorComponent, canActivate:[AuthGuard], data:{roles:['Contractor']}},
  {path: 'login', component:LoginComponent},
  {path: 'forbidden', component:ForbiddenComponent},
  {path: 'view-employee', component:EmployeeTableComponent},
  {path: 'view-contractor', component:ContractorTableComponent},
  {path: 'view-employee-map', component:EmployeeMapComponent},
  {path: 'view-contractor-map', component:ContractorMapComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
