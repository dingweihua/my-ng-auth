import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../service/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  test: string = 'just a test';

  constructor(private auth: AuthService) {}

  ngOnInit(): void {
    console.log(this.auth.test());
    alert('aaa');
  }
}
