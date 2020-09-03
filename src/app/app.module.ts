import { StockExchangeService } from './stockexchange.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { AddStockExchangeComponent } from './add-stockexchange/add-stockexchange.component';
import { StockExchangeListComponent } from './stockexchange-list/stockexchange-list.component';
import { CompanyListComponent } from './companylist/companylist.component';

@NgModule({
  declarations: [
    AppComponent,
    AddStockExchangeComponent,
    StockExchangeListComponent,
    CompanyListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule

  ],
  providers: [StockExchangeService],
  bootstrap: [AppComponent]
})
export class AppModule { }
