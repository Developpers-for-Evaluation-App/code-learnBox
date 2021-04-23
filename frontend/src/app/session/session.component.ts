import { Component, OnInit, AfterViewInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Emitters } from '../Emitters/emitters';
import * as $ from 'jquery'; // I faced issue in using jquery's popover
// declare var $: any; declaring jquery in this way solved the problem

@Component({
  selector: 'app-session',
  templateUrl: './session.component.html',
  styleUrls: ['./session.component.css']
})
export class SessionComponent implements OnInit, AfterViewInit {

  message = '';
  username = '';
  email = '';

  authenticated = false;


  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    
    $(document).ready(function(){
      $('user_profile').hide();
    });

    this.http.get('http://127.0.0.1:8000/api/user', {withCredentials: true}).subscribe(
      (res:any) => {
        this.message = `Hello, ${res.username}.`;
        this.username = res.username;
        this.email = res.email;
        Emitters.authEmitter.emit(true);
        console.log(res);
      },
      (err) => {
        Emitters.authEmitter.emit(false);
        console.log(err);
      }
    );

    Emitters.authEmitter.subscribe(
      (auth:boolean) => {
        this.authenticated = auth;
      }
    )
  }

  ngAfterViewInit(): void
  {

  }

  logout():void {
    localStorage.removeItem('token');
    this.authenticated = false
  }

}
