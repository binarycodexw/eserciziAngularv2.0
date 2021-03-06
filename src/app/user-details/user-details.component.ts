import { Component, OnInit ,NgModule } from '@angular/core';
import { Profile, Role, Gender, } from '../models/model';
@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.css']
})
export class UserDetailsComponent implements OnInit {

  user: Profile = {
    id: 3487,
    name: 'Mario',
    surname: 'Rossi',
    age: 30,
    dateOfBirth: '1995/12/14',
    address: {
      city: 'Roma',
      street: 'Via roma 10',
      postalCode: '00100'
    },
    role: Role.staff, // Ruoli possibili: 'staff', 'student', 'manager', 'admin'
    username: 'MarioRossi80',
    profilePhotoUrl: 'https://bit.ly/3yRngEP',
    companies: [
      {
        id: 148979,
        name: 'Develhope',
        description: 'La migliore',
        location: {
          city: 'Palermo',
          street: 'Via Libertà 58',
          postalCode: '90139'
        }
      },
      {
        id: 123123,
        name: 'Apple',
        description: 'E insomma...',
        location: {
          city: 'Cupertino',
          street: 'One Apple Park Way',
          postalCode: '95014'
        }
      }
    ],
    gender: Gender.male // Generi possibili: 'male', 'female', 'other'
  };

  constructor() { }

  ngOnInit(): void {
  }

}
