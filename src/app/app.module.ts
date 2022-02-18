import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { Toolbar } from './toolbar/toolbar.componet';
import { MaterialModule } from '../assets/material.module';

import { InputOverviewExample } from './imput/input.component';
import { ButtonModule } from 'primeng/button';
import { InputMaskModule } from 'primeng/inputmask';
import { CalendarModule } from 'primeng/calendar';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { RadioButtonModule } from 'primeng/radiobutton';
import { SelectButtonModule } from 'primeng/selectbutton';
import { CheckboxModule } from 'primeng/checkbox';
import { DropdownModule } from 'primeng/dropdown';
import { MenubarModule } from 'primeng/menubar';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeroesModule } from './heroes/heroes.module';
import { ContadorModule } from './contador/contador.modules';

@NgModule({
  declarations: [AppComponent, InputOverviewExample, Toolbar],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ButtonModule,
    InputMaskModule,
    CalendarModule,
    InputTextareaModule,
    RadioButtonModule,
    SelectButtonModule,
    CheckboxModule,
    DropdownModule,
    MenubarModule,
    BrowserAnimationsModule,
    MaterialModule,
    HeroesModule,
    ContadorModule,
  ],
  providers: [],
  bootstrap: [AppComponent, Toolbar],
})
export class AppModule {}
