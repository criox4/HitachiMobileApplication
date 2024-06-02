import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms'; // Add this import

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AllCustomerComponent } from './all-customer/all-customer.component';
import { ValidateSimComponent } from './validate-sim/validate-sim.component';
import { ValidateCustomerComponent } from './validate-customer/validate-customer.component';
import { ValidateCustomerDetailsComponent } from './validate-customer-details/validate-customer-details.component';
import { ValidateIdProofComponent } from './validate-id-proof/validate-id-proof.component';
import { SpecialOffersComponent } from './special-offers/special-offers.component';

import { CustomerService } from './services/customer.service';

@NgModule({
  declarations: [
    AppComponent,
    AllCustomerComponent,
    ValidateSimComponent,
    ValidateCustomerComponent,
    ValidateCustomerDetailsComponent,
    ValidateIdProofComponent,
    SpecialOffersComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule // Add this module
  ],
  providers: [
    provideClientHydration(),
    CustomerService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
