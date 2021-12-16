import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { map } from 'rxjs/operators';
import { Robot } from '../models/robot.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RobotService {
  private dbPath = "/robots";
  robotRef: AngularFirestoreCollection<Robot>;
  private films?: any;

  constructor(
    private db : AngularFirestore
  ) { 
    this.robotRef = db.collection(this.dbPath);
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
}
