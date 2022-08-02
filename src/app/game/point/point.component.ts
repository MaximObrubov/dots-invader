import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { PointInterface } from '../types/point';
import { options } from 'src/app/config';

type PointStyles = {
  width: string,
  height: string,
  left: string,
  top: string,
  backgroundColor?: string,
}

@Component({
  selector: 'game-point',
  templateUrl: './point.component.html',
  styleUrls: ['./point.component.scss']
})
export class PointComponent implements OnInit {

  @Input() point!: PointInterface;
  @Output() selectedEvent = new EventEmitter<PointInterface>();

  constructor() {
  }

  ngOnInit(): void {}

  get style() {
    const styles: PointStyles = {
      width: this._pixy(2 * options.dot.radius),
      height: this._pixy(2 * options.dot.radius),
      left: this._pixy(this.point.x * options.field.cell),
      top: this._pixy(this.point.y * options.field.cell),
    };
    if (this.point.color) styles.backgroundColor = this.point.color;
    return styles;
  }

  onClick() {
    this.selectedEvent.emit(this.point);
  }

  private _pixy(val: number): string {
    return `${val}px`;
  }

}
