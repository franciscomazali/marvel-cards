import { Component, OnInit } from '@angular/core';
import { Card } from 'src/app/api/models/card.model';
import { MarvelService } from 'src/app/api/services/marvel.service';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.scss']
})
export class CardsComponent implements OnInit {
  constructor() { }

  ngOnInit() {}

}
