import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input'
import { HttpService } from '@zonky/zonky-http';
import { AppComponent } from './app.component';
import { RatingFormComponent } from './components';
import { ZonkyService } from './services';

@NgModule({
  declarations: [AppComponent, RatingFormComponent],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatInputModule
  ],
  providers: [HttpService, ZonkyService],
  bootstrap: [AppComponent]
})
export class AppModule { }
