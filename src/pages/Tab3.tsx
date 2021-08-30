import { IonButton, IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import './Tab3.css';
import NewChatbot from '../components/NewChatbot'
import { signOut } from '../firebaseConfig';

const Tab3: React.FC = () => {
  function logOut() {
    signOut();
    window.location.href = '/register'
  }
  return (
    <IonPage>
      <IonContent fullscreen={false}>
      <IonButton onClick={logOut} >SignOut</IonButton>
      </IonContent>
    </IonPage>
  );
};

export default Tab3;
