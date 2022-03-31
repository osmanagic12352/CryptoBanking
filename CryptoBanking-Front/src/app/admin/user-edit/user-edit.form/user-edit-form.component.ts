import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { User } from 'src/app/shared/user.model';
import { UserService } from 'src/app/shared/user.service';


@Component({
  selector: 'app-user-edit-form',
  templateUrl: './user-edit-form.component.html',
  styles: [
  ]
})
export class UserEditFormComponent implements OnInit {

  constructor(public service:UserService, 
    private toastr:ToastrService,
    private router: Router) { }

  ngOnInit(): void {
  }

  updateUser(form:NgForm){
    this.service.putUser().subscribe(
      res => {
        this.resetForm(form);
        this.service.listUsers();
        this.toastr.info('Uspješno unešeno!','Kartični podaci')

      },
      err => {console.log(err);}
    );
  }
  
  resetForm(form:NgForm){
    form.form.reset();
    this.service.formData = new User();
  }

}

