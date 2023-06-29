import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  RouterProvider,
} from "react-router-dom";
import router from './Route/Route';
import AuthProvider from './Components/AuthProvider/AuthProvider';

ReactDOM.createRoot(document.getElementById('root')).render(
  <div className='lg:max-w-screen-2xl mx-auto'>
    <AuthProvider>
      <React.StrictMode>

        <RouterProvider router={router} />

      </React.StrictMode>
    </AuthProvider>
  </div>
)
