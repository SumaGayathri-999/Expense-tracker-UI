import './App.css';
import { Provider } from 'react-redux';
import Store from './Redux/store';
import Home from './pages/Home';
import {ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <>
    <ToastContainer />
    <Provider store={Store}>
    <div className="App">
      <Home />
    </div>
    </Provider>
    </>
  );
}

export default App;
