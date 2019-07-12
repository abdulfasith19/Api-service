import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './common/dashboard/dashboard.component';
import { DatatableComponent } from './common/datatable/datatable.component';
import { EdittableComponent} from './common/edittable/edittable.component';
import { ViewtableComponent } from './common/viewtable/viewtable.component';

const routes: Routes = [
  { path: '', redirectTo: 'Login', pathMatch: 'full' },
  { path: 'Login' , component: LoginComponent },
  { path: 'Dashboard' , component: DashboardComponent },
  { path: 'DateTable' , component: DatatableComponent },
  { path: 'Edit' , component: EdittableComponent },
  { path: 'View' , component: ViewtableComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
