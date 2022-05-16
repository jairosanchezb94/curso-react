import React from 'react';
import * as ReactDOMClient from 'react-dom/client';
import { MainApp } from './components/09-useContext/MainApp';


const root = ReactDOMClient.createRoot(document.getElementById('root'));

    root.render(
        <React.StrictMode>
            <MainApp />
        </React.StrictMode>
    
); 
