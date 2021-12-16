import { Component, OnInit } from '@angular/core';
import { RobotService } from '../services/robot.service';

@Component({
  selector: 'app-list-robot',
  templateUrl: './list-robot.component.html',
  styleUrls: ['./list-robot.component.scss']
})
export class ListRobotComponent implements OnInit {
  robots!:any;
  constructor(
    private Robot : RobotService
  ) { }

  ngOnInit(): void {
    this.robots = this.Robot.getAllRobots().subscribe((data: any) => {
      this.robots = data;
      console.log(data);
      
    });
  }

}
