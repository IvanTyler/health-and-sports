import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FloorMainComponent } from './floor/floor-main/floor-main.component';
import { FloorGoalComponent } from './floor/floor-main/sub-components/floor-goal/floor-goal.component';
import { FloorProfileSelectedComponent } from './floor/floor-main/sub-components/floor-profile-selected/floor-profile-selected.component';

@NgModule({
  declarations: [
    AppComponent,
    FloorMainComponent,
    FloorGoalComponent,
    FloorProfileSelectedComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
