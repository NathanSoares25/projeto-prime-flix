//Importando a lib 'react router dom' e selicionando os componentes para fazer o processo das rotas no browser (ps: instalar pelo cmd -> npm install react-router-dom)
import { BrowserRouter, Routes, Route} from 'react-router-dom';

// Importando as páginas para o Router
import Home from './pages/Home'; //Importando Pasta Home
import Filme from './pages/Filme'; //Importando Pasta Filme

import Favoritos from './pages/Favoritos'; //Importando página de favoritos

import Erro from './pages/Erro'; //Importando pasta erro

//Importando o Header das páginas para o router (ps: O Header fica acima das rotas.)
import Header from './components/Header';

// Criando o componente de rotas 
function RoutesApp(){
    return(
        <BrowserRouter>
            <Header/>
            <Routes>
                <Route path="/" element={ <Home/> } /> 
                <Route path="/Filme/:id" element={ <Filme/> } /> 

                <Route path="/Favoritos" element={ <Favoritos/> } />


                <Route path="*" element={< Erro/> } />
            </Routes>
        </BrowserRouter>
    )
}

// Export Default para rodar o site com os componentes acima

export default RoutesApp;