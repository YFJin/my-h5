import axios from 'axios'
const metabolic = process.env.VUE_APP_METABOLIC;
const baseURL = process.env.VUE_APP_BASEURL;
// 请求超时设置
axios.defaults.timeout = 50000;

// 请求路径
axios.defaults.baseURL = baseURL + metabolic;
//http request 拦截器
axios.interceptors.request.use(
    config => {
      // 设置参数格式
      if(!config.headers['Content-Type']){
        config.headers = {
          'Content-Type':'application/json',
        };
      }
      // 获取token
      const token = localStorage.getItem('token');    
      // 添加token到headers
      if(token){
        config.headers.token = token
      }
      return config;
    },
    err => {
      return Promise.reject(err);
    }
  );
  
  //http response 拦截器
  axios.interceptors.response.use( 
    response => {
        return response;
    },
    err => {
      return Promise.reject(err);
    }
  );
  
  export default axios