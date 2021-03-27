import { Component, Input, OnInit } from '@angular/core';
import { Cat } from 'src/app/models/cat';

@Component({
  selector: 'app-cat-details',
  templateUrl: './cat-details.component.html',
  styleUrls: ['./cat-details.component.css']
})
export class CatDetailsComponent implements OnInit {

  @Input() cat?: Cat;

  constructor() { }

  ngOnInit(): void {
  }

}
