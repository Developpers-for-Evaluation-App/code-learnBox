import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes } from '@angular/router';
import { RouterModule } from '@angular/router';

import { PublicComponent } from './public/public.component';
import { HomeComponent } from './public/home/home.component';
import { JoinComponent } from './public/join/join.component';
import { PricingComponent } from './public/pricing/pricing.component';
import { SigninComponent } from './public/signin/signin.component';
import { SignupComponent } from './public/signup/signup.component';
import { FourOhFourComponent } from './four-oh-four/four-oh-four.component';

import { SessionComponent } from './session/session.component';
import { FormationsComponent } from './session/formations/formations.component';
import { SallesComponent } from './session/salles/salles.component';
import { SalleEditComponent } from './session/salle-edit/salle-edit.component';
import { LibraryComponent } from './session/library/library.component';
import {NewFormationComponent} from './session/new-formation/new-formation.component';

const appRoutes: Routes = [

  {
    path: '',
    component: PublicComponent,
    children: [
      {
        path: 'pricing',
        component: PricingComponent
      },
      {
        path: 'join',
        component: JoinComponent
      },
      {
        path: 'signin',
        component: SigninComponent
      },
      {
        path: 'signup',
        component: SignupComponent
      },
      {
        path: '',
        component: HomeComponent,
        pathMatch: 'full'
      }
    ]
  },
  {
    path: 'session',
    component: SessionComponent,
    children: [
      {
        path: 'formations',
        component: FormationsComponent
      },
      {
        path: 'formations/new',
        component: NewFormationComponent
      },
      {
        path: 'library',
        component: LibraryComponent
      },
      {
        path: 'classes',
        component: SallesComponent
      },
      {
        path: 'classes/edit/:id',
        component: SalleEditComponent
      }
    ]
  },
  {
    path: 'not-found',
    component: FourOhFourComponent
  },

  {
    path: '**',
    redirectTo: 'not-found'
  }

];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(appRoutes)
  ]
})
export class AppRoutingModule { }
