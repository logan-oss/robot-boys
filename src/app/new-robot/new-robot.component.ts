import { Component, OnInit } from '@angular/core';
import { Robot } from '../models/robot.model';
import { RobotService } from '../services/robot.service';

@Component({
  selector: 'app-new-robot',
  templateUrl: './new-robot.component.html',
  styleUrls: ['./new-robot.component.scss']
})
export class NewRobotComponent implements OnInit {

  public robot!: Robot;

  constructor(
    private Robot: RobotService
  ) { }

  ngOnInit(): void {
    this.robot = new Robot();
  }

  setImage(){
    if ( (this.imageExists(this.robot.image)) && (this.robot.image !== "") ){
      document.getElementById("imageView")?.setAttribute("src", this.robot.image);
    }
    else{
      document.getElementById("imageView")?.setAttribute("src", "https://www.adenine-rh.com/wp-content/themes/consultix/images/no-image-found-360x250.png");
    }
  }

  imageExists(image_url : string){

    var http = new XMLHttpRequest();

    http.open('HEAD', image_url, false);
    http.send();

    return http.status != 404;

  }

  add(){
    this.robot.releaseDate = new Date(this.robot.releaseDate);
    this.Robot.saveNewRobot(this.robot).subscribe(() => {
      this.robot = new Robot();
    })
  }

}
