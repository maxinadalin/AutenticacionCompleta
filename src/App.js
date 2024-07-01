import './styles/index.css';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import {Provider} from "react-redux"
import store from './store';
import Home from './containers/pages/home';
import 'flowbite';
import Register from './containers/pages/auth/register';


function App() {
  return (
    <Provider store={store}>
<Router> 
<Routes>
  {/* <Route path='*' element={<Error404/>}/> */}
  <Route path='/' element={<Home/>}/>

  <Route path='/Registro' element={<Register/>}/>
  
</Routes>
    </Router>
</Provider>
  );
}

export default App;
