import { Component, Input, OnInit, EventEmitter, Output } from '@angular/core';
import { Cat } from 'src/app/models/cat';

@Component({
  selector: 'app-cat-view',
  templateUrl: './cat-view.component.html',
  styleUrls: ['./cat-view.component.css']
})
export class CatViewComponent implements OnInit {

  @Input() cat?: Cat;
  @Output() selectedCat: EventEmitter<Cat> = new EventEmitter<Cat>();

  constructor() { }

  ngOnInit(): void {
  }

  select(): void {
    this.selectedCat.emit(this.cat);
  }
}


