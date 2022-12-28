import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BasicComponent } from './sale/pages/basic/basic.component';
import { NoCommonsComponent } from './sale/pages/no-commons/no-commons.component';
import { NumbersComponent } from './sale/pages/numbers/numbers.component';
import { OrderComponent } from './sale/pages/order/order.component';

const routes: Routes = [
  {
    path: '',
    component: BasicComponent,
    pathMatch: 'full'
  },
  {
    path: 'numbers',
    component: NumbersComponent,
  },
  {
    path: 'no-commons',
    component: NoCommonsComponent,
  },
  {
    path: 'order',
    component: OrderComponent,
  },
  {
    path: '**',
    redirectTo: ''
  },
]

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRouterModule { }
