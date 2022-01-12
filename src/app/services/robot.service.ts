import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { map } from 'rxjs/operators';
import { Robot } from '../models/robot.model';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RobotService {
  private dbPath = "/robots";
  robotRef: AngularFirestoreCollection<Robot>;
  private films?: any;
  robotSubject = new Subject<any[]>();

  rules: any = {

    "name" : {
      "rules" : [
        {"name" : "required"},
        {"name": "maxLength", "value" : 100}
      ]
    },

    "price" : {
      "rules" : [
        {"name" : "required"},
        {"name": "numberOnly"}
      ] 
    },

    "creator" : {
      "rules" : [
        {"name" : "required"},
        {"name": "letterOnly"},
        {"name": "maxLength", "value" : 50}
      ] 
    },

    "constructorName" : {
      "rules" : [
        {"name" : "required"},
        {"name": "maxLength", "value" : 100}
      ] 
    },

    "releaseDate" : {
      "rules" : [
        {"name" : "required"},
        {"name": "isDate"},
      ] 
    },

    "serviceType" : {
      "rules" : [
        {"name": "maxLength", "value" : 50}
      ] 
    }
  }

  constructor(
    private db : AngularFirestore
  ) { 
    this.robotRef = db.collection(this.dbPath);
  }

  emitRobotSubject(){
    this.robotSubject.next(this.films.slice());
  }

  getAllRobots(): any {
    return this.robotRef.snapshotChanges().pipe(
      map((changes:any) => {
        return changes.map((doc:any) => {
            return ({id: doc.payload.doc.id , ...doc.payload.doc.data()})
        })
      })
    );
  }

  saveNewRobot(robot: Robot): any {
    return new Observable(obs => {
      this.robotRef.add({...robot}).then(()=> {
        obs.next();
      })
    })
  }

  delete(id: any){
    this.db.doc(`robots/${id}`).delete();
  }

  get(id: any): any{
    return new Observable(obs => {
      this.robotRef.doc(id).get().subscribe(res => {
        obs.next({id: res.id, ...res.data()});
      })
    })
  }

  update(robot: Robot) {
    return new Observable(obs => {
      this.robotRef.doc(robot.id).update(robot);
      obs.next();
    });
  }
}
