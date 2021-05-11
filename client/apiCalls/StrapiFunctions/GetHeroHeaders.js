import axios from "axios"


let getHeroHeaders = async () => {
    let {data} = await axios.get('http://localhost:1337/pages')
    console.log(data)
    return data
}

export default getHeroHeaders