import { Router } from '@angular/router';
import { StockExchangeService } from './../stockexchange.service';
import { StockExchange } from './../stockexchange';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-stockexchange-list',
  templateUrl: './stockexchange-list.component.html',
  styleUrls: ['./stockexchange-list.component.css']
})
export class StockExchangeListComponent implements OnInit {

  stockExchanges :StockExchange[];

  constructor(private _router : Router , private stockexchangeService: StockExchangeService) { }

  ngOnInit(): void {

    this.stockexchangeService.findAll().subscribe(data => {
      this.stockExchanges = data;
    });
}

  companyList(id : number) {
    this._router.navigate(['companyList',id]);

  }
}
