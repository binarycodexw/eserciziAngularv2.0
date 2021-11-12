import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { obj } from '../model2';

@Component({
  selector: 'app-user-single',
  templateUrl: './user-single.component.html',
  styleUrls: ['./user-single.component.css']
})
export class UserSingleComponent implements OnInit {


  @Input() user!: obj;
  @Input() index!: number;

  @Output() deleteCat = new EventEmitter<obj>();

  constructor() { }

  ngOnInit(): void {
  }

}
