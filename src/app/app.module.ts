import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { KukoldComponent } from './kukold/kukold.component';
import { CurrentPartyComponent } from './current-party/current-party.component';
import { AddKukoldComponent } from './add-kukold/add-kukold.component';

@NgModule({
  declarations: [
    AppComponent,
    KukoldComponent,
    CurrentPartyComponent,
    AddKukoldComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule, ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
