import React from 'react';
import { render } from 'react-dom';
import { FirebaseContext } from './Firebase/firebaseContext';
import 'normalize.css';
import  firebase  from './Firebase/firebase';
import { GlobalStyles } from './global-styles';
import  App  from './App';


render(
  <React.StrictMode>
     <FirebaseContext.Provider value={{ firebase }}>
      <GlobalStyles />
      <App />
   </FirebaseContext.Provider>
  </React.StrictMode>,
  document.getElementById('root')
); 