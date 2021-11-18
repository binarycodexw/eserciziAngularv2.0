import { Component, OnInit, Input } from '@angular/core';
import { Profile } from '../model2';

@Component({
  selector: 'app-user-single',
  templateUrl: './user-single.component.html',
  styleUrls: ['./user-single.component.css']
})
export class UserSingleComponent implements OnInit {


  @Input() user!: Profile;
  @Input() index!: number;


  constructor() { }

  ngOnInit(): void {
  }

}
