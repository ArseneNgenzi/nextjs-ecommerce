import Link from 'next/link'
import React from 'react'
import { urlFor } from 'lib/client'
import product from 'sanityecommerce/schemas/product'

const HeroBanner = ({bannerData}) => {
  // console.log(bannerData)
  const {buttonText, desc, largeText1,  midText,  smallText, image} = bannerData
  return (
    <div>
      <div className="hero-banner-container">
        <div>
          <p className="beats-solo">{midText}</p>
          <h3>{midText}</h3>
          <h1>{largeText1}</h1>
          <img src={urlFor(image)} alt="headphones" className="hero-banner-image" />
          <div>
            <Link href={`/product/${product}`}>
              <button>{buttonText}</button>
            </Link>
            <div className="desc">
              <h5>{desc}</h5>
              <p>{smallText}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default HeroBanner