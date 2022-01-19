import { Component, OnInit } from '@angular/core';
import { AlertController, NavController } from '@ionic/angular';

import { AngularFirestore, AngularFirestoreDocument } from '@angular/fire/compat/firestore';
import { ActivatedRoute } from '@angular/router';
import { Observable, Timestamp } from 'rxjs';


@Component({
  selector: 'app-edit-spider',
  templateUrl: './edit-spider.page.html',
  styleUrls: ['./edit-spider.page.scss'],
})
export class EditSpiderPage implements OnInit {

  itemCollection: AngularFirestoreDocument<any>;
  items: Observable<any>;
  ID: string;

  constructor(
    private firestore: AngularFirestore,
    public alertController: AlertController,
    private nav: NavController,
    private route: ActivatedRoute) {
    this.ID = this.route.snapshot.paramMap.get('ID')
    console.log(this.ID)
    this.itemCollection = firestore.doc<any>('History Feed/' + this.ID);
    this.items = this.itemCollection.valueChanges();
  }

  His_Name: string;
  His_Species: string;
  His_Date_Time:Timestamp<any>;
  His_Feed: string;

  ngOnInit() {
    this.items.subscribe((data: any) => {
      this.His_Name = data.Name_Spider;
      this.His_Species = data.Species;
      this.His_Date_Time = data.Date_Time;
      this.His_Feed = data.Feed;

      console.log(data)
    })
  }
  async edit() {
   

    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      header: 'ยืนยันการแก้ไขข้อมูล',
      message: 'กรุณาตรวจสอบข้อมูลให้ถูกต้องก่อนกด <Storng>ตกลง</Storng>',
      buttons: [
        {
          text: 'ยกเลิก',
          role: 'cancel',
          cssClass: 'secondary',
          
          handler: (blah) => {
            console.log('Confirm Cancel: blah');
          }
        }, {
          text: 'ตกลง',
          
          handler: () => {
            console.log('Confirm Okay');

            const item = {
              Name_Spider: this.His_Name,
              Species: this.His_Species,
              Date_Time: this.His_Date_Time,
              Feed : this.His_Feed
        
            }
            this.itemCollection.update(item);
            this.nav.navigateBack('/add-record-feed');
          }
        }
      ]
    });

    await alert.present();

  }




}
