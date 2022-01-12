import { NgModule } from '@angular/core';
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { BrowserModule } from '@angular/platform-browser';
import { environment } from 'src/environments/environment';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ListRobotComponent } from './list-robot/list-robot.component';
import { NewRobotComponent } from './new-robot/new-robot.component';
import { RobotService } from './services/robot.service';
import { RobotComponent } from './robot/robot.component';
import { FormsModule } from '@angular/forms';
import { ModifRobotComponent } from './modif-robot/modif-robot.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ListRobotComponent,
    NewRobotComponent,
    RobotComponent,
    ModifRobotComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule
  ],
  providers: [
    RobotService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
