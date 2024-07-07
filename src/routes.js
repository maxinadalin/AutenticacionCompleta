import Home from './containers/pages/home';
import Sign_Up from './containers/pages/auth/register';
import Activated from "./containers/pages/auth/activate"
import Sign_in from "./containers/pages/auth/login"
import Recover_password from './containers/pages/auth/recover_password'
import ConfirmPassword from "./components/auth/reset_password_confirm"
import { BrowserRouter as Router, Route, Routes,useLocation } from "react-router-dom";

import { AnimatePresence } from 'framer-motion';

function AnimatedRoutes({

}){

    const location = useLocation()
    return(
        <AnimatePresence>
<Routes location={location} key={location.pathname}>
  {/* <Route path='*' element={<Error404/>}/> */}
  <Route path='/' element={<Home/>}/>

  {/* auth */}

  <Route path='/Registrar' element={<Sign_Up/>}/>
  <Route path="/activate/:uid/:token" element={<Activated />}/>
  <Route path='/Iniciar sesion' element={<Sign_in/>}/>
  <Route path='/RecuperarContraseña' element={<Recover_password/>}/>
  <Route path='/password/reset/confirm/:uid/:token' element={<ConfirmPassword/>}/>


  
</Routes>
        </AnimatePresence>

    )
}
export default AnimatedRoutes