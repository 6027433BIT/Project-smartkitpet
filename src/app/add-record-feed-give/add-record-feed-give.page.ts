import { Component, OnInit } from '@angular/core';
import { AlertController, NavController } from '@ionic/angular';

import { AngularFirestore, AngularFirestoreCollection} from '@angular/fire/compat/firestore';
import { Timestamp } from 'rxjs';

@Component({
  selector: 'app-add-record-feed-give',
  templateUrl: './add-record-feed-give.page.html',
  styleUrls: ['./add-record-feed-give.page.scss'],
})
export class AddRecordFeedGivePage implements OnInit {

  constructor(private firestore: AngularFirestore,private nav: NavController,public alertController: AlertController) {
    this.HistoryCollection = firestore.collection<any>('History Feed')
  }  

  HistoryCollection: AngularFirestoreCollection<any>;

  ngOnInit() {
    
  }

  His_Name:String;
  His_Date_Time:Timestamp<any>;
  His_Species:String;
  His_Feed:String;


  async add_his() {
    const id = this.firestore.createId();
    const work = {        
      ID: id,
      Name_Spider: this.His_Name,
      Date_Time: this.His_Date_Time,
      Species: this.His_Species,
      Feed: this.His_Feed
    }
    this.HistoryCollection.doc(id).set(work)
    .then(()=>{
      this.His_Name=""
      this.His_Species=""
      this.His_Feed=""
      this.nav.navigateBack('/add-record-feed');
    })
  }
  
  

}
