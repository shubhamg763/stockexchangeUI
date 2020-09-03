import { Component, OnInit } from '@angular/core';
import { StockExchangeService } from './../stockexchange.service';
import { StockExchange } from './../stockexchange';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-add-stockexchange',
  templateUrl: './add-stockexchange.component.html',
  styleUrls: ['./add-stockexchange.component.css']
})
export class AddStockExchangeComponent {

  stockExchange : StockExchange;
  
  constructor(private route: ActivatedRoute, 
    private router: Router, 
    private stockExchangeService: StockExchangeService) {

    this.stockExchange = new StockExchange();
   }

   onSubmit() {
    this.stockExchangeService.save(this.stockExchange).subscribe(result => this.gotoStockExchangesList());
  }

  gotoStockExchangesList() {
    this.router.navigate(['/stockexchanges']);
  }

}
