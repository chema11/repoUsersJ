import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import {DragDropModule} from '@angular/cdk/drag-drop';
//Rutas
import {APP_ROUTING} from './app.routes';
import { AppComponent } from './app.component';
import { HeaderComponent} from './components/header/header.component';
import { BodyComponent } from './components/body/body.component';

import {UsersService} from './services/users.service';
import { SwitchComponent } from './components/switch/switch.component';
import { AvatarComponent } from './components/avatar/avatar.component';
import { FiltersComponent } from './components/filters/filters.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    BodyComponent,
    SwitchComponent,
    AvatarComponent,
    FiltersComponent
    
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    APP_ROUTING,
    FontAwesomeModule,
    DragDropModule
  ],
  providers: [
    UsersService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
