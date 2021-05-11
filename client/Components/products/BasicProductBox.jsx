import { Card, CardActionArea, CardActions, Button, CardMedia, CardContent, Typography } from '@material-ui/core'


export default function BasicProductBoxes({product, classes}){
    return (
        <Card className={classes.productCard}>
            <CardActionArea>
                <CardMedia
                    className={classes.media}
                    image={product.images[0].src}
                    title="DNA TESTING KIT"/>
                <CardContent>
                    <Typography gutterBottom variant='h5' component='h2'>{product.title}</Typography>
                    <Typography variant="body2" color="textSecondary" component="p">{product.description}
          </Typography>
                </CardContent>
            </CardActionArea>
            <CardActions>
              <Button size="large" color="primary">
                Buy
              </Button>
            </CardActions>
        </Card>
    )
}