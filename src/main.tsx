import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from "react-router";
import './index.css'
import AppRoutes from './routes.tsx'
import { FirebaseAppProvider } from 'reactfire';
import { firebaseConfig } from './config/firebase.ts';
import FirebaseServices from './config/firebase-service.tsx';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <FirebaseAppProvider
      firebaseConfig={firebaseConfig}>
      <BrowserRouter>
        <FirebaseServices>

        <AppRoutes />
        </FirebaseServices>
      </BrowserRouter>
    </FirebaseAppProvider>
  </StrictMode >
)
