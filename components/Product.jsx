import React from "react";
import { urlFor } from "lib/client";
import Link from "next/link";
import Image from "next/image";

const Product = ({ product }) => {
	const { image, name, slug, price, details } = product;
	console.log(product);
	return (
		<div>
			<Link href={`/product/${slug.current}`}>
				<div className="product-card">
					<img
						src={urlFor(image && image[0])}
						alt=""
						width={250}
						height={250}
						className="product-image"
					/>
          <p className="product-name">{name}</p>
          {/* <p>{details}</p> */}
          <p className="product-price">${price}</p>
				</div>
			</Link>
		</div>
	);
};

export default Product;
