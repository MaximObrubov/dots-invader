import { Component, Input, OnInit } from '@angular/core';
import { PointInterface } from '../types/point';
import { options } from 'src/app/config';

@Component({
  selector: 'game-point',
  templateUrl: './point.component.html',
  styleUrls: ['./point.component.scss']
})
export class PointComponent implements OnInit {

  @Input() point!: PointInterface;

  constructor() {
  }

  ngOnInit(): void {}

  get style() {
    return {
      backgroundColor: this.point.color,
      width: this._pixy(2 * options.dot.radius),
      height: this._pixy(2 * options.dot.radius),
      left: this._pixy(this.point.x * options.field.cell),
      top: this._pixy(this.point.y * options.field.cell),
    }
  }

  private _pixy(val: number): string {
    return `${val}px`;
  }

}
