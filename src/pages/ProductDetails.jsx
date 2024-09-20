import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getProductById } from "../services/productsApi";
import { Link } from "react-router-dom";

export default function ProductDetails() {
    const { id } = useParams(); // Get the product ID from the URL
    const [product, setProduct] = useState(null);
    const [quantity, setQuantity] = useState(1);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchProduct = async () => {
            try {
                const productData = await getProductById(id);
                console.log(productData);

                setProduct(productData[0]);
            } catch (error) {
                setError(error.message);
            }
        };

        fetchProduct();
    }, [id]);

    function updateQuantity(number) {
        if(number > 0) {
            setQuantity(number);
        }
    }

    return (
        <>
            <h1>ProductDetails</h1>
            {product ? <div>
                <h1>{product.name}</h1>
                <img src={`/assets/${product.image}`} alt={product.name} />
                <p>{product.description}</p>
                <p>Price: ${product.price}</p>
                <div style={{"display": "flex","alignItems": "center","gap": "20px"}}>
                        <button onClick={()=> updateQuantity(quantity-1)}>-</button>
                        <p>quantity : {quantity}</p>
                        <button onClick={()=> updateQuantity(quantity+1)}>+</button>
                </div>
                <p>Rating: {product.rating}</p>
                <button><Link to="/checkout" state={{ products:[{...product,cartQuantity:quantity}] }}>Checkout</Link></button>
            </div>
                : <h1>NO Product FOUND</h1>}
        </>
    )
}
