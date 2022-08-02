import {
  AfterViewInit,
  Component,
  ElementRef,
  EventEmitter,
  Input,
  OnInit,
  Output,
  ViewChild
} from '@angular/core';
import { PointInterface } from '../types/point';
import { options } from '../../config';
import { fromEvent, Observable } from 'rxjs';
import { throttleTime } from 'rxjs/operators';
import { Point } from '../types/point.class';

@Component({
  selector: 'game-field',
  templateUrl: './field.component.html',
  styleUrls: ['./field.component.scss']
})
export class FieldComponent implements OnInit {

  @ViewChild('svg') svg!: ElementRef<SVGElement>;
  @Output() pointSetEvent = new EventEmitter<Point>();
  options = options.field;
  points: Array<PointInterface> = new Array((this.options.width + 1) * (this.options.height + 1)).fill(null);
  svgOffset!: {top: number, left: number}


  constructor() {
    const w = this.options.width + 1;
    this.points = this.points.map((_, i) => {
      return new Point(i % w, Math.floor(i / w), "transparent");
    });
  }

  ngOnInit(): void {
  }

  setPoint() {
    console.group('%c Custom log:', 'background: #00A9A5; color: #00D5DB; font-size: 16px;')
    console.log("set point")
    console.groupEnd()
    // this.pointSetEvent.emit(this.currentPoint);
  }

}

