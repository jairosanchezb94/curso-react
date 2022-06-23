import React from 'react';
import * as ReactDOMClient from 'react-dom/client';
import { TodoApp } from './components/08-useReducer/TodoApp';


const root = ReactDOMClient.createRoot(document.getElementById('root'));

    root.render(
        <React.StrictMode>
            <TodoApp />
        </React.StrictMode>
    
); 
