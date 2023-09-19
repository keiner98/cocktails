import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { CardDrinkMomentComponent } from '../card-drink-moment/card-drink-moment.component';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.scss'],
  standalone: true,
  imports: [CommonModule, CardDrinkMomentComponent],
})
export class ContentComponent {}
