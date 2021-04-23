import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { RouterModule } from '@angular/router';
import { PublicModule } from './public/public.module';
import { SessionModule } from './session/session.module';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';


import { AppComponent } from './app.component';
import { FourOhFourComponent } from './four-oh-four/four-oh-four.component';
import { SessionComponent } from './session/session.component';
import { TokenInterceptor } from 'src/@core/TokenInterceptor';
import { PublicComponent } from './public/public.component';

@NgModule({
  declarations: [
    AppComponent,
    FourOhFourComponent,
    SessionComponent,
    PublicComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    RouterModule,
    PublicModule,
    SessionModule
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: TokenInterceptor, multi: true }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
