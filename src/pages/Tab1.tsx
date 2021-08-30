import { IonButton, IonContent, IonHeader, IonPage, IonTitle, IonToolbar, useIonViewWillEnter, } from '@ionic/react';
import React, { useEffect } from 'react';
import Intro from '../components/Intro'
import './Tab3.css';
import { Capacitor } from "@capacitor/core";
import { App } from '@capacitor/app';
const Tab1: React.FC = () => {
  useIonViewWillEnter(() => {
    const tabsEl = document.querySelector('ion-tab-bar');
    if (tabsEl) {
      tabsEl.hidden = false;
    }

  })
  useEffect(() => {
    if (Capacitor) {
      App.addListener("backButton", (e) => {
      
          // Show A Confirm Box For User to exit app or not
          let ans = window.confirm("Are you sure");
          if (ans) {
            App.exitApp();
          } 
          
      });
    }
  }, []);

  return (
    <IonPage>
     
      <IonContent fullscreen className="ion-padding">
        <IonHeader collapse="condense">
          <IonToolbar >
            <IonTitle size="large">Tab 1</IonTitle>
          </IonToolbar>
        </IonHeader>

        <Intro />
      </IonContent>

    </IonPage>
  );
};

export default Tab1;
