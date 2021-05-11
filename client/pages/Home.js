import { Box, Grid, makeStyles } from '@material-ui/core'
import BasicProductBox from '../Components/products/BasicProductBox'
import { client } from '../utils/shopify-client'

const useStyles = makeStyles(
  {
      productCard: {
          width: '350px',
          height: '400px',

      },
      media: {
        height: 140
      }
  }
)

const HomePage = (props) => {

  const classes = useStyles()

  console.log(props.products[0].images[0].src)

  if(props.products.length === 0)return(<p>loading...</p>)
  return (
     <div>
       <p>Products</p>
       <Box ml={3} mt={3}>
            {props.products.map((product)=>{
              return  <BasicProductBox classes={classes} product={product}/>
            })}
       </Box>
    </div>
  )
}

export default HomePage

export const getServerSideProps = async (context) => {
  const products = await client.product.fetchAll(); // Fetch product
  const infos = await client.shop.fetchInfo(); // Fetch shop Info if you think about SEO and title and ... to your page
  const policies = await client.shop.fetchPolicies(); // fetch shop policy if you have any 
  return {
   props: {
   infos: JSON.parse(JSON.stringify(infos)),
   policies: JSON.parse(JSON.stringify(policies)),
   products: JSON.parse(JSON.stringify(products)),
  },
 };
};