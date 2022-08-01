import { Component, OnChanges, OnInit } from '@angular/core';
import { PointInterface } from '../types/point';
import { options } from '../../config';
import { Player } from '../Player';
import { Point } from '../types/point.class';
import { PlayersService } from 'src/app/services/players.service';


@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.scss']
})
export class GameComponent implements OnInit {

  public points: Array<Point> = [];

  public currentPlayer: Player;

  constructor(
    private playersService: PlayersService,
  ) {
    this.currentPlayer = this.playersService.nextPlayer;
  }

  ngOnInit(): void {
  }

  nextStep($point: Point) {
    this.currentPlayer.addPoint($point);
    this.points = this.playersService.points;
    this.currentPlayer = this.playersService.nextPlayer;
  }

}
