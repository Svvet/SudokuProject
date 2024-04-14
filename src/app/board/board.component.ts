import { Component, Input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BoardRowComponent } from '../board-row/board-row.component';

@Component({
  selector: 'board',
  standalone: true,
  imports: [CommonModule, BoardRowComponent],
  templateUrl: './board.component.html',
  styleUrl: './board.component.scss'
})
export class BoardComponent implements OnInit {
  @Input() initialValues: Array<Array<number>> = [
    [6, 3, 9, 5, 7, 4, 1, 8, 2],
    [5, 4, 1, 8, 2, 9, 3, 7, 6],
    [7, 8, 2, 6, 1, 3, 9, 5, 4],
    [1, 9, 8, 4, 6, 7, 5, 2, 3],
    [3, 6, 5, 9, 8, 2, 4, 1, 7],
    [4, 2, 7, 1, 3, 5, 8, 6, 9],
    [9, 5, 6, 7, 4, 8, 2, 3, 1],
    [8, 1, 3, 2, 9, 6, 7, 4, 5],
    [2, 7, 4, 3, 5, 1, 6, 9, 8]
  ];

  boardValues: Array<Array<number>> = this.initialValues.slice();

  ngOnInit(): void {
    console.log(this.isSudokuValid())
    this.boardValues = this.initialValues.slice();
  }


  boardValuesChange(event: Array<any>){
    this.boardValues[event[1]] = event[0];
    console.log("boardValuesChange: ")
    console.log(this.boardValues)
    console.log(this.isSudokuValid());
  }

  private isSudokuValid(): boolean {
    for (let row of this.boardValues) {
      if (!this.isRowValid(row)) {
        return false;
      }
    }

    for (let i = 0; i < 9; i++) {
      if (!this.isColumnValid(i)) {
        return false;
      }
    }

    for (let i = 0; i < 3; i++) {
      for (let j = 0; j < 3; j++) {
        if (!this.isSquareValid(i, j)) {
          return false;
        }
      }
    }

    return true;
  }

  private isRowValid(row: Array<number>): boolean {
    let numbers: Array<number> = new Array();

    for (let value of row) {
      if (value < 1 || value > 9) 
        return false
      if (numbers.includes(value)) {
        return false;
      } else {
        numbers.push(value);
      }
    }
    return true;
  }

  private isColumnValid(columnIndex: number): boolean {
    let numbers: Array<number> = new Array();

    for (let i = 0; i < 9; i++) {
      let value = this.boardValues[i][columnIndex];
      if (value < 1 || value > 9) 
        return false
      if (numbers.includes(value)) {
        return false;
      } else {
        numbers.push(value);
      }
    }
    return true;
  }

  private isSquareValid(row: number, col: number): boolean {
    let numbers: Array<number> = new Array();

    let xStart = row * 3;
    let yStart = col * 3;
    for (let i = xStart; i < xStart + 3; i++) {
      for (let j = yStart; j < yStart + 3; j++) {
        let value = this.boardValues[i][j];
        if (value < 1 || value > 9) 
          return false
        if (numbers.includes(value)) {
          return false;
        } else {
          numbers.push(value);
        }
      }
    }
    return true;
  }


}
