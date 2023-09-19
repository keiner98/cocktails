import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-card-drink-moment',
  templateUrl: './card-drink-moment.component.html',
  styleUrls: ['./card-drink-moment.component.scss'],
  standalone: true,
  imports: [CommonModule],
})
export class CardDrinkMomentComponent {
  @Input() title: string = '';
  @Input() img: string = '';
  @Input() content: string = '';
}
