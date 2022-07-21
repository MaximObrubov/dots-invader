import { Component, OnInit } from '@angular/core';
declare var Snap: any;
// declare var mina: any;


@Component({
  selector: 'game-field',
  templateUrl: './field.component.html',
  styleUrls: ['./field.component.scss']
})
export class FieldComponent implements OnInit {

  constructor() { }

  public size = {
    width: 24,
    height: 17,
  }
  public CELL_SIZE = 35;

  private ctxSelector = "#field-ctx";

  ngOnInit(): void {
    const s = Snap(this.ctxSelector);

    const c = s.circle(50, 50, 100);
  }

}
