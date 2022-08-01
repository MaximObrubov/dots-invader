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
export class FieldComponent implements OnInit, AfterViewInit {

  @ViewChild('svg') svg!: ElementRef<SVGElement>;
  mouseMove$!: Observable<Event>;
  currentPoint: Point | undefined;

  @Input() pointColor: string | null = null;
  @Input() points!: Array<PointInterface>;
  @Output() pointSetEvent = new EventEmitter<Point>();
  options = options;
  svgOffset!: {top: number, left: number}

  constructor() {}

  public size = { ...options.field };

  ngOnInit(): void {
  }

  ngOnChanges(): void {
    let x, y;
    this.currentPoint
      ? {x, y} = this.currentPoint
      : [x, y] = [0, 0];
    if (this.pointColor) this.currentPoint = new Point( x , y, this.pointColor);
  }

  ngAfterViewInit() {
    this.svgOffset = this.svg.nativeElement.getBoundingClientRect();
    this.mouseMove$ = fromEvent(this.svg.nativeElement, 'mousemove')
      .pipe(throttleTime(100));
    this.mouseMove$.subscribe(this.onMouseMove.bind(this))
  }

  onMouseMove($event: Event) {
    if (!this.currentPoint) return;
    this.currentPoint.x = ($event as MouseEvent).clientX - this.svgOffset.left;
    this.currentPoint.y = ($event as MouseEvent).clientY - this.svgOffset.top;
  }

  setPoint() {
    this.pointSetEvent.emit(this.currentPoint);
  }

}
