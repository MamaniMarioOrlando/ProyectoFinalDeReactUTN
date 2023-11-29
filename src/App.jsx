
import './App.css';
import Header from "./Components/header/header";
import HomePage from "./routes/home"
import CafePage from './routes/cafe';
import MenuPage from './routes/menu';
import ExperienciaPage from './routes/experiencia';
import Wrapper from './Components/wrapper';
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import NotFoundPage from './routes/notFoundPage';


function App() {

  return (

    <Wrapper>
      <Router>
          <Header/>
          {/*todo lo que esta por fuera del componente Rouetes funciona como Layout*/}
          <Routes>
            {/*Definimos las rutas que vamos a usar. Dentro del componente Route*/}
            <Route path= "/" element={<HomePage/>}/>
            <Route path= "/home" element={<HomePage/>}/>
            <Route path= "/menu" element={<MenuPage/>}/>
            <Route path= "/experiencia" element={<ExperienciaPage/>}/>
            <Route path= "/cafe" element={<CafePage/>}/>
            <Route path= "/*" element={<NotFoundPage/>}/>
          </Routes>
          {/*Todo lo que esta por fuera del componenete Routes funciona como Layout */}
      </Router>
    </Wrapper>

  )
}

export default App
