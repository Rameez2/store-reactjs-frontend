import { useLocation } from 'react-router-dom';
import { useState ,useEffect} from 'react';

export default function CheckoutPage() {
  const [products,setProducts] = useState([]);
  const [loading,setLoading] = useState(true);
  const location = useLocation();

  useEffect(() => {
    if (location.state?.products) {
      console.log(location.state?.products);
      setProducts(location.state.products);
      setLoading(false);
    }
    else {
      setLoading(false);
    }
  }, [location.state?.products]); // Dependency array ensures effect runs when location.state.products changes

  const getCheckoutTotal = () => {
    return products.reduce((total, item) => total + (item.price * item.cartQuantity), 0);
  };

  return (
    <div>
        <h1>Checkout Page</h1>
        {loading ? <h1>loading...</h1> : products.length ? 
            <div >
          {products.map((p) => 
            <div style={{"border":"2px solid","width":"fit-content"}} key={p._id}>
              <h2>{p.name}</h2>
              <h4>{p.price}</h4>
              <h4>{p.cartQuantity}</h4>
            </div>
          ) }
          <h1>Total : <span style={{"color":"green"}}>${getCheckoutTotal().toFixed(2)}</span></h1>
            </div>
          :
          <h1>Please select products before checkout</h1>
        }
    </div>
  )
}
