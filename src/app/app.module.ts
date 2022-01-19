import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

import { AngularFireModule } from '@angular/fire/compat';
import { AngularFirestoreModule } from '@angular/fire/compat/firestore';


@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [
    BrowserModule,
    IonicModule.forRoot(),
    AppRoutingModule,
    AngularFireModule.initializeApp({
      apiKey: "AIzaSyB4tBy3iOKGxoblH-_0PpOB5YbZrcH5hbs",
      authDomain: "smart-kit-pet.firebaseapp.com",
      projectId: "smart-kit-pet",
      storageBucket: "smart-kit-pet.appspot.com",
      messagingSenderId: "685510370198",
      appId: "1:685510370198:web:bc2db6b379a4610383f3b7",
      measurementId: "G-FB3RXXE6P8"
    }),
    AngularFirestoreModule,

  ],
  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy }],
  bootstrap: [AppComponent],
})
export class AppModule { }
