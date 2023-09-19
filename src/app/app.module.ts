import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CocktailsComponent } from './pages/cocktails/cocktails.component';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, AppRoutingModule, CocktailsComponent],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
