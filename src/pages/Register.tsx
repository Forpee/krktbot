import { IonContent, IonIcon, IonInput, IonPage, IonTitle, IonToolbar, IonButton, IonLoading } from '@ionic/react';
import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import { toast } from '../toast';
import { registerUser } from '../firebaseConfig'
import { arrowBack } from 'ionicons/icons';
import './Tab3.css';

const Register: React.FC = () => {
    const [busy, setBusy] = useState<boolean>(false)
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [cpassword, setCPassword] = useState('')

    async function register() {
        setBusy(true)
        if (password !== cpassword) {
            setBusy(false)
            return toast("Passwords do not match")
        }
        if (username.trim() === '' || password.trim() === '' || cpassword.trim() === '') {
            setBusy(false)
            return toast('Please fill in all required fields')

        }


        const res = await registerUser(username, password)
        if (res) {
            toast('Registration succesful!')
        }
        setBusy(false)
        window.location.href = '/tab1'
    }
    return (
        <IonPage>

            <IonLoading message='Please wait' duration={0} isOpen={busy} />
            <IonContent fullscreen className=' ion-padding register'>
                <div className='p-4'>
                    <IonIcon icon={arrowBack} />
                    <div className='mt-8 text-gray-600 '>

                        <h1 className='text-2xl font-semibold text-gray-600'>Get Started.</h1>
                        <p
                            className='text-2xl' >Create your account. </p>

                    </div>

                    <div className=' mt-16'>
                        <IonInput type='email' className='border  border-gray-400 rounded-lg my-4' placeholder="Email" onIonChange={(e: any) => setUsername(e.target.value)}></IonInput>
                        <IonInput type='password' className='border border-gray-400 rounded-lg my-4' onIonChange={(e: any) => setPassword(e.target.value)} placeholder="Password"></IonInput>
                        <IonInput type='password' className='border border-gray-400 rounded-lg my-4' onIonChange={(e: any) => setCPassword(e.target.value)} placeholder="Confirm Password"></IonInput>
                    </div>  <div className='mt-full'>
                        <p className='text-center text-gray-500 my-4 '>Already have an account? <Link className='text-gray-700 ' to='/login'>Login</Link></p>
                        <div className='btn-outer'>
                            <IonButton color='gray' className='text-gray-200 w-full rounded-xl  ' onClick={register}>Register</IonButton>
                        </div>
                    </div>


                </div>
            </IonContent>
        </IonPage>
    );
};

export default Register;