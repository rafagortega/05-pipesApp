
import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';


@Component({
    selector: 'shared-menu',
    templateUrl: './menu.component.html'
})
export class MenuComponent implements OnInit {
   public items: MenuItem[]=[];

    ngOnInit() {
        this.items = [
            {
              label:'Pipes de Angular',
              icon:'pi pi-desktop',
              items:[
                {
                  label:'Textos y fechas',
                  icon:'pi pi-align-left'
                },
                {
                  label:'Números',
                  icon:'pi pi-dollar'
                },
                {
                  label:'No comunes',
                  icon:'pi pi-globe'
                }
              ]
            },
            {
              label:'Pipes personalizados',
              icon:'ppi pi-cog',
              items:[
                {
                  label:'Otro elemento',
                  icon:'ppi pi-cog'
                }
              ]
            }



        ];
    }
}
