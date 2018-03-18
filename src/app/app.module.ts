import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { HeroListBasicComponent } from './hero-list-basic.component';
import { HeroEnterLeaveComponent } from './hero-list-enter-leave.component';
import { HeroListAutoComponent } from './hero-list-auto.component';
import { HeroListTimingsComponent } from './hero-list-timings.component';
import { HeroListMultistepComponent } from './hero-list-multistep.component';
import { HeroListGroupsComponent } from './hero-list-groups.component';

import { HeroService } from './hero.service';

@NgModule({
  declarations: [
    AppComponent,
    HeroListBasicComponent,
    HeroEnterLeaveComponent,
    HeroListAutoComponent,
    HeroListTimingsComponent,
    HeroListMultistepComponent,
    HeroListGroupsComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule
  ],
  providers: [
    HeroService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
