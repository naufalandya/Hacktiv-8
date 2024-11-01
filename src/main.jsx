import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import App from './App';
import Profile from './pages/Profile';
import Form from './pages/Form';  // import your custom Form component
import './index.css'

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />}>
        <Route index element={<Navigate to="profile" />} />
        <Route path="profile" element={<Profile />} />
        <Route path="form" element={<Form />} />  {/* Corrected Form component */}
      </Route>
    </Routes>
  </BrowserRouter>
);
