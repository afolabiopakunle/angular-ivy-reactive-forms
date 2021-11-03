import { Component, OnInit, VERSION } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent implements OnInit {
  myForm: FormGroup;
  
  ngOnInit() {
    this.myForm = new FormGroup({
      firstName: new FormControl(),
      lastName: new FormControl()
    })
  }

  save() {
    console.log(this.myForm.value)
  }
}
