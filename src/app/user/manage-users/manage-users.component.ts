import { Component, OnInit } from '@angular/core';
import { AppService } from '../../shared/services/index';
import { GlobalDataService } from '../../shared/services/index';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-manage-users',
  templateUrl: './manage-users.component.html',
  styleUrls: ['./manage-users.component.scss'],
  providers: [GlobalDataService]
})
export class ManageUsersComponent implements OnInit {

  public saveUserForm: FormGroup;
  public submitted: boolean;
  public events: any[] = [];
  public userList: any = [];
  public postData = {};

  constructor(private _globalDataService: GlobalDataService, public formBuilder: FormBuilder, private _appService: AppService) {

  }

  ngOnInit() {
    this.getUsersList();

    /*To add a validator, we must first convert the string value into an array.
    The first item in the array is the default value if any,
    then the next item in the array is the validator.
    Here we are adding a required validator meaning that the
    name attribute must have a value in it.*/
    this.saveUserForm = this.formBuilder.group({
      name: [
        '',
        Validators.compose([
          <any>Validators.required,
          <any>Validators.minLength(5),
          <any>Validators.maxLength(10)
        ])
      ],
      email: [
        '',
        Validators.compose([
          <any>Validators.required,
          <any>this.isInvalidEmail
        ])
      ]
    });

    // subscribe to form changes
    this.subcribeToFormChanges();
  }

  getUsersList() {
    this._globalDataService.getUsers().subscribe(
      data => {
        this.userList = data;
      }
    );
  }

  showDetails(e) {
    e.preventDefault();
    alert("Show Details");
  }

  subcribeToFormChanges() {
    const myFormStatusChanges$ = this.saveUserForm.statusChanges;
    const myFormValueChanges$ = this.saveUserForm.valueChanges;

    myFormStatusChanges$.subscribe(x => this.events.push({ event: 'STATUS_CHANGED', object: x }));
    myFormValueChanges$.subscribe(x => this.events.push({ event: 'VALUE_CHANGED', object: x }));
  }
  saveUserData(model, isValid: boolean) {
    this.submitted = true;
    this._appService.log(model);
    this._appService.log("Form Valid =" + isValid);
    this._appService.log("Name Error=" + this.saveUserForm.controls['name'].errors);
    this._appService.log("Email Error=" + this.saveUserForm.controls['email'].errors);
    //this._appService.log(this.submitted, this.saveUserForm.controls['name'].pristine, this.saveUserForm.controls['name'].hasError('required'));
    //this._appService.log(this.submitted, this.saveUserForm.controls['name'].pristine, this.saveUserForm.controls['name'].hasError('minLength'));
    //this._appService.log(this.submitted, this.saveUserForm.controls['name'].pristine, this.saveUserForm.controls['name'].hasError('maxLength'));
    //this.postData = this.saveUserForm.value;
    //this._appService.log(this.postData);
  }

  isInvalidEmail(control) {
    //this._appService.log("Control=", control.value);
    // if(control.value.lenght>0){
    //return {isInvalidEmail:true};
    // }

    var EMAIL_REGEXP = /^[a-z0-9!#$%&'*+\/=?^_`{|}~.-]+@[a-z0-9]([a-z0-9-]*[a-z0-9])?(\.[a-z0-9]([a-z0-9-]*[a-z0-9])?)*$/i;
    if (control.value != "" && (control.value.length <= 5 || !EMAIL_REGEXP.test(control.value))) {
      return { isInvalidEmail: true };
    }
    return null;
  }

}