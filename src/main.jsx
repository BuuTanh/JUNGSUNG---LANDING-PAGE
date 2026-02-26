import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { LanguageProvider } from './LanguageContext'; // Thêm dòng này

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <LanguageProvider> {/* Bọc ở đây */}
      <App />
    </LanguageProvider>
  </StrictMode>,
)