import { StylesProvider } from '@material-ui/styles';
import Head from 'next/head'
import { fromImageToUrl } from '../../utils/urls'
import getProducts from '../../apiCalls/ProductFunctions/getProducts';
const category = categories[0]

export default function Category() {
    return (
        <div>
            <Head>
                {category.meta_title &&
                    <title>{category.meta_title}</title>
                }
                {category.meta_description &&
                    <meta name="description" content={category.meta_description} />
                }
            </Head>

            <h3>{category.name}</h3>
            <img src={(category.image)} />
            <h3>{category.name}</h3>
            <p>
                {category.content}
                {products.map(product => (
                    <div key={product.name} className={styles.product}>
                        <Link href={`/products/${product.slug}`}>
                            <a>
                                <div className={styles.product__Row}>
                                    <div className={styles.product_ColImg}>
                                        <img src={fromImageToUrl(product.image)} />
                                    </div>
                                    <div className={styles.product__Col}>
                                        {product.name} {product.price}
                                    </div>
                                </div>
                            </a>
                        </Link>
                    </div>
                ))}
            </p>
        </div>
        )}
