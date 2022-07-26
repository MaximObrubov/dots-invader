import { Component, OnInit } from '@angular/core';
import { PointInterface } from '../types/point';
import { PLAYER } from '../types/player';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.scss']
})
export class GameComponent implements OnInit {

  public points: Array<PointInterface>;

  constructor() {
    this.points = [
      {x: 40, y: 60, player: PLAYER.FIRST }
    ]
  }

  ngOnInit(): void {
  }

}
