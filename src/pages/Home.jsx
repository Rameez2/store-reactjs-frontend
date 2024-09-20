import ProductsList from '../components/products/ProductsList';
import Banner from '../components/Banner';
import StoreFeatures from '../components/StoreFeatures';
import FeaturedProducts from '../components/products/FeaturedProducts';
import SaleProducts from '../components/products/SaleProducts';
import SpecialOffersBanner from '../components/SpecialOffersBanner';
// import RatingComp from '../components/other/RatingComp';

export default function Home() {
  return (
  <>
    <Banner/>
    <StoreFeatures/>

    <SaleProducts/>
    <SpecialOffersBanner/>
    <FeaturedProducts/>
    {/* <RatingComp/> */}

    <hr />
    <h2>Products</h2>
    <ProductsList featured={false} productsLength={9} />
    <hr />
  </>
  )
}