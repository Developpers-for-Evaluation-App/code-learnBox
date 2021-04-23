import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';


@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {

  form: FormGroup;

  constructor(private fb: FormBuilder, private http: HttpClient, private router: Router) { }

  ngOnInit(): void {
    this.form = this.fb.group({
      email: '',
      password: ''
    })
  }

  submit():void
  {

    this.http.post('http://127.0.0.1:8000/api/login', this.form.getRawValue(), {withCredentials: true})
        .subscribe((data: any) => {
          console.log(data);
          localStorage.setItem('token', data?.message);
           this.router.navigate(['/session']);
        }, (error) => {
          console.log(error);
        });

  }

}
