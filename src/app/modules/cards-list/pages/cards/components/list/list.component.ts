import { Component, OnInit, Input } from '@angular/core';
import { Card } from 'src/app/api/models/card.model';
import { MarvelService } from 'src/app/api/services/marvel.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {

  cards: Card[] = [];
  
  constructor(private marvelService: MarvelService) { }

  ngOnInit() {
    this.marvelService.getAll().subscribe(
      cards => this.cards = cards.sort((a, b) => b.id - a.id),
      error => {
        console.error(error);
      }
    );
  }

}
