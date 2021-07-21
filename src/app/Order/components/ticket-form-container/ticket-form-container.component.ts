import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-ticket-form-container',
  templateUrl: './ticket-form-container.component.html',
  styleUrls: ['./ticket-form-container.component.scss']
})
export class TicketFormContainerComponent implements OnInit {

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
  }



}
