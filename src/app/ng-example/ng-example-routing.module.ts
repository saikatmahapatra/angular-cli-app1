import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NgExampleComponent } from './ng-example.component';
import { TemplateDataBindingComponent } from './template-data-binding/template-data-binding.component';
import { AngularDirectiveComponent } from './angular-directive/angular-directive.component';
import { PipesComponent } from './pipes/pipes.component';
import { FormInputBindingComponent } from './form-input-binding/form-input-binding.component';
import { TemplateDrivenFormComponent } from './template-driven-form/template-driven-form.component';
import { ReactiveFormComponent } from './reactive-form/reactive-form.component';
import { AngularServicesComponent } from './angular-services/angular-services.component';
import { TestComponent } from './test/test.component';
import { ChildComponent } from './child/child.component';
import { ParentComponent } from './parent/parent.component';
import { EmployeeComponent } from './observable-in-angular/employee.component';

const routes: Routes = [{
  path: '',
  component: NgExampleComponent,
  children: [
    { path: '', component: TemplateDataBindingComponent },
    { path: 'template-basic', component: TemplateDataBindingComponent },
    { path: 'types-of-angular-directive', component: AngularDirectiveComponent },
    { path: 'pipes', component: PipesComponent },
    { path: 'user-input-binding', component: FormInputBindingComponent },
    { path: 'template-driven-form', component: TemplateDrivenFormComponent },
    { path: 'reactive-form', component: ReactiveFormComponent },
    { path: 'angular-services', component: AngularServicesComponent },
    { path: 'test', component: TestComponent },
    { path: 'child-comp', component: ChildComponent },
    { path: 'parent-comp', component: ParentComponent },
    { path: 'observable-in-angular', component: EmployeeComponent },
  ]
}];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
})
export class NgExampleRoutingModule { }
