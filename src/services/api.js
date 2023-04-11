// Importando a lib axios (ps: instalar antes pelo cmd npm install axios)
import axios from 'axios';

// Base da URL: https://api.themoviedb.org/3
// URL da API: https://api.themoviedb.org/3/movie/now_playing?api_key=9aa663832f378c86f4249aa375194aed&language=pt-BR


// Criando a base para a URL
const api = axios.create({
    baseURL: 'https://api.themoviedb.org/3'
});

// Exportando a API para outros arquivos
export default api;