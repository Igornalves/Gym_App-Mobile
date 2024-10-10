import axios from "axios";

//criando uma exportacao para utilizacao da conexao com a API usando o Axios
const api = axios.create({
    baseURL: 'http://192.168.1.104:3333'
});

// api.interceptors.request.use((config) => {
//     console.log("INTERCEPTOR REQUEST => ",config)
//     console.log("DADOS RECEBIDOS => ",config.data)
//     return config
// }, (error) => {
//     return Promise.reject(error)
// })

api.interceptors.response.use((response) => {
    console.log("DADOS RECEBIDOS => ",response.data)
    return response;
}, (error) => {
    console.log("INTERCEPTOR RESPONSE ERROR => ",error)
    return Promise.reject(error)
})

export { api }
