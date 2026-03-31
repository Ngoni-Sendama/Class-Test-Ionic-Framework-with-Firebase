import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonIcon, IonBadge, IonButton } from '@ionic/angular/standalone';
import { addIcons } from 'ionicons';
import { notificationsOutline } from 'ionicons/icons';

import { NotificationService } from '../services/notification-service';


@Component({
  selector: 'app-notifications',
  templateUrl: './notifications.page.html',
  styleUrls: ['./notifications.page.scss'],
  standalone: true,
  imports: [IonButton, IonBadge, IonIcon, IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule]
})
export class NotificationsPage implements OnInit {
  title = '';
  message = '';

  notificationCount = 0;
  isSubmitting = false;

  constructor(private notificationService: NotificationService) {
    addIcons({ notificationsOutline });
  }

  ngOnInit() {
  }

  async addNotification() {
    const title = this.title.trim();
    const message = this.message.trim();

    if (!title || !message || this.isSubmitting) {
      return;
    }

    this.isSubmitting = true;

    try {
      await this.notificationService.addNotification(title, message);
      this.title = '';
      this.message = '';
      alert('Notification added successfully');
    } catch (error) {
      console.error('Failed to save notification', error);
    } finally {
      this.isSubmitting = false;
    }
  }

}
