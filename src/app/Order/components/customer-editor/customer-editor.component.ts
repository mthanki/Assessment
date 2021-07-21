import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-customer-editor',
  templateUrl: './customer-editor.component.html',
  styleUrls: ['./customer-editor.component.scss']
})
export class CustomerEditorComponent implements OnInit {
  customerForm = this.fb.group({
    email: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required]],
    infoForm: this.fb.group({
      fName: ['', Validators.required],
      lName: ['', Validators.required],
      email: [, [Validators.required, Validators.email]]
    }),
  });

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
  }

}
