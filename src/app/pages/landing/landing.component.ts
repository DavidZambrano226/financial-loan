import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { TransactionService } from '../../core/transaction/transaction.service';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.scss'],
})
export class LandingComponent implements OnInit {
  validAmmount = false;
  createDenied = false;
  requestForm: FormGroup = new FormGroup({
    name: new FormControl('test', [Validators.required]),
    identification: new FormControl('34567', [Validators.required]),
    email: new FormControl('test3@test.com', [Validators.required, Validators.email]),
    requestAmmount: new FormControl('10000', [
      Validators.required,
      Validators.min(10000),
      Validators.max(100000),
    ]),
    dateToPay: new FormControl(''),
  });

  constructor(private transactionService: TransactionService) {}

  ngOnInit(): void {}

  saveRequest() {
    this.validateUserRequest(this.requestForm.value.email);
  }
  createUser() {
    const userToSave = {
      name: this.requestForm.value.name,
      identification: this.requestForm.value.identification,
      email: this.requestForm.value.email,
    };

    this.transactionService.saveUser(userToSave)
      .subscribe((data: any) => {
        console.log(data);
        this.createRequest(data.email);
      }, (err: any) => {
        console.log(err);
        alert('Se presento un error al crear el usuario. Valide si su correo no se encuentra creado e intente de nuevo.')
      });

  }
  createRequest(email: string) {
    const currentDate = new Date();
    const isApproved = Math.floor(Math.random() * 2);

    const requestToSave = {
      date: currentDate,
      dateToPay: this.requestForm.value.dateToPay,
      ammount: this.requestForm.value.requestAmmount,
      status: isApproved,
      loanPay: 0,
      applicant: email,
    };
    console.log(this.createDenied);

    this.transactionService.saveRequest(requestToSave)
      .subscribe(requestSaved => {
        console.log(requestSaved);
      });
    
  }
  private validateUserRequest(email: string) {
    this.transactionService.getRequestByUser(email).subscribe((data) => {
      const deniedData = data.filter(element => element.status == 0);
      if (deniedData.length > 0) {
        this.createDenied = true;
        alert('No logramos crear su solicitud. Al parecer cuenta con una solicitud recazada, comuniquese con nuestro call center para mas información.')
      } else {
        this.createUser();
      }
    });      
  }
}
