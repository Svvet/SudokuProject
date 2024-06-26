import { Component, Input, Output, OnInit, EventEmitter } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'cell',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './cell.component.html',
  styleUrl: './cell.component.scss'
})
export class CellComponent implements OnInit {
  @Input() initialValue?: number;
  @Output() cellValueChange = new EventEmitter<Array<number>>();
  @Input() col: number = -1;
  @Input() row: number = -1;
  inputValue: string = "";

  cellClass?: string;
  cellInputClass?: string;
  constructor() {
  }

  ngOnInit(): void {
    this.inputValue = String(this.initialValue);
    this.cellClass = "sudoku-cell";
    let colRest = this.col % 3;
    let rowRest = this.row % 3;

    if (colRest == 2 && this.col != 8) {
      this.cellClass = [this.cellClass, "sudoku-cell-border-right"].join(" ");
    }

    if (rowRest == 2 && this.row != 8) {
      this.cellClass = [this.cellClass, "sudoku-cell-border-bottom"].join(" ");
    }

    if (this.col == 0) {
      this.cellClass = [this.cellClass, "sudoku-cell-outer-border-left"].join(" ");
    }

    if (this.col == 8) {
      this.cellClass = [this.cellClass, "sudoku-cell-outer-border-right"].join(" ");
    }

    if (this.row == 0) {
      this.cellClass = [this.cellClass, "sudoku-cell-outer-border-top"].join(" ");
    }

    if (this.row == 8) {
      this.cellClass = [this.cellClass, "sudoku-cell-outer-border-bottom"].join(" ");
    }


  }

  updateCellValue(value: string) {
    let outputValue = !isNaN(parseFloat(value)) ? Number(value) : -1
    this.cellValueChange.emit([outputValue, this.col]);
  }
}
