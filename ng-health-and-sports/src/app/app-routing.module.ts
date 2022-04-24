import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FloorMainComponent } from './floor/floor-main/floor-main.component';
import { FloorGoalComponent } from './floor/floor-main/sub-components/floor-goal/floor-goal.component';

const routes: Routes = [
  {
    path: '',
    component: FloorMainComponent,
  },
  {
    path: 'floor-goal',
    component: FloorGoalComponent, 
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
