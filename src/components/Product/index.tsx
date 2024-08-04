import React, { useState } from "react"
import { AppImage } from "../AppImage"
import { Text } from "../Text"
import "./styles.css"

interface ProductProps {
    productName: string
    productPrice: number
    productRating: number
    productVotes: number
    productImage: string
    available?: boolean
    popular?: boolean
}

export const Product: React.FC<ProductProps> = ({ productName, productPrice, productRating, productVotes, productImage, available, popular, ...props }) => {
    
    const productRatingFixed = typeof productRating === "number" ? productRating.toFixed(1) : productRating
    
    return (
        <div className="App-product-image-container">
            {popular && <Text className="App-product-popular">Popular</Text>}
            <AppImage className="App-product-image" src={productImage} alt="Product Image" /> 
            <div className="App-product-name-container" >
                <Text className="App-product-name">{productName}</Text>
                <Text className="App-product-price">{productPrice}</Text>
              </div>
              <div className='App-rating'>
                <AppImage className="App-rating-image" src={productRatingFixed !== null ? "./Star_fill.svg" : "./Star.svg"} alt="Product Image" />
                <Text className="App-rating-text">{productRatingFixed}</Text>
                <Text className="App-rating-votes">{productVotes !== 0 ? `(${productVotes} votes)` : "No ratings"}</Text>
                <div className="App-available">
                <Text className="App-rating-available">{available ? "" : "Sold out"}</Text>
                </div>
              </div> 
        </div>  
    )
}