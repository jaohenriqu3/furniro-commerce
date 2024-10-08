import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client' 
import { Provider } from 'react-redux'; 
import { store } from './components/cart/store.ts' 
import { App } from './app.tsx';


createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Provider store={store}>
    <App></App>
    </Provider>
  </StrictMode>,
) 