import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { BrowserModule } from '@angular/platform-browser';
import {FormsModule} from '@angular/forms';
import { GameGridComponent } from './Components/observable-practice/game-grid/game-grid.component';
import {HttpClientModule} from '@angular/common/http';
import { NgModule } from '@angular/core';
import { ObservablePracticeComponent } from './Components/observable-practice/observable-practice.component';

@NgModule({
  declarations: [
    AppComponent,
    ObservablePracticeComponent,
    GameGridComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
