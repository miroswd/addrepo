// Configurando o axios
/*
    >>> yarn add axios
*/

// NÃO CONSEGUI USAR

import axios from 'axios';

  // create => cria uma configuração do axios
const api = axios.create({
    baseURL: 'https://api.github.com',
});

export default api;