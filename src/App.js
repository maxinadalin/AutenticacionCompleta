import './styles/index.css';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import {Provider} from "react-redux"
import store from './store';
import Home from './containers/pages/home';
import 'flowbite';
import Sign_Up from './containers/pages/auth/register';
import Activated from "./containers/pages/auth/activate"
import Sign_in from "./containers/pages/auth/login"
import Recover_password from './containers/pages/auth/recover_password'
import ConfirmPassword from "./components/auth/reset_password_confirm"


function App() {
  return (
    <Provider store={store}>
<Router> 
<Routes>
  {/* <Route path='*' element={<Error404/>}/> */}
  <Route path='/' element={<Home/>}/>

  {/* auth */}

  <Route path='/Registrar' element={<Sign_Up/>}/>
  <Route path="/activate/:uid/:token" element={<Activated />}/>
  <Route path='/Iniciar sesion' element={<Sign_in/>}/>
  <Route path='/RecuperarContraseña' element={<Recover_password/>}/>
  <Route path='/password/reset/confirm/:uid/:token' element={<ConfirmPassword/>}/>


  
</Routes>
    </Router>
</Provider>
  );
}

export default App;
