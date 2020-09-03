import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddStockExchangeComponent } from './add-stockexchange/add-stockexchange.component';
import { StockExchangeListComponent } from './stockexchange-list/stockexchange-list.component';

const routes: Routes = [

  { path: 'stockexchanges', component: StockExchangeListComponent },
  { path: 'addstockexchange', component: AddStockExchangeComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
