import axios from "axios";
import Env from "./Entorno";

export const LoginBasicoUsuario = (Email, Password) => {
    const ent = Env.getEnv();
    const url_base = ent.API_URL;
    const url = `${url_base}/api/login`;
    const data = {
        Email,
        Password,
    };
    return axios.post(url, data);
};