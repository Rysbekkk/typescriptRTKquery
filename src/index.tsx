import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux/es/exports';
import { BrowserRouter, HashRouter } from 'react-router-dom';
import App from './App';
import { store } from './redux/app/store';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <Provider store={store}>
    <HashRouter>
      <App />
    </HashRouter>
  </Provider>
);


