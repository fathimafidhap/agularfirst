import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { BankService } from '../services/bank.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  // username = "";
  // password = "";
  loginForm = this.fb.group({
    username: ["", [Validators.required]],
    password: ["", [Validators.required, Validators.minLength(5)]]

  })

  //namal kodhukunna nam frst tht is router
  constructor(private router: Router, private bankService: BankService, private fb: FormBuilder) {//depentance injection
    //ishtam ulla nam fst
  }

  // ngOnInit(): void {
  // }
  // onUsernameChange(event: any) {
  //   this.username = event.target.value;
  // }
  // onPasswordChange(event: any) {
  //   this.password = event.target.value;
  // }
  login() {
    if (this.loginForm.valid == false) {
      // console.log(this.loginForm.controls.username.errors)
      // if (this.loginForm.get('username')?.errors) {
      //   alert("invalid username");
      // }
      // else if (this.loginForm.get('password')?.errors) {
      //   alert("invalid password");
      // }
      console.log(this.loginForm.get('password')?.errors)
      alert("invalid form")

    }
    else {

      const username = this.loginForm.value.username;
      const password = this.loginForm.value.password;
      const user = this.bankService.authenticateUser(username, password);
      // let uname = document.querySelector("#username").value
      // let pwd = document.querySelector("#password").value
      // let us = Bank.authenticationUser(uname, pwd) let us = Bank.authenticationUser(uname, pwd)



      if (user == 1) {
        alert("login sucessful");
        // window.location.href = "home";
        this.router.navigateByUrl("/home");
      }
      else if (user == 0) {
        alert("incorrect password");
      }

      else if (user == -1) {
        alert("no user exsist with provided details");
      }
    }


  }

}
