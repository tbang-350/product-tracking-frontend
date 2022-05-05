import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './admin/admin.component';
import { ContractorComponent } from './contractor/contractor.component';
import { ForbiddenComponent } from './forbidden/forbidden.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
  {path: 'home', component:HomeComponent},
  {path: 'admin', component:AdminComponent},
  {path: 'contractor', component:ContractorComponent},
  {path: 'login', component:LoginComponent},
  {path: 'forbidden', component:ForbiddenComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
