import { Component } from '@angular/core';
import { BoardComponent } from '../board/board.component';

@Component({
  selector: 'home',
  standalone: true,
  imports: [BoardComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

}
