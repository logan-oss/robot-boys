import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ListRobotComponent } from './list-robot/list-robot.component';
import { NewRobotComponent } from './new-robot/new-robot.component';

const routes: Routes = [
  {
    path: "",
    component: HomeComponent
  },
  {
    path: "robots",
    component: ListRobotComponent
  },
  {
    path: "robots/new",
    component: NewRobotComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
