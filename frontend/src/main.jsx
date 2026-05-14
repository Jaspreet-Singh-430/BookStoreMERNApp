import { BrowserRouter } from "react-router-dom"
import { createRoot } from 'react-dom/client'
import AuthProvider from "./Context/authProvider.jsx"
import './index.css'
import App from './App.jsx'
createRoot(document.getElementById('root')).render(
  <BrowserRouter>
  <AuthProvider>
  <div className="dark:bg-slate-900 dark:text-white">
    <App />
    </div>
  </AuthProvider>
  </BrowserRouter>
)
