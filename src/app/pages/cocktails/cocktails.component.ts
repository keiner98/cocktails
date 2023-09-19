import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ContentComponent } from 'src/app/components/content/content.component';
import { FooterComponent } from 'src/app/components/footer/footer.component';
import { HeaderComponent } from 'src/app/components/header/header.component';

@Component({
  selector: 'app-cocktails',
  templateUrl: './cocktails.component.html',
  styleUrls: ['./cocktails.component.scss'],
  standalone: true,
  imports: [CommonModule, HeaderComponent, FooterComponent, ContentComponent],
})
export class CocktailsComponent {}
