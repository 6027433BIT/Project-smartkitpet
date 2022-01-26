import { Component, OnInit } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/compat/firestore';
import { Observable } from 'rxjs';


@Component({
  selector: 'app-pet',
  templateUrl: './pet.page.html',
  styleUrls: ['./pet.page.scss'],
})
export class PetPage implements OnInit {

  constructor(private firestore: AngularFirestore,) {
    this.itemCollection = firestore.collection<any>('pet');
    this.items = this.itemCollection.valueChanges();
  }


  itemCollection: AngularFirestoreCollection<any>;
  items: any;

  pet_name: string;

  add() {
    const id = this.firestore.createId();
    const work = {
      id: id,
      name: this.pet_name
    }
    this.itemCollection.doc(id).set(work)
      .then(() => {
        this.pet_name = ""
      })
  }

  ngOnInit() {
  }

}
