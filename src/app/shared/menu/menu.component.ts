import { Component } from '@angular/core';
import {MenuItem} from 'primeng/api';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent {
  items: MenuItem[] = [];

  constructor() {
      this.items = [
        {
          label: 'Pipes de angular',
          icon: 'pi pi-desktop',
          items: [
            {
              label: 'Textos y Fechas',
              icon: 'pi pi-align-left',
              routerLink: '/'
            },
            {
              label: 'Numbers',
              icon: 'pi pi-dollar',
              routerLink: 'numbers'
            },
            {
              label: 'No Commons',
              icon: 'pi pi-globe',
              routerLink: 'no-commons'
            },
          ]
        },
        {
          label: 'Custon Pipes',
          icon: 'pi pi-cog'
        }
      ];
  }
}
