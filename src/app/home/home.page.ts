import { Component } from '@angular/core';
import { IonHeader, IonToolbar, IonTitle, IonContent, IonIcon, IonBadge, IonButton } from '@ionic/angular/standalone';

import { addIcons } from 'ionicons';
import { notificationsCircleOutline, notificationsOutline } from 'ionicons/icons';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  imports: [IonIcon, IonHeader, IonToolbar, IonTitle, IonContent, IonBadge, IonButton],
})
export class HomePage {

  notificationCount = 0;

  increment() {
    this.notificationCount++;
  }

  clear() {
    this.notificationCount = 0;
  }

  constructor() {
    addIcons({ notificationsOutline });
  }
}
