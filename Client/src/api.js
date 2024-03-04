
import axios from 'axios'

export const api =  axios.create({
    baseURL:"http://localhost:5000/api/v1",
});

export const getMostLiked = async(req,res)=>{
    try {
        const data = await api.get("/getspecificdata?likelihood=4",{
            timeout:10*1000
        })
        // console.log("api data: " , data.data.data)
        return data.data.data;
    } catch (error) {
        console.log(error)
    }
}