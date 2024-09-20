import styles from '../styles/storeFeatures.module.css';

export default function StoreFeatures() {
  return (
    <div className={styles.storeFeatures}>
        <div className={styles.featureContainer}>
            <div>
                <img src="https://timekeeper-demo.myshopify.com/cdn/shop/files/333_small.png?v=1613726072" alt="" />
            </div>
            <div className={styles.featureText}>
                <h2>Free Shipping</h2>
                <p>Free shipping on orde</p>
            </div>
        </div>
        <div className={styles.featureContainer} >
            <div>
                <img src="https://timekeeper-demo.myshopify.com/cdn/shop/files/111_small.png?v=1613726072" alt="" />
            </div>
            <div className={styles.featureText}>
                <h2>Free Shipping</h2>
                <p>Free shipping on orde</p>
            </div>
        </div>
        <div className={styles.featureContainer}>
            <div>
                <img src="https://timekeeper-demo.myshopify.com/cdn/shop/files/222_small.png?v=1613726072" alt="" />
            </div>
            <div className={styles.featureText}>
                <h2>Free Shipping</h2>
                <p>Free shipping on orde</p>
            </div>
        </div>
        
    </div>
  )
}
