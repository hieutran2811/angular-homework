import { Injectable } from '@angular/core';
import {Iuser} from './iuser';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  users:Iuser[] = [
    {
      id: 1,
      name: 'nam',
      email: 'nam@gamil.com',
      group_id: 1
    },
    {
      id: 2,
      name: 'vinh',
      email: 'vinh@gamil.com',
      group_id: 1
    },
    {
      id: 3,
      name: 'duc',
      email: 'duc@gamil.com',
      group_id: 3
    },
    {
      id: 4,
      name: 'duc',
      email: 'duc@gamil.com',
      group_id: 3
    },
    {
      id: 5,
      name: 'duc',
      email: 'duc@gamil.com',
      group_id: 3
    },
    {
      id: 6,
      name: 'duc',
      email: 'duc@gamil.com',
      group_id: 3
    },{
      id: 7,
      name: 'duc',
      email: 'duc@gamil.com',
      group_id: 3
    },{
      id: 8,
      name: 'duc',
      email: 'duc@gamil.com',
      group_id: 3
    },{
      id: 9,
      name: 'duc',
      email: 'duc@gamil.com',
      group_id: 3
    },{
      id: 10,
      name: 'duc',
      email: 'duc@gamil.com',
      group_id: 3
    },{
      id: 11,
      name: 'duc',
      email: 'duc@gamil.com',
      group_id: 3
    },{
      id: 12,
      name: 'duc',
      email: 'duc@gamil.com',
      group_id: 3
    },{
      id: 13,
      name: 'duc',
      email: 'duc@gamil.com',
      group_id: 3
    },{
      id: 14,
      name: 'duc',
      email: 'duc@gamil.com',
      group_id: 3
    },{
      id: 15,
      name: 'duc',
      email: 'duc@gamil.com',
      group_id: 3
    },{
      id: 16,
      name: 'duc',
      email: 'duc@gamil.com',
      group_id: 3
    },{
      id: 17,
      name: 'duc',
      email: 'duc@gamil.com',
      group_id: 3
    }
  ]
  constructor() { }

  getAll() :Iuser[] {
    return this.users;
  }

  add(user: Iuser) :void{
    this.users.push(user);
  }
}
