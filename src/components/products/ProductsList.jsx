import styles from '../../styles/products/productsList.module.css'
import { useState, useEffect } from 'react';
import { getProducts } from '../../services/productsApi';
import ProductCard from './ProductCard';

export default function ProductsList(props) {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const productsData = await getProducts(props);
                setProducts(productsData);
            } catch (error) {
                console.error('Error fetching products:', error);
            }
        };
        fetchProducts();
    }, []);

    return (
        <>
            <div className={styles.productsList}>
        {products.length ? products.map((product) => (
            <ProductCard key={product.name} product={product}/>
        )):<></>}
    </div>
        </>
    )
}
