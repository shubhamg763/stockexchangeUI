import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StockExchangeListComponent } from './stockexchange-list.component';

describe('StockExchangeListComponent', () => {
  let component: StockExchangeListComponent;
  let fixture: ComponentFixture<StockExchangeListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StockExchangeListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StockExchangeListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
