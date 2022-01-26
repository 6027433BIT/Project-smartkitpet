import { Component, OnInit } from '@angular/core';

import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/compat/firestore';
import { ActivatedRoute } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';


@Component({
  selector: 'app-add-record-feed',
  templateUrl: './add-record-feed.page.html',
  styleUrls: ['./add-record-feed.page.scss'],
})
export class AddRecordFeedPage implements OnInit {

  HistoryCollection: AngularFirestoreCollection<any>;
  petCollection: AngularFirestoreCollection<any>;
  items: Observable<any>;

  pet: Observable<any>;

  id: string;
  hisId: string


  constructor(private firestore: AngularFirestore, public alertController: AlertController, public route: ActivatedRoute) {
    this.id = this.route.snapshot.paramMap.get('id')

    this.petCollection = firestore.collection<any>('pet')
    this.pet = this.petCollection.doc(this.id).valueChanges();

    this.pet.subscribe((res: any) => console.log(res))

    this.HistoryCollection = firestore.collection<any>('history', ref => ref.where('PetId', '==', this.id))
    // this.HistoryCollection = this.petCollection<any>('history')
    this.items = this.HistoryCollection.snapshotChanges()
      .pipe(map((res: any) => res.map((r) => {
        const data = r.payload.doc.data();
        const id = r.payload.doc.id;
        const result = { id, ...data };
        return result;
      })));
  }

  ngOnInit() {
  } 

}
