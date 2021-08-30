import { IonContent, IonIcon, IonInput, IonPage, IonButton, IonLoading } from '@ionic/react';
import { useState } from 'react'
import { Link } from 'react-router-dom';
import './Tab3.css';
import { loginUser } from '../firebaseConfig'
import { toast } from '../toast';
import { arrowBack } from 'ionicons/icons';
const Login: React.FC = () => {

    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [busy, setBusy] = useState<boolean>(false)
    async function login() {
        if (!password || !username) {
            toast('Error logging with credentials')
        } else {
            setBusy(true)
            const res = await loginUser(username, password)
            if (!res) {
                toast('Error logging with credentials')
            } else {
                toast('You have Logged In')


            }
            setBusy(false)
            window.location.href = '/tab1'
        }

    }
    return (
        <IonPage>
            <IonLoading message='Please wait' duration={0} isOpen={busy} />
            <IonContent fullscreen className='ion-padding'>
                <div className='p-4 h-full '>
                    <IonIcon icon={arrowBack} />
                    <div className='mt-8 text-gray-600 '>

                        <h1 className='text-2xl font-semibold text-gray-600'>Lets sign you in.</h1>
                        <p
                            className='text-2xl' >Welcome back. </p>
                        <p className='text-2xl'>You've been missed!</p>
                    </div>
                    <div className='mt-16'>
                        <IonInput className='border border-gray-400 rounded-lg my-4' placeholder="Email" onIonChange={(e: any) => setUsername(e.target.value)}></IonInput>
                        <IonInput className='border border-gray-400 rounded-lg my-4' type='password' onIonChange={(e: any) => setPassword(e.target.value)} placeholder="Password"></IonInput>
                    </div>
                    <div className='mt-full'>
                        <p className='text-center text-gray-500 my-4'>Don't have an account? <Link to='/register' className='text-gray-600' >Register</Link></p>
                        <div className='btn-outer'>
                            <IonButton color='gray' className='text-gray-200 w-full rounded-xl  ' onClick={login}>Sign In</IonButton>
                        </div>
                    </div>

                </div>
            </IonContent>
        </IonPage>
    );
};

export default Login;