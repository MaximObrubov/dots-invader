import { AfterViewInit, Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import { PointInterface } from '../types/point';
import { options } from '../../config';
import { fromEvent, Observable } from 'rxjs';
import { debounceTime, throttleTime, map } from 'rxjs/operators';
import { Point } from '../types/point.class';
@Component({
  selector: 'game-field',
  templateUrl: './field.component.html',
  styleUrls: ['./field.component.scss']
})
export class FieldComponent implements OnInit, AfterViewInit {

  @ViewChild('svg') svg!: ElementRef<SVGElement>;
  // @ViewChild('svg') svg!: ElementRef<HTMLOrSVGElement>;
  mouseMove$!: Observable<Event>;
  currentPoint: PointInterface | null;

  @Input() points!: Array<PointInterface>;
  options = options;
  svgOffset!: {top: number, left: number}

  constructor(
    private elementRef: ElementRef
  ) {
    this.currentPoint = new Point(30, 40, "red");
  }

  public size = { ...options.field };

  ngOnInit(): void {
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
    
  }

}
