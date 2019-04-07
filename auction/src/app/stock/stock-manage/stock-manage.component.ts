import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-stock-manage',
  templateUrl: './stock-manage.component.html',
  styleUrls: ['./stock-manage.component.css']
})
export class StockManageComponent implements OnInit {
  private stocks: Array<Stock>;

  constructor() {
  }

  ngOnInit() {
    this.stocks = [
      new Stock(1, "第一支股票", 1.99, 3.5, "第一支股票", ["IT ", "互联网"]),
      new Stock(2, "第一支股票", 3.99, 2.5, "第一支股票", [" 金融", "体育"]),
      new Stock(3, "第一支股票", 5.09, 1.5, "第一支股票", ["油料", "化工"]),
      new Stock(4, "第一支股票", 2.99, 1.5, "第一支股票", ["医疗", "卫生"]),
      new Stock(5, "第一支股票", 3.99, 4.5, "第一支股票", ["体育", "时尚"]),
      new Stock(6, "第一支股票", 2.99, 2.0, "第一支股票", ["IT ", "科技"]),
      new Stock(7, "第一支股票", 8.88, 1.5, "第一支股票", ["医疗", "时尚"]),
      new Stock(8, "第一支股票", 5.59, 2.5, "第一支股票", ["美术", "音乐"]),
    ]
  }

}

export class Stock {
  constructor(
    public id: number,
    public name: string,
    public price: number,
    public rating: number,
    public desc: string,
    public categories: Array<string>
  ) {

  }

}
