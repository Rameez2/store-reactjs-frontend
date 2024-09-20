import styles from "../styles/banner.module.css";
export default function Banner() {
  return (
    <div className={styles.banner}>
        <img src="https://timekeeper-demo.myshopify.com/cdn/shop/files/Slider-3_57764d19-02cc-428d-9d38-e9c6295cc5b4.jpg?v=1613726073" alt="" />
        <button className="btn">Shopping Now</button>
    </div>
  )
}
