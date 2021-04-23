import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import {HttpClient} from '@angular/common/http';
import { SalleService } from '../services/salle-service.service';
import {Router} from '@angular/router';
import {StudentService} from '../services/student.service';

@Component({
  selector: 'app-salles',
  templateUrl: './salles.component.html',
  styleUrls: ['./salles.component.css']
})
export class SallesComponent implements OnInit {

  form: FormGroup;
  salles: any[];
  count = 0;

  constructor(private fb: FormBuilder, private http: HttpClient, private router: Router, private salleService: SalleService, private studentService: StudentService) { }

  ngOnInit(): void {
    this.form = this.fb.group({
      name: '',
      promotion: '',
    });

    this.getSalles();
  }

  save(): void
  {
    this.salleService.save(this.form.getRawValue()).subscribe(
      (res) => {
        console.log(res);
        this.getSalles();
      },
      (err) => {
        console.log(err);
      }
    );
  }

  getSalles(): void
  {
    this.salleService.getAllSalles().subscribe(
      (res) => {
        this.salles = res;
      }
    );
  }

  delete(id: any)
  {
    if(confirm('Vous êtes sur le point de supprimer cette classe'))
    {
      this.salleService.deleteData(id).subscribe(
        (res) => {
          this.getSalles();
        }
      );
    }
  }


}
