// import ProductsList from "./ProductsList";
import styles from "../../styles/products/saleProducts.module.css";
import { useEffect, useRef, useState } from "react";
import { getProducts } from "../../services/productsApi";
import ProductCard from "./ProductCard";
import ArrowButtons from "../other/ArrowButtons";

export default function SaleProducts() {
    
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
                <h1>Today’s Deals</h1>
                <div className={styles.timerArrowContainer}>
                    <div className={styles.timer}>
                        <span>END IN :  00:00:00</span>
                    </div>
                    <ArrowButtons scrollContainerRef={scrollContainerRef} />
                </div>
            </div>
            <div >
                <div className={styles.dealsProductList} ref={scrollContainerRef} >
                    {products.length ? products.map((product) => (
                        <ProductCard key={product.name} product={product}/>
                    )):<></>}
                </div>
            </div>
        </div>
    )   
}
