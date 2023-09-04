import { Component } from '@angular/core';
import { interval, tap } from 'rxjs';

@Component({
  selector: 'app-uncommon-page',
  templateUrl: './uncommon-page.component.html',
  styleUrls: ['./uncommon-page.component.css']
})
export class UncommonPageComponent {
  //i18nSelect
  public name:string='RafaGortega';
  public gender:'male'|'female'='male';
  public invitationMap={
    'male':'invitarlo',
    'female':'invitarla'
  }

  changeClient():void{
    this.name="Rafaela";
    this.gender="female";
  }

//i18nPlural
public clients:string[]=['Maria','Jose','Juan','Cruz'];
public clientsMap={
  '=0':'no tenemos ningun cliente esperando',
  '=1':'tenemos un cliente esperando',
  'other':'tenemos # clientes esperando'
}
deleteClient():void{
  this.clients.pop();
}

//KeyValue Pipe
public person={
  name:'Rafagortega',
  age:27,
  location:'Spain'
}

//Async Pipe
public myObservableTimer=interval(2000).pipe(
  tap(value=>console.log('tap',value))
);

}
