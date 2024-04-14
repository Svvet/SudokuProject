import { Component, Input, Output, OnInit, EventEmitter } from '@angular/core';
import { CellComponent } from '../cell/cell.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'board-row',
  standalone: true,
  imports: [CellComponent, CommonModule],
  templateUrl: './board-row.component.html',
  styleUrl: './board-row.component.scss'
})
export class BoardRowComponent implements OnInit {
  @Input() row: number = -1;
  @Input() initialValues: Array<number> = [];
  @Output() boardRowValuesChange = new EventEmitter<Array<Array<number> | number>>();
  boardRowValues: Array<number> = [];
  test: number = 1;

  ngOnInit(): void {
    this.boardRowValues = this.initialValues.slice();
  }

  updateValues(event: Array<any>){
    this.boardRowValues[event[1]] = event[0];
    console.log(`boardRow updateValues values: ${this.boardRowValues}`)
    this.boardRowValuesChange.emit([this.boardRowValues, this.row]);
  }
}
