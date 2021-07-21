import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-customer-info-editor',
  templateUrl: './customer-info-editor.component.html',
  styleUrls: ['./customer-info-editor.component.scss']
})
export class CustomerInfoEditorComponent implements OnInit {
  infoForm = this.fb.group({
    fName: ['', Validators.required],
    lName: ['', Validators.required],
    email: [, [Validators.required, Validators.email]]
  });

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
  }

  onSubmit(): void {

  }
}
