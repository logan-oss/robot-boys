import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { RobotService } from '../services/robot.service';

@Component({
  selector: 'app-modif-robot',
  templateUrl: './modif-robot.component.html',
  styleUrls: ['./modif-robot.component.scss']
})
export class ModifRobotComponent implements OnInit {

  robot: any = null;
  change:boolean = false;
  errors: any = [];
  

  constructor(
    private Robot : RobotService,
    private route: ActivatedRoute,
  ) { }

  ngOnInit(): void {
    const id = this.route.snapshot.params['id'];
    this.Robot.get(id).subscribe((value: any) => {
      this.robot = value;
      this.setImage();
      this.setDOMDate();
    });
    
  }

  setDOMDate() : void{
    let date: Date;
    if(this.robot.releaseDate.seconds)
      // quand la date est importée de la base, seul les secondes figurent
      date = new Date(this.robot.releaseDate.seconds * 1000); 
    else
      // quand la date est modifiée , elle est déjà formattée
      date = this.robot.releaseDate;

    let year = date.getFullYear();
    let month = (1 + date.getMonth()).toString().padStart(2, '0');
    let day = date.getDate().toString().padStart(2, '0');
    this.robot.releaseDate = year +'-'+month+'-'+day;
  }

  modif() {
    this.robot.releaseDate = new Date(this.robot.releaseDate);
    this.Robot.update(this.robot).subscribe(() => {
      this.change = true;
      console.log(this.robot.releaseDate);
      setTimeout(() => {
        this.change = false;
      }, 3000);
    });
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

  onlyLetter(){
    let reg_name_lastname = /^[a-zA-Z\s]*$/;
  
    if (!reg_name_lastname.test(this.robot.creator)) { 
      this.errors.creator = "Seul les lettres sont admises";
      
    }else{
      this.errors.creator = undefined;
    }

    this.setErrors();
  }

  setErrors(){
    if (this.errors.creator) {
      console.log(this.errors.creator);
      this.getDOMById("txt_creator")?.classList.add("is-invalid");
      this.getDOMById("txt_creator")?.setAttribute("title",this.errors.creator);

    } else{
      this.getDOMById("txt_creator")?.classList.remove("is-invalid");
    } 
  }

  getDOMById(id : string) : any{
    return document.getElementById(id);
  }


}
