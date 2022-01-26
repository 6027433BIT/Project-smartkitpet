import { Component, OnInit } from '@angular/core';
import { AlertController, NavController } from '@ionic/angular';

import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/compat/firestore';
import { Timestamp } from 'rxjs';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-add-record-feed-give',
  templateUrl: './add-record-feed-give.page.html',
  styleUrls: ['./add-record-feed-give.page.scss'],
})
export class AddRecordFeedGivePage implements OnInit {

  HistoryCollection: AngularFirestoreCollection<any>;

  His_Date_Time: Date;
  His_Feed: String;

  items: any;
  petid: string;
  id:string;

  constructor(
    private firestore: AngularFirestore,
    private nav: NavController,
    public alertController: AlertController,
    public route: ActivatedRoute
  ) {
    this.petid = this.route.snapshot.paramMap.get('petid')
    this.id = this.route.snapshot.paramMap.get('id')
    // this.HistoryCollection = firestore.collection<any>('pet/' + this.id + '/history')
    this.HistoryCollection = firestore.collection<any>('history')
    console.log(this.petid)

  }


  ngOnInit() {
    this.HistoryCollection.doc(this.id).valueChanges().subscribe((res: any) => {
      this.His_Date_Time = res.Date_Time;
      console.log(res)
      this.His_Feed =  res.Feed;
    })
  }


  async add_his() {
    const work = {
      PetId: this.petid,
      Date_Time: this.His_Date_Time,
      Feed: this.His_Feed
    }
    this.HistoryCollection.doc(this.id).set(work)
      .then(() => {
        this.nav.navigateBack('home/'+this.petid+'/'+'manage');
      })
  }



}
