import { Component, OnInit } from '@angular/core';

import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/compat/firestore';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-add-spider',
  templateUrl: './add-spider.page.html',
  styleUrls: ['./add-spider.page.scss'],
})
export class AddSpiderPage implements OnInit {

  itemCollection: AngularFirestoreCollection<any>;
  items: Observable<any>;


  constructor(private firestore: AngularFirestore) {
    this.itemCollection = firestore.collection<any>('Spider');
    this.items = this.itemCollection.valueChanges();
  }

  ngOnInit() {
  }

}
