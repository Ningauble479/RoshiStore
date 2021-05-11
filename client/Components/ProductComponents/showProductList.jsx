import getProducts from "../../apiCalls/ProductFunctions/getProducts"

export default function ListProducts () {
    getProducts()
    return (
        <div>
            Test
        </div>
    )
}