import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { FormationsComponent } from './formations/formations.component';
import { SallesComponent } from './salles/salles.component';
import { LibraryComponent } from './library/library.component';

import {SalleService} from './services/salle-service.service';
import { SalleEditComponent } from './salle-edit/salle-edit.component';
import { NewFormationComponent } from './new-formation/new-formation.component';
import { CKEditorModule } from '@ckeditor/ckeditor5-angular';

@NgModule({
  declarations: [
    FormationsComponent,
    SallesComponent,
    LibraryComponent,
    SalleEditComponent,
    NewFormationComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    ReactiveFormsModule,
    FormsModule,
    CKEditorModule
  ],
  providers: [
    SalleService
  ]
})
export class SessionModule { }
