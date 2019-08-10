import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CardsListRoutingModule } from './cards-list-routing.module';
import { ListComponent } from './list/list.component';
import { CardComponent } from './card/card.component';


@NgModule({
  declarations: [ListComponent, CardComponent],
  imports: [
    CommonModule,
    CardsListRoutingModule
  ]
})
export class CardsListModule { }
