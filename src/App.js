import './styles/index.css';
import { BrowserRouter as Router, Route, Routes,useLocation } from "react-router-dom";
import {Provider} from "react-redux"
import store from './store';
import 'flowbite';
import Alert from '../src/components/alert/alert';
import AnimatedRoutes from './routes';


function App() {

  return (
    <Provider store={store}>
<Router> 
  
<AnimatedRoutes/>
    </Router>
    <Alert/>
</Provider>

  );
}

export default App;
