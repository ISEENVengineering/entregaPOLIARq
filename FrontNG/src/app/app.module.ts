import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './Components/header/header.component';
import { ImagesComponent } from './Components/images/images.component';
import { MainComponent } from './Components/main/main.component';
import { RegistrComponent } from './Components/registr/registr.component';
import { FooterComponent } from './Components/footer/footer.component';
import { ProjectComponent } from './Components/project/project.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ImagesComponent,
    MainComponent,
    RegistrComponent,
    FooterComponent,
    ProjectComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
