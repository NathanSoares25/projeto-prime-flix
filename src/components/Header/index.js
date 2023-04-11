//Importando o CSS do Header para ser executado aqui
import './header.css';

//Importando os links do React router DOM
import { Link } from 'react-router-dom';

// Função para mostrar o Header em todas as páginas
function Header(){
    return(
        <header>
            <Link className="Logo" to='/'>Prime Flix</Link>
            <Link className='favoritos' to='/favoritos'>Meus filmes</Link>
        </header>
    )
}

// Exportar o Header para outras páginas
export default Header;