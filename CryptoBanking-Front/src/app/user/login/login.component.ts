import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Login } from 'src/app/shared/login.model';
import { LoginService } from 'src/app/shared/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styles: [
  ]
})
export class LoginComponent implements OnInit {

  constructor(public service: LoginService,
    private toastr:ToastrService,
    private router: Router) { }

  ngOnInit(): void {     
    
  }
  
  onSubmit(form:NgForm){
    this.service.postLogin().subscribe(
      (res:any) => {
        localStorage.setItem('token',res.token);
        this.router.navigate(['/home']);

      },
      err => {
        console.log(err);
        this.toastr.error('Neispravan unos Korisničkog imena ili Passworda!','Greška');
      }
    );
  }

  resetForm(form:NgForm){
    form.form.reset();
    this.service.formData = new Login();
  }

}
