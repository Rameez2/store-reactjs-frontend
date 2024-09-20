import styles from "../styles/specialOffers.module.css";

export default function SpecialOffersBanner() {
  return (
    <div className={styles.bannerContainer}>
            <div className={styles.bannerFirst}>
                <h5>special offer</h5>
                <h4>SUCCULENT GARDEN</h4>
                <h3>GIFT BOXES</h3>
                <p>From planter materials to style options, discover which planter is best for your space.</p>
                <button className="btn">Explore The Shop</button>
            </div>
            <div className={styles.bannerSecond}>
                <img src="https://timekeeper-demo.myshopify.com/cdn/shop/files/694x424_e23c122a-8d28-40ec-ba10-87e28f07c2ba.jpg?v=1613726082" alt="" />
            </div>
    </div>
  )
}
