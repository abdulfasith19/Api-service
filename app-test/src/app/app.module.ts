import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AsideComponent } from './common/aside/aside.component';
import { DashboardComponent } from './common/dashboard/dashboard.component';
import { DatatableComponent } from './common/datatable/datatable.component';
import { LoginComponent } from './login/login.component';
import { EdittableComponent } from './common/edittable/edittable.component';
import { ViewtableComponent } from './common/viewtable/viewtable.component';
import { HttpClientModule } from '@angular/common/http';
import { ApiserviceService }  from './apiservice.service';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    AppComponent,
    AsideComponent,
    DashboardComponent,
    DatatableComponent,
    LoginComponent,
    EdittableComponent,
    ViewtableComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [ApiserviceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
