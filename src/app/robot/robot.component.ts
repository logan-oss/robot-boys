import { Component, Input, OnInit } from '@angular/core';
import { RobotService } from '../services/robot.service';

@Component({
  selector: 'app-robot',
  templateUrl: './robot.component.html',
  styleUrls: ['./robot.component.scss']
})
export class RobotComponent implements OnInit {
  @Input() robotTitre?: string;
  @Input() robotAffiche?: string;
  @Input() constructorName?: string;
  @Input() creator?: string;
  @Input() robotDescription?: string;
  @Input() robotPrice?: string;
  @Input() serviceType?: string;
  @Input() robotReleaseDate?: any;
  @Input() id?: string ;

  constructor(
    private Robot: RobotService
  ) { }



  ngOnInit(): void {
  }

  suppr():void {
    if(confirm("Voulez-vous vraiment supprimer ce robot ?"))
      this.Robot.delete(this.id);
  }

}
