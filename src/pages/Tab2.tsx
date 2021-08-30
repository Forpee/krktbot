import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, useIonViewWillEnter, IonIcon } from '@ionic/react';
import { chevronBack, personCircle } from 'ionicons/icons';
import { Link } from 'react-router-dom';
import NewChatbot from '../components/NewChatbot'
import './Tab3.css';


const Tab2: React.FC = () => {
  useIonViewWillEnter(() => {
    const tabsEl = document.querySelector('ion-tab-bar');
    if (tabsEl) {
      tabsEl.hidden = true;
    }

  })

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar >

        <div className='flex gap-4'>
        <Link to="/Tab1">
            <div className='bg-gray-200 w-7 text-center ml-4 flex rounded-lg  text-gray-500 h-7'>
              <IonIcon icon={chevronBack} className='m-auto' />
            </div>
          </Link>

          <div className='w-7 h-7 rounded-full bg-gray-200 relative ml-8 flex'>
          <IonIcon icon={personCircle} className='m-auto w-full h-full' />

            <div className='w-1 h-1 rounded-full bg-green-500 absolute right-0 top-0'>

            </div>
          </div>
          <div className=''>
            <div className='text-sm font-semibold'>
              Krtk Coach
            </div>
            <div className='text-xs text-green-500'>Online now</div>
          </div>

        </div>

        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <NewChatbot />
      </IonContent>
    </IonPage>
  );
};

export default Tab2;
