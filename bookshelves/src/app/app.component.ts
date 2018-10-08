import { Component } from '@angular/core';
import * as firebase from "firebase";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'bookshelves';

  constructor() {
    var config = {
      apiKey: "AIzaSyAdiQRk1cXhRiao-FxL2092cuyfwYFtii4",
      authDomain: "bookshelves-30dfe.firebaseapp.com",
      databaseURL: "https://bookshelves-30dfe.firebaseio.com",
      projectId: "bookshelves-30dfe",
      storageBucket: "bookshelves-30dfe.appspot.com",
      messagingSenderId: "169187650576"
    };
    firebase.initializeApp(config);
  }

}
