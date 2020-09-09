import { RegistrationService } from './../services/registration/registration.service';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
  providers: [RegistrationService],
})
export class RegisterComponent implements OnInit {
  showSuccessMessage: boolean;
  serverErrorMessage: string;

  // user;
  constructor(private registratonService: RegistrationService) {
    // this.user = service.postRegister();
    // console.log(this.user);
  }

  ngOnInit(): void {}
  onSubmit(form: NgForm) {
    this.registratonService.postUser(form.value).subscribe((res) => {
      this.showSuccessMessage = true;
      setTimeout(() => (this.showSuccessMessage = false), 3000);
      this.resetForm(form);
    });
  }
  resetForm(form: NgForm) {
    this.registratonService.selectedUser = {
      name: '',
      email: '',
      password: '',
      age: 0,
    };
    form.resetForm();
    this.serverErrorMessage = '';
  }
}
