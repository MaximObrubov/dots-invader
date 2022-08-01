import { Injectable } from '@angular/core';
import { Player } from '../game/Player';
import { Point } from '../game/types/point.class';

@Injectable({
  providedIn: 'root'
})
export class PlayersService {

  public players: Array<Player>;

  private currentPlayerIndex = 0;

  constructor() {
    this.players = [
      new Player("orange"),
      new Player("darkblue"),
    ];
  }

  get points(): Array<Point> {
    return this.players.map(p => p.points).flat();
  }

  get nextPlayer(): Player {
    this.currentPlayerIndex = (this.currentPlayerIndex + 1) % this.players.length;
    return this.players[this.currentPlayerIndex];
  }
}
