import Client from 'shopify-buy'

export const client = Client.buildClient({
    storefrontAccessToken: process.env.SHOPIFY_TOKEN,
    domain: process.env.SHOPIFY_DOMAIN
})