import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing-module';
import { App } from './app';
import { TurnList } from './turn-list/turn-list';
import { TurnForm } from './turn-form/turn-form';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    App,
    TurnList,
    TurnForm
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [], // Quitá el provideBrowserGlobalErrorListeners si te tira error, no es vital ahora
  bootstrap: [App]
})
export class AppModule { }
