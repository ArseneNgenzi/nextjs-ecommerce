import { FooterBanner, HeroBanner, Product } from "components"
import { client } from "lib/client"

// const inter = Inter({ subsets: ['latin'] })

export default function Home({products, bannerData}) {

  // console.log(products)
  return (
    <>
      <HeroBanner bannerData = {bannerData.length && bannerData[0]}/>

      <div className="products-heading">
        <h2>
          Best selling products
        </h2>
        <p>Speakers of many variation</p>
      </div>

      <div className="products-container">

        {products?.map((product) => (
          <Product key={product.id} product={product}/>
        ))}

      </div>

      <FooterBanner footerBanner={bannerData && bannerData[0]}/>
    </>
  )
}

export const getServerSideProps = async () => {
  const query = '*[_type == "product"]'
  const products = await client.fetch(query)
  const bannerQuery = '*[_type == "banner"]'
  const bannerData = await client.fetch(bannerQuery)

  return {
    props: {products, bannerData}
  }
}