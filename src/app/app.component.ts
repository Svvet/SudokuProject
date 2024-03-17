import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { BoardRowComponent } from './board-row/board-row.component';
import { BoardComponent } from './board/board.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, BoardRowComponent, BoardComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'sudoku-project';
  testValues: Array<number> = [1, 2, 3, 4, 5, 6, 7, 8, 9]
}
