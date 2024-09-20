import ProductsList from "./ProductsList";
import styles from '../../styles/products/featuredProducts.module.css';
import { useState,useEffect,useRef } from "react";
import { getProducts } from "../../services/productsApi";
import ProductCard from "./ProductCard";
import ArrowButtons from "../other/ArrowButtons";

export default function FeaturedProducts() {
    const [products,setProducts] = useState([]);
    const scrollContainerRef = useRef(null);

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const productsData = await getProducts({
                    featured:true,
                    productsLength:8
                });
                setProducts(productsData);
            } catch (error) {
                console.error('Error fetching products:', error);
            }
        };
        fetchProducts();
    }, []);

    return (
        <div className={styles.FeaturedProductsContainer}>
            <div className={styles.FeaturedProductsTop}>
                <div>
                    <h1 className={styles.heading}>Featured Products</h1>
                </div>
                <div>
                    <ArrowButtons scrollContainerRef={scrollContainerRef} />
                </div>
            </div>
            <div>
                <div className={styles.featuredProductList} ref={scrollContainerRef} >
                    {products.length ? products.map((product) => (
                        <ProductCard key={product.name} product={product}/>
                    )):<></>}
                </div>
            </div>
        </div>
    )   
}
