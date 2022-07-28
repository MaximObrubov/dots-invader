import { Component, OnInit } from '@angular/core';
import { PointInterface } from '../types/point';
import { options } from '../../config';
import { Player } from '../Player';
import { Point } from '../types/point.class';


@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.scss']
})
export class GameComponent implements OnInit {

  public players: Array<Player>;

  public points: Array<Point> = [];

  constructor() {
    this.players = [
      new Player("orange"),
      new Player("darkblue"),
    ];
    this.points = [
      ...this.players[0].points,
      ...this.players[1].points,
    ]
  }

  ngOnInit(): void {
  }

}
