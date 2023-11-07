import './Container.css';
import {useState} from 'react';
import Card from './Card';

const Container = () =>{
    const [agreement,setAgreement] = useState(false);
    let price1 = 100;
    let price2 = 200;
    let price3 = 300;
    const handleChange = (event) => {
        setAgreement(event.target.checked);
        
    }
    if(agreement){
        price1 *=12;
        price1 = (9/10)*price1;
        price2 *=12;
        price2 = (9/10)*price2;
        price3 *=12;
        price3 = (9/10)*price3;
    }

    return(
       <div className="container">
            <div className='upper'>
                <h1>Pricing</h1>
                <div className='texttog'>
                <p className='time-per'>monthly</p>
                    <label class="toggle-switch">
                        <input type="checkbox" onChange = {handleChange}/>
                        <span class="slider"></span>
                    </label> 
                    <p className='time-per'>yearly</p>
                </div>
            </div>
            <div className='cards'>
                <Card title = "Basic" price = {price1} storage = "100gb" users = "1" send = "1" agreement={agreement}/>
                <Card title = "Plus" price = {price2} storage = "500gb" users = "3" send = "5"/>
                <Card title = "Premium" price = {price3} storage = "1000gb" users = "10" send = "10"/>
            </div>
       </div> 
    )
}
export default Container;