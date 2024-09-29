import { Switch } from "react-router-dom"
import { Route } from "react-router-dom"

import Header from './components/Header/Header'; 
import Home from './pages/Home';
import Cartelera from './pages/Cartelera';
import Populares from './pages/Populares';
import Detalle from './pages/Detalle';
import Favoritos from './pages/Favoritos';
import Search from './pages/Search';
import Footer from './components/Footer/Footer'; 
import NotFound from "./components/NotFound/NotFound";



function App() {
  return (
  <>
   <Header/>
   <Switch>
   <Route exact path="/" component={Home}/>
   <Route path="/cartelera" component={Cartelera}/>
   <Route path="/populares" component={Populares}/>
   <Route path="/detalle/id/:id" component={Detalle}/>
   <Route path="/favoritos" component={Favoritos}/>
   <Route path="/search" component={Search}/>
   <Route path=""  component={NotFound}/>
   </Switch>
   <Footer/>
  
  </>

   //faltan revisar rutas parametrizadas
  );
}

export default App;
