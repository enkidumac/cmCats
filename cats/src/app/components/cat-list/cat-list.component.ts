import { Component, OnInit } from '@angular/core';
import { VirtualTimeScheduler } from 'rxjs';
import { Cat } from 'src/app/models/cat';

@Component({
  selector: 'app-cat-list',
  templateUrl: './cat-list.component.html',
  styleUrls: ['./cat-list.component.css']
})
export class CatListComponent implements OnInit {

  catList: Cat[] = [
    new Cat("Mruczek"),
    new Cat("Puszek"),
    new Cat("Terminator"),
    new Cat("Kłaczek")
  ]

  selectedCat?: Cat;

  constructor() { }

  ngOnInit(): void {
  }

  selectCatFunc(cat: Cat): void {
    this.selectedCat = cat;
    }
}
