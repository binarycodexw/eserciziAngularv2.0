import { Component, OnInit, Input } from '@angular/core';
import { obj } from '../model2';

@Component({
  selector: 'app-user-single',
  templateUrl: './user-single.component.html',
  styleUrls: ['./user-single.component.css']
})
export class UserSingleComponent implements OnInit {


  @Input() user!: obj;
  @Input() index!: number;


  constructor() { }

  ngOnInit(): void {
  }

}
