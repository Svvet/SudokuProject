import { Component, Input } from '@angular/core';
import { CellComponent } from '../cell/cell.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'board-row',
  standalone: true,
  imports: [CellComponent, CommonModule],
  templateUrl: './board-row.component.html',
  styleUrl: './board-row.component.scss'
})
export class BoardRowComponent {
  @Input() row: number = -1;
  @Input() values?: Array<number>;
}
