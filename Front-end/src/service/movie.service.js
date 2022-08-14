import { Const } from "../Config";
import axios from "axios"

export const create = async(data)=> {
    try{

        console.log(data);
        const res = await axios.post(`${Const.baseUrl}/create-movie`, data, {
            withCredentials: true
        })

        return res.data;

    }
    catch(err){
        console.error(err);
    }
}