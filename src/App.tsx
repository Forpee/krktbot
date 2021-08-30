import { Redirect, Route } from 'react-router-dom';
import {
  IonApp,
  IonIcon,
  IonLabel,
  IonRouterOutlet,
  IonTabBar,
  IonTabButton,
  IonTabs,
} from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';
import { ellipse, square, triangle } from 'ionicons/icons';
import Tab1 from './pages/Tab1';
import Tab2 from './pages/Tab2';
import Tab3 from './pages/Tab3';
import Login from './pages/Login';
import Register from './pages/Register';
import { useState, useEffect } from 'react'
/* Core CSS required for Ionic components to work properly */
import '@ionic/react/css/core.css';

/* Basic CSS for apps built with Ionic */
import '@ionic/react/css/normalize.css';
import '@ionic/react/css/structure.css';
import '@ionic/react/css/typography.css';

/* Optional CSS utils that can be commented out */
import '@ionic/react/css/padding.css';
import '@ionic/react/css/float-elements.css';
import '@ionic/react/css/text-alignment.css';
import '@ionic/react/css/text-transformation.css';
import '@ionic/react/css/flex-utils.css';
import '@ionic/react/css/display.css';
import { getCurrentUser } from './firebaseConfig'
import './theme/variables.css'



const PrivateRoute: React.FC = () => {
  return (
    <IonReactRouter>
      <IonRouterOutlet>
        <Route path="/register">
          <Register />
        </Route>
        <Route path="/login">
          <Login />
        </Route>
        <Route exact path="/">
          <Redirect to="/tab5" />
        </Route>
        <Route exact path="/tab1">
          <Redirect to="/tab5" />
        </Route>
        <Route exact path="/tab2">
          <Redirect to="/tab5" />
        </Route>
        <Route exact path="/tab3">
          <Redirect to="/tab5" />
        </Route>

      </IonRouterOutlet>
    </IonReactRouter>
  )
}

const PublicRoutes: React.FC = () => {
  return (
    <IonReactRouter>
    
        <IonRouterOutlet>
          <Route exact path="/tab1">
            <Tab1 />
          </Route>
          <Route exact path="/tab2">
            <Tab2 />
          </Route>
          <Route path="/tab3">
            <Tab3 />
          </Route>
          <Route exact path="/">
            <Redirect to="/tab1" />
          </Route>
          <Route exact path="/login">
            <Redirect to="/tab1" />
          </Route>
          <Route exact path="/register">
            <Redirect to="/tab1" />
          </Route>
          <Route exact path="/tab5">
            <Redirect to="/tab1" />
          </Route>
        </IonRouterOutlet>
      
      
    </IonReactRouter>
  )
}
const App: React.FC = () => {
  const [isLoggedin, setisLoggedin] = useState<boolean>(false);
  useEffect(() => {


    getCurrentUser().then((user) => {
      if (user) {

        setisLoggedin(true)

      } else {

        setisLoggedin(false)

      }
    })
    if (isLoggedin === undefined) {
      const loading = document.createElement('ion-loading');

      loading.cssClass = 'my-custom-class';
      loading.message = 'Please wait...';
      loading.duration = 2000;

      document.body.appendChild(loading);
      loading.present();


    }

  }, [isLoggedin, setisLoggedin])



  return (
    <IonApp>
      {isLoggedin === undefined ? <div>Loading</div> : ''}
      {isLoggedin ? <PublicRoutes /> : <PrivateRoute />}
    </IonApp>
  )

}

export default App;
