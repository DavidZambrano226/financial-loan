import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.scss']
})
export class LandingComponent implements OnInit {

  validAmmount = false;
  requestForm: FormGroup = new FormGroup({
    name: new FormControl('', [Validators.required]),
    identification: new FormControl('', [Validators.required]),
    email: new FormControl('', [Validators.required, Validators.email]),
    requestAmmount: new FormControl('', [Validators.required, Validators.min(10000), Validators.max(100000)]),
    dateToPay: new FormControl('')
  });

  constructor() { }

  ngOnInit(): void {
  }

  saveRequest() {
    console.log(this.requestForm.value);
  }

}
