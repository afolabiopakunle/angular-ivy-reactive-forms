import { Component, OnInit, VERSION } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent implements OnInit {
  myForm: FormGroup;
  
  ngOnInit() {
    this.myForm = new FormGroup({
      fullName: new FormControl('', Validators.required),
      email: new FormControl(),
      skills: new FormGroup({
        experienceInYears: new FormControl(),
        level: new FormControl(),
        skillTitle: new FormControl(),
      })
    })
  }

  save() {
    this.myForm.controls.fullName.removeValidators(Validators.required)
    console.log(this.myForm.controls);
  }

  loadData() {
    this.myForm.patchValue({
      fullName: 'Afolabi Opakunle',
      email: 'opakunleafolabi@gmail.com',
      skills: {
        experienceInYears: 4,
        level: 'intermediate',
        skillTitle: 'Angular 2+'
      }
    })
  }
}
