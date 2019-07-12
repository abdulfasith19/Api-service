import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder , FormGroup , Validators} from '@angular/forms';
import { ApiserviceService } from '../apiservice.service'


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  useremail: ''
  userpassword: ''

  // loginForm: FormGroup;
  // submitted = false;

  constructor(private router: Router , private service : ApiserviceService ) { }

  ngOnInit() {
  //   this.loginForm = this.formBuilder.group({
  //     email: ['', Validators.required],
  //     password: ['', Validators.required]
  // });
  }


  getLoggedIn() {
      //console.log(this.user)
      console.log(this.useremail);
      console.log(this.userpassword);
        // stop here if form is invalid
        // if (this.loginForm.invalid) {
        //     return;
        // }

        let logindata={
            "realm": "aegon",
            "email": this.useremail,
            "password": this.userpassword

        }
       this.service.login(logindata).subscribe(res=>{
           console.log(res);
           this.router.navigate(['/Dashboard']);

       })
  }

}
