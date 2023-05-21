import ReactDOM from 'react-dom/client';
import { App } from 'components/App';
import './index.css';
import { StrictMode } from 'react';
import { Provider } from 'react-redux';
import { store } from 'redux/store';

ReactDOM.createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </StrictMode>
);
