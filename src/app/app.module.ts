import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule,Routes } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BillingComponent } from '../app/Billing/Billing.component';
 
const routes :Routes = [
  {path: 'app/Billing',component: BillingComponent},
  
]
@NgModule({
  declarations: [
    AppComponent,
    BillingComponent
  ],
  imports: [
    RouterModule.forChild(routes),
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
