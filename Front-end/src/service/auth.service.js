import { Const } from "../Config";
import axios from "axios"

export const login = async(data)=> {
    try{

        console.log(data);
        const res = await axios.post(`${Const.baseUrl}/login`, data, {
            withCredentials: true
        })

        return res.data;

    }
    catch(err){
        console.error(err);
    }
}

export const register = async(data)=> {
    try{

        console.log(data);
        const res = await axios.post(`${Const.baseUrl}/register`, data, {
            withCredentials: true
        })

        return res.data;
        
    }
    catch(err){
        console.error(err);
    }
}