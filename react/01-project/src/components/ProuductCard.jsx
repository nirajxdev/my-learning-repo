function ProductCard({price, description, image, inStock}) {
    return (
        <div>
            <h2>{price}</h2>
            <p>{description} </p>
            <img src={image} />
            <h3>inStock: {inStock ? "true":"false"} </h3>
        </div>
    )
}

export default ProductCard;