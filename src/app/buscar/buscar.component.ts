import { Component, OnInit } from '@angular/core';
import { UserService } from '../service/user.service';
import { User } from '../model/user';


@Component({
  selector: 'app-buscar',
  templateUrl: './buscar.component.html',
  styleUrls: ['./buscar.component.css']
})
export class BuscarComponent implements OnInit {

  private idBusca:number;
  private _user: User = null;

  constructor(private userSrv: UserService) { }

  ngOnInit() { }

  private pesquisar(){
    this.userSrv.getId(this.idBusca).subscribe((res: User) => 
{this._user = res;})
}

}