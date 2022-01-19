import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';

import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/compat/firestore';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-history-feed',
  templateUrl: './history-feed.page.html',
  styleUrls: ['./history-feed.page.scss'],
})
export class HistoryFeedPage implements OnInit {
  
  itemCollection: AngularFirestoreCollection<any>;
  items: Observable<any>;

  constructor(private firestore: AngularFirestore,public alertController: AlertController) {
    this.itemCollection = firestore.collection<any>('History Feed', ref => ref.orderBy('Date_Time','desc'));
    this.items = this.itemCollection.valueChanges();
  }

  async remove(id:string){
    

    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      header: 'ยืนยันการลบข้อมูล',
      message: 'กรุณาตรวจสอบก่อนที่จะลบข้อมูล',
      buttons: [
        {
          text: 'ยกเลิก',
          role: 'cancel',
          cssClass: 'secondary',
          handler: (blah) => {
            console.log('Confirm Cancel: blah');
          }
        }, {
          text: 'ยืนยัน',
          handler: () => {
            console.log('Confirm Okay');
            this.itemCollection.doc(id).delete()
            
          }
        }
      ]
    });

    await alert.present();

  }

  ngOnInit() {
  }

}
