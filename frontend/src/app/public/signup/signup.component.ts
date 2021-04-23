import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  form: FormGroup;

  constructor(private fb: FormBuilder, private http: HttpClient, private router: Router) { }

  ngOnInit(): void {
    this.form = this.fb.group({
      username: '',
      email: '',
      password: ''
    });
  }

  submit():void
  {
    this.http.post('http://127.0.0.1:8000/api/register', this.form.getRawValue())
        .subscribe((res) => {
          console.log(res);
          this.router.navigate(['/signin']);
        });
  }

}
