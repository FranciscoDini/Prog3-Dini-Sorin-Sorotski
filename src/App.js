import { Switch } from "react"
import { Route } from "react"

import Header from './components/Header/Header'; 
import Home from './pages/Home';
import Cartelera from './pages/Cartelera';
import Populares from './pages/Populares';
import Detalle from './pages/Detalle';
import Favoritos from './pages/Favoritos';
import Search from './pages/Search';
import Footer from './components/Footer/Footer'; 




function App() {
  return (
  <>
   <Header/>
   <Switch>
   <Route exact path="/" component={Home}/>
   <Route path="/cartelera" component={Cartelera}/>
   <Route path="/populares" component={Populares}/>
   <Route path="/detalle/:id" component={Detalle}/>
   <Route path="/favoritos" component={Favoritos}/>
   <Route path="/search" component={Search}/>
   <Footer/>
   </Switch>
  
  </>

   //faltan revisar rutas parametrizadas
  );
}

export default App;
