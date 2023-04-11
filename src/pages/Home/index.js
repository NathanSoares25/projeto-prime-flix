// CSS da página
import './home.css';

/* Importando o useEffect para buscar os filmes da API quando o usuário entrar na página e o UseStates para que depois que o usuário buscar o filme, armazena-lo em algum estado para poder ser utilizada na aplicação  */
import{ useEffect, useState } from 'react';

// Importando axios
import api from '../../services/api';

//Importando link do React router dom
import { Link } from 'react-router-dom'

// URL da API: https://api.themoviedb.org/3/movie/now_playing?api_key=9aa663832f378c86f4249aa375194aed&language=pt-BR

function Home(){
    const [filmes, setFilmes] = useState([]); // Estado para armazenar
    const [loading, setLoading] = useState(true); // tela de carregamento da página'
    
    useEffect(() => { // chamar sempre que a aplicação abrir
        async function loadFilmes(){
            const response = await api.get("movie/now_playing", { 
                params: {
                    api_key: '9aa663832f378c86f4249aa375194aed',
                    language: "pt-BR",
                    page: 1,
                }
            })

            // console.log(response.data.results.slice(0,10));
            setFilmes(response.data.results.slice(0,10))
            setLoading(false);
        }

        loadFilmes();

    }, []) 

    //Aplicando uma 'tela de carregamento' para não ficar a tela branca caso o usuário tenha um conexão lenta.
    if(loading){
        return(
            <div className="loading">
                <h2>Carregando filmes...</h2>
            </div>
        )
    }

    return(
        <div className='container'>
            <div className='lista-filmes'>
                {filmes.map((filme) => {
                    return (
                        <article key={filme.id}>
                            <strong>{filme.title}</strong>
                            <img src={`https://image.tmdb.org/t/p/original/${filme.poster_path}`} alt={filme.title} />
                            <Link to={`/filme/${filme.id}`}>Acessar</Link>
                        </article>
                    )
                })}
            </div>
            
        </div>
    )
}

export default Home;