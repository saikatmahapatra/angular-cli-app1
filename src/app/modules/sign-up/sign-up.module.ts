import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Route, RouterModule } from '@angular/router';
import { SignUpComponent } from './sign-up.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild([
      { path: '', component: SignUpComponent }
    ])
  ],
  declarations: [SignUpComponent]
})
export class SignUpModule { }
