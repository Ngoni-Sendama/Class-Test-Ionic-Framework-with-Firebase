import { Injectable } from '@angular/core';
import { initializeApp, getApps } from 'firebase/app';
import { addDoc, collection, getFirestore, serverTimestamp } from 'firebase/firestore';

import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class NotificationService {
  notificationsCollection;

  constructor() {
    if (getApps().length === 0) {
      initializeApp(environment.firebaseConfig);
    }

    const firestore = getFirestore();
    this.notificationsCollection = collection(firestore, 'notifications');
  }

  async addNotification(title: string, message: string) {
    return addDoc(this.notificationsCollection, {
      title: title,
      message: message,
      created_at: serverTimestamp(),
    });
  }
}
