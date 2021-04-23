import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SalleService } from '../services/salle-service.service';
import { StudentService } from '../services/student.service';
import {FormBuilder, FormGroup} from '@angular/forms';

@Component({
  selector: 'app-salle-edit',
  templateUrl: './salle-edit.component.html',
  styleUrls: ['./salle-edit.component.css']
})
export class SalleEditComponent implements OnInit {

  id: any;
  name = '';
  promotion = '';

  students: any[];

  form: FormGroup;
  formUp: FormGroup;

  constructor(private fb: FormBuilder, private route: ActivatedRoute, private salleService: SalleService, private studentService: StudentService) { }

  ngOnInit(): void {

    this.id = this.route.snapshot.params.id;

    this.form = this.fb.group({
      firstname: '',
      lastname: '',
      email: '',
      salle_id: parseInt(this.id)
    });

    this.formUp = this.fb.group({
      name: '',
      promotion: ''
    });

    this.getData();
    this.getAllStudents();
  }

  getData(): void
  {
    this.salleService.getSalleById(this.id).subscribe(
      (res) => {
        this.name = res.name;
        this.promotion = res.promotion;
        console.log(this.formUp.getRawValue());
      }
    );
  }

  updateSalle(): void
  {
    this.salleService.updateData(this.id, this.formUp.getRawValue()).subscribe(
      (res) => {
        console.log(res);
      }
    );
  }

  addStudent(): void
  {
     this.studentService.save(this.form.getRawValue()).subscribe(
      (res) => {
        console.log(res);
        this.getAllStudents();
      },
       (err) => {
        console.log(err);
       }
    );
  }

  getAllStudents(): void
  {
    this.studentService.getAllStudents(this.id).subscribe(
      (res) => {
        console.log("res", res);
        this.students = res;
      }
    );
  }

  deleteStudent(id: any): any
  {
    if (confirm('Vous allez supprimer cet étudiant'))
    {
      this.studentService.deleteData(id).subscribe(
        (res) => {
          this.getAllStudents();
        }
      );
    }
  }

}
