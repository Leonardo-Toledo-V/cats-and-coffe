import '../../assets/css/css-articles/card-products.css'

import Americano from '../../../public/img/Americano.png'
import Capuccino from '../../../public/img/Capuccino.png'
import Espresso from '../../../public/img/Espresso.png'
import Frapuccino from '../../../public/img/Frapuccino.png'
import Moccacino from '../../../public/img/Mocaccino.png'

const images = [Americano, Espresso, Moccacino, Capuccino, Frapuccino];

function ProductsCard({id, bebida, ingredientes, precio}) {
    return ( 
        <div className="product-card">
            <div className="image-container-card">
                <img className="image-card" src={images[id]} alt="" />
            </div>
            <h1 className="title-card">{bebida}</h1>
            <span className="ingredientes-card">{ingredientes}</span> <br></br><br></br>
            <span className="precio-card">{`$${precio}.00`}</span>
        </div>
     );
}

export default ProductsCard;