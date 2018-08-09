import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-displayfield',
  templateUrl: './displayfield.component.html',
  styleUrls: ['./displayfield.component.css']
})
export class DisplayfieldComponent {

  constructor() { }
  @Input() label:string;
  @Input() value:string;
}
