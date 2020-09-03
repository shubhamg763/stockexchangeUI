import { ActivatedRoute } from '@angular/router';
import { StockExchangeService } from './../stockexchange.service';
import { Company } from './../company';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-companylist',
  templateUrl: './companylist.component.html',
  styleUrls: ['./companylist.component.css']
})
export class CompanyListComponent implements OnInit {

  companies : Company[];
  constructor(private route : ActivatedRoute, private stockexchangeService: StockExchangeService) { }

  ngOnInit(): void {

    this.route.paramMap.subscribe(params => {const stockExchangeId = +params.get('id')
    this.stockexchangeService.getCompanyList(stockExchangeId).subscribe(data => {
      this.companies = data; })});


  }

}