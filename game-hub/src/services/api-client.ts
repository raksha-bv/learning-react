import axios from "axios";

export default axios.create({
    baseURL:'https://api.rawg.io/api',
    params:{
        key:'3ca7b21437ed44c1b33dc0a045d4add5'
    }
})