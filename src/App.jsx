import * as React from 'react';
import NavBar from './components/navBar';

import { AuthProvider } from './context/AuthContext';
import { PrimeReactProvider } from "primereact/api";
import "primereact/resources/themes/lara-light-indigo/theme.css";

export default function App() {
  return (
    <AuthProvider>
    <PrimeReactProvider>
        <NavBar />
    </PrimeReactProvider>
    </AuthProvider>
  );
}