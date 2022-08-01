import { Point } from "./types/point.class";

export class Player {

  public color: string;

  public points: Array<Point> = [];

  constructor(color: string) {
    this.color = color;
  }

  addPoint(point: Point) {
    this.points.push(point);
  }
}
