import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { HelmetProvider } from 'react-helmet-async';
import { BrowserRouter,  useLocation } from 'react-router-dom'
import { useLayoutEffect } from 'react'
const Wrapper = ({ children }) => {
  const location = useLocation();
  useLayoutEffect(() => {
    document.documentElement.scrollTo(0, 0);
  }, [location.pathname]);
  return children
}


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <HelmetProvider>
    <BrowserRouter>
      <Wrapper>
        <React.StrictMode>
          <App />
        </React.StrictMode>
      </Wrapper>
    </BrowserRouter>
  </HelmetProvider>


);

