import { options } from "../../config";
import { PointInterface } from "./point";

export class Point implements PointInterface {
  public _x: number;

  public _y: number;

  public color: string;

  constructor(x: number, y: number, color: string) {
    this._x = x;
    this._y = y;
    this.color = color;
  }

  set x(value: number) {
    if (value < 0) return;
    if (value > options.field.width * options.field.cell) return;
    this._x = Math.round(value / options.field.cell) * options.field.cell;
  }

  set y(value: number) {
    if (value < 0) return;
    if (value > options.field.height * options.field.cell) return;
    this._y = Math.round(value / options.field.cell) * options.field.cell;
  }

  get x() {
    return this._x;
  }

  get y() {
    return this._y;
  }
}
