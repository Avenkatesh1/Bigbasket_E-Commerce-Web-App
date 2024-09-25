import { Component, inject, Inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

  loginObj: any = {
    email: '',
    password: ''
  };
 route = inject(Router);
  // constructor(private route: Router) { }

  onLogin() {
    if (this.loginObj.email === 'admin' && this.loginObj.password === '112233') {
      alert('Login Success');
      this.route.navigateByUrl('/products');  
    } else {
      alert('Invalid Credentials');
    }
  }
}
