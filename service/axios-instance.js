import axios from "axios";

const axiosInstance = axios.create({
  baseURL : 'https://api.hgbrasil.com/weather?key=f29dad5d',
})

export default axiosInstance