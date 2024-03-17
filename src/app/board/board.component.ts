import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BoardRowComponent } from '../board-row/board-row.component';

@Component({
  selector: 'board',
  standalone: true,
  imports: [CommonModule, BoardRowComponent],
  templateUrl: './board.component.html',
  styleUrl: './board.component.scss'
})
export class BoardComponent {
  @Input() values?: number[][] = new Array(9).fill([1, 2, 3, 4, 5, 6, 7, 8, 9]);
}
