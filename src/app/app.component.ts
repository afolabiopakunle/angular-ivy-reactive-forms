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
      firstName: new FormControl('', Validators.required),
      lastName: new FormControl()
    })
  }

  save() {
    this.myForm.controls.firstName.removeValidators(Validators.required)
    console.log(this.myForm.controls);
    console.log(this.myForm.get('lastName'))
  }
}
