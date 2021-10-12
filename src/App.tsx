import { GlobalStyle } from './Styles/global'
import Header from './Components/Header'
import Routes from './Routes'
import { ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const App = () => {

  return (
    <div className="App">
      <GlobalStyle/>
      <ToastContainer/>
      <Header/>
      <Routes/>
    </div>
  );
}

export default App;
