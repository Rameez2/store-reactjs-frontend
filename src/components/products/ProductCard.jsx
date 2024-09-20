import { useNavigate } from 'react-router-dom';
import { addToCart } from '../../services/cartApi';
import styles from '../../styles/products/productsCard.module.css';

export default function ProductCard({ product }) {
    const navigate = useNavigate();
    function goToProductDetailsPage(productId) {
        navigate(`/products/${productId}`)
    }

    return (
        <div className={styles.productsItem}>
            <div className={styles.imageContainer}>
                {product.discount ? <span className={styles.productDiscountSpan}>-%{product.discount}</span> : <></>}
                <img onClick={() => goToProductDetailsPage(product._id)} src={`/assets/images/watchhh.jpg`} alt={product.name} />
                <div className={styles.sideActions}>
                    <i className="fa-regular fa-eye"></i>
                    <i className="fa-regular fa-heart"></i>
                </div>
            </div>
            <div className={styles.infoContainer}>
                <div>
                    <h2 className={styles.productName}>{product.name}</h2>
                    {product.discount ? <p>${product.price} <span className={styles.productDiscount}>${product.discount}</span></p> : <p>${product.price}</p>}

                </div>
                <div className={styles.iconsContainer}>
                    <button className={styles.cartIconBtn}  onClick={() => addToCart(product)}>
                        <i className="fa-solid fa-cart-shopping"></i>Add to cart 
                    </button>
                    <button className={styles.buyIconBtn}>
                        <i className="fa-solid fa-bag-shopping"></i> Buy
                    </button>
                </div>
            </div>
        </div>
    )
}
