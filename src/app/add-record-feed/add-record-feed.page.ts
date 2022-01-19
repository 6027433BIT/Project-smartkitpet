import { Component, OnInit } from '@angular/core';

import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/compat/firestore';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-add-record-feed',
  templateUrl: './add-record-feed.page.html',
  styleUrls: ['./add-record-feed.page.scss'],
})
export class AddRecordFeedPage implements OnInit {

  itemCollection: AngularFirestoreCollection<any>;
  items: Observable<any>;


  constructor(private firestore: AngularFirestore) {
    this.itemCollection = firestore.collection<any>('History Feed', ref => ref.orderBy('Date_Time','desc'));
    this.items = this.itemCollection.valueChanges();
  }

  ngOnInit() {
  }

}
