import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AllCustomerComponent } from './all-customer/all-customer.component';
import { ValidateSimComponent } from './validate-sim/validate-sim.component';
import { ValidateCustomerComponent } from './validate-customer/validate-customer.component';
import { ValidateCustomerDetailsComponent } from './validate-customer-details/validate-customer-details.component';
import { ValidateIdProofComponent } from './validate-id-proof/validate-id-proof.component';
import { SpecialOffersComponent } from './special-offers/special-offers.component';

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
    AppRoutingModule
  ],
  providers: [
    provideClientHydration()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
