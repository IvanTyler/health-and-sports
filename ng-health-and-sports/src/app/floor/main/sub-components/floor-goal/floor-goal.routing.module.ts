import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FloorGoalComponent } from './floor-goal.component';

const routes: Routes = [
    {
        path: '',
        component: FloorGoalComponent,
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class FloorGoalRoutingComponent {
}
