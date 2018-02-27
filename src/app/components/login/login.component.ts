import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../service/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loading = false;
  user: any = {};

  constructor(private auth: AuthService) {}

  ngOnInit() {}

  login() {
    this.loading = true;
    this.auth.login(this.user.username, this.user.password)
      .subscribe(
      data => {
        alert('Login success!');
        this.loading = false;
      });
  }
}
