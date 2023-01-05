import axiosLib from 'axios'

const axios = axiosLib.create({
    baseURL: `${process.env.NEXT_PUBLIC_API_SERVER_URL}`, // typeof location !== "undefined"
    // ? ( location?.origin.indexOf("yeoboya.com") > -1 ? location?.origin : process.env.API_SERVER_URL )
    // : process.env.API_SERVER_URL,
    // adapter: cacheAdapterEnhancer(axiosLib.defaults.adapter, { enabledByDefault: false }),
    withCredentials: true,
});

axios.interceptors.request.use(
    (config) => {
        return config;
    },
    (error) => {
        return Promise.reject(error);
    }
);

axios.interceptors.response.use(
    (response) => {
        return response;
    },
    (error) => {
        if (error.response && error.response.status === 800) {
            location.replace("/")
        }
        // 로그처리나 필요한게 있다면? 추가??
        return Promise.reject(error)
    })

export default axios;