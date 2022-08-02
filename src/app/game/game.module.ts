import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FieldComponent } from './field/field.component';
import { GameComponent } from './game/game.component';
import { PointComponent } from './point/point.component';


@NgModule({
  declarations: [
    FieldComponent,
    GameComponent,
    PointComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    GameComponent
  ]
})
export class GameModule { }
