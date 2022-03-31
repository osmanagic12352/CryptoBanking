import { Component, OnInit } from '@angular/core';
import { NgForm, Validator } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { User } from 'src/app/shared/user.model';
import { UserService } from 'src/app/shared/user.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styles: [
  ]
})
export class RegisterComponent implements OnInit {

  constructor(public service: UserService,
    private toastr:ToastrService,
    private router: Router) { }

  ngOnInit(): void {
  }

  onSubmit(form:NgForm){
    this.service.postUser().subscribe(
      res => {
        this.resetForm(form);
        this.toastr.success('Uspjeh','Uspješna registracija!');
        this.router.navigateByUrl('/home');
      },
      err => {
        console.log(err);
        this.toastr.error('Username već postoji!','Greška');
      }
    );
  }

  resetForm(form:NgForm){
    form.form.reset();
    this.service.formData = new User();
  }

}
