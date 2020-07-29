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
      id: 4,
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
