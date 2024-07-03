import './styles/index.css';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import {Provider} from "react-redux"
import store from './store';
import Home from './containers/pages/home';
import 'flowbite';


function App() {
  return (
    <Provider store={store}>
<Router> 
<Routes>
  {/* <Route path='*' element={<Error404/>}/> */}
  <Route path='/' element={<Home/>}/>


  
</Routes>
    </Router>
</Provider>
  );
}

export default App;
