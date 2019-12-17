import { Component, OnInit } from '@angular/core';
import { User } from '../model/user';
import {UserService} from '../service/user.service';

@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html',
  styleUrls: ['./lista.component.css']
})
export class ListaComponent implements OnInit {

  constructor(private UserService: UserService) { }

  user: User[];
  ngOnInit() {
    this.findAll();
  }

  findAll(){
    this.UserService.getAll().subscribe((userOut: User[])=>{
      this.user = userOut;
    })
  }

}
