import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { User } from 'src/app/shared/user.model';
import { UserService } from 'src/app/shared/user.service';

@Component({
  selector: 'app-one1-user',
  templateUrl: './one1-user.component.html',
})
export class One1UserComponent implements OnInit {

  constructor(public service:UserService, 
    private toastr:ToastrService,
    private router: Router) { }

  ngOnInit(): void {
  }

  update1User(form:NgForm){
    this.service.put1User().subscribe(
      res => {
        this.resetForm(form);
        this.service.userInfo();
        this.toastr.info('Uspješno uređeni!','Korisnički podaci')

      },
      err => {console.log(err);}
    );
  }
  
  resetForm(form:NgForm){
    form.form.reset();
    this.service.formData = new User();
  }

}
