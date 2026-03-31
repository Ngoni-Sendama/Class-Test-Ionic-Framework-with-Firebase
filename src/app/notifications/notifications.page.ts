import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonIcon, IonBadge, IonButton } from '@ionic/angular/standalone';
import { addIcons } from 'ionicons';
import { notificationsCircleOutline, notificationsOutline } from 'ionicons/icons';


@Component({
  selector: 'app-notifications',
  templateUrl: './notifications.page.html',
  styleUrls: ['./notifications.page.scss'],
  standalone: true,
  imports: [IonButton, IonBadge, IonIcon, IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule]
})
export class NotificationsPage implements OnInit {

  title = "";
  message = "";

  notificationCount = 0;


  clear() {
    this.notificationCount = 0;
  }

  addNotification() {
    console.log('Notification added');
  }

  constructor() {
    addIcons({ notificationsOutline });
  }

  ngOnInit() {
  }

}
