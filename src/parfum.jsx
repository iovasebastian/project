import img_desk from './image-product-desktop.jpg';
import img_mob from './image-product-mobile.jpg';
import "./parfum.css";
const Parfum = () => {
    return (
        <div className="container-parfum">
            <div className="img-parfum">
                <img className="mobile" src={img_mob} alt="poza-parfum" />
                <img className="deskstop" src={img_desk} alt="poza-parfum" />
            </div>
            <div className="text">
                <p className="titlu-mic">P E R F U M E</p>
                <h1 className='titlu-mare'>Gabrielle Essence Eau De Parfum</h1>
                <p className="descriere">A floral, solar and voluptuous interpretation composed by Olivier Polge, Perfumer-Creator for the House of CHANEL.</p>
                <p className="pret">$149.99</p>
                <p className="pret2">$169.99</p>
                <div className="cart">
                    <p className="add">Add to Cart</p>
                </div>
            </div>
        </div>
    )
}

export default Parfum;
