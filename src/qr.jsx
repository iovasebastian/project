import "./qr.css";
import image from './image-qr-code.png';
const Qr = () =>{
    return(
        <div className = "middle-block">
        <img src = {image} class = "img-qr" alt="cod qr"/>
        <h1 className="h1-qr">Improve your front-end skills by building projects</h1>
        <p className="p-qr">Scan the QR code to visit Frontend Mentor and take your coding skills to the next level</p>
  </div>
    )
}
export default Qr;