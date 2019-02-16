import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';
import { PaymentRoutingModule } from './payment-routing.module';
import { PaymentLayoutComponent } from './payment-layout.component';
import { AutopayComponent } from './autopay/autopay.component';
import { PaymentHistoryComponent } from './payment-history/payment-history.component';
import { DynamicComponentLoaderService } from '../shared/common-services/dynamic-component-loader.service';
@NgModule({
  imports: [
    CommonModule,
    PaymentRoutingModule,
    SharedModule
  ],
  providers: [
    DynamicComponentLoaderService
  ],
  declarations: [
    PaymentLayoutComponent,
    AutopayComponent,
    PaymentHistoryComponent
  ],
  entryComponents: [
    AutopayComponent,
    PaymentHistoryComponent
  ]
})
export class PaymentModule { }
