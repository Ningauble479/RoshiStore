import axios from 'axios'

let getProducts = async () => {
    let data = await axios.post('/api/getProducts')
    console.log(data)
}

export default getProducts