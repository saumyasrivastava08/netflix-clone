import Firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';
 import Config from './config';


 const config = {
  apiKey: Config.apiKey,
  authDomain: Config.authDomain,
  projectId: Config.projectId,
  storageBucket: Config.storageBucket,
  messagingSenderId: Config.messagingSenderId,
  appId: Config.appId,
  measurementId: Config.measurementId

}
const firebase = Firebase.initializeApp(config);

export  default firebase ;