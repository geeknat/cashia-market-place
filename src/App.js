import './App.css';
import Shoes from './images/shoe.jpeg'
import {AddToCart, ShareProduct} from "./sdk/actions";

function App() {

    const addToCart = () => {
        AddToCart({
            productId: "7e35acaf-974c-49ae-920b-d24ae6112d97",
            quantity: 1,
        })
    }

    const shareItem = () => {
        ShareProduct({
            productId: "7e35acaf-974c-49ae-920b-d24ae6112d97",
            link: "Check out this item on Cashia https://cashia.com/products/7e35acaf-974c-49ae-920b-d24ae6112d97"
        })
    }

    return (
        <div className={'App'}>
            <div style={{
                textAlign: 'center',
                display: 'flex',
                flexDirection: 'column',
                width: 200,
                padding: 16,
            }}>
                <img src={Shoes} style={{height: 300, margin: 8}}/>
                <span>KES 200.00</span>
                <button style={{marginTop: 8, height: 50}} onClick={addToCart}>Add To Cart</button>
                <button style={{marginTop: 8, height: 50}} onClick={shareItem}>Share Product</button>
            </div>
        </div>
    );
}

export default App;
