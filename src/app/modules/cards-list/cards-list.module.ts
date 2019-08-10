import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CardsListRoutingModule } from './cards-list-routing.module';

import { CardsComponent } from './pages/cards/cards.component';
import { CardComponent } from './pages/cards/components/card/card.component';
import { ListComponent } from './pages/cards/components/list/list.component';


@NgModule({
  declarations: [ListComponent, CardComponent, CardsComponent],
  imports: [
    CommonModule,
    CardsListRoutingModule
  ]
})
export class CardsListModule { }
