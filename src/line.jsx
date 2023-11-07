import './line.css';
import {useState} from 'react';
const Line = ({text}) =>{

    const [isButtonClicked, setIsButtonClicked] = useState(false);

    const handleButtonClick = () =>{
        setIsButtonClicked(!isButtonClicked);
    }
    return(
        <div className = "div-wrap">
            <div className="top-half-cl">
                <p className='titlu'>Titlu</p>
                <button onClick = {handleButtonClick} className='buton'>U</button>
            </div>
            <div  className={`Line ${isButtonClicked ? 'line' : 'line-cl'}`}>
            <p className={`Line ${isButtonClicked ? 'text-line' : 'text-cl'}`}>{text}</p>
            </div>
        </div>
    )
}
export default Line;