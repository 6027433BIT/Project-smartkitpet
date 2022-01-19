import { Component, OnInit } from '@angular/core';

import { AngularFirestore, AngularFirestoreCollection} from '@angular/fire/compat/firestore';


@Component({
  selector: 'app-add-input',
  templateUrl: './add-input.page.html',
  styleUrls: ['./add-input.page.scss'],
})
export class AddInputPage implements OnInit {

  constructor(private firestore: AngularFirestore) {
    this.SpiderCollection = firestore.collection<any>('Spider')
  }  

  SpiderCollection: AngularFirestoreCollection<any>;

  ngOnInit() {
    
  }


    Spi_Name_Spider:String;
    Spi_Species:String;

    add_input() {
      const id = this.firestore.createId();
      const work = {        
        ID: id,
        Name_Spider: this.Spi_Name_Spider,
        Species: this.Spi_Species
      }
      this.SpiderCollection.doc(id).set(work)
      .then(()=>{
        this.Spi_Name_Spider=""
        this.Spi_Species=""
      })
    }
  
}
