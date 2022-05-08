import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, NgForm } from '@angular/forms';
import { UserService } from '../_services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm!: FormGroup;

  constructor(private userService: UserService) { }

  ngOnInit(): void {
    this.FormConfiguration()
  }

  FormConfiguration(){
    this.loginForm = new FormGroup({
      userName: new FormControl(null),
      userPassword: new FormControl(null)
    })
  }

  login() {
    this.userService.login(this.loginForm.value).subscribe(
      (response) => {
        console.log(response);
      },
      (error) => {
        console.log(error);
      }
    );
  }

}
