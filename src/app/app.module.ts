import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { RoutingModule } from './modules/routing/routing.module';
import { MaterialModule } from './modules/material/material.module';
import { TabsComponent } from './components/home/tabs/tabs.component';
import { MainComponent } from './components/main/main.component';
import { NavComponent } from './components/home/nav/nav.component';
import { FooterComponent } from './components/home/footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    TabsComponent,
    MainComponent,
    NavComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    RoutingModule,
    MaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
