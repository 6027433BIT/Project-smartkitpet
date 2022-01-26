import { ActivatedRoute } from '@angular/router';
import { Component } from '@angular/core';
import { AlertController, NavController } from '@ionic/angular';

import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from '@angular/fire/compat/firestore';
import { Timestamp } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  HistoryCollection: AngularFirestoreCollection<any>;

  His_Name: String;
  His_Date_Time: Timestamp<any>;
  His_Species: String;
  His_Feed: String;

  items: any;
  id: string;

  constructor(
    private firestore: AngularFirestore,
    private nav: NavController,
    public alertController: AlertController,
    public route: ActivatedRoute
  ) {
    this.id = this.route.snapshot.paramMap.get('id')
    // this.HistoryCollection = firestore.collection<any>('pet/' + this.id + '/history')
    this.HistoryCollection = firestore.collection<any>('history')
    console.log(this.id)

  }

  async add_his() {
    const id = this.firestore.createId();
    const work = {
      PetId: this.id,
      Date_Time: this.His_Date_Time,
      Feed: this.His_Feed
    }
    // this.HistoryCollection.doc(this.id).collection(id).add(work)
    this.HistoryCollection.add(work)
      .then(() => {
        this.His_Name = ""
        this.His_Feed = ""
      })
  }


}

