import './Card-price.css';
import { useEffect } from 'react';

const Card = ({title,price,storage,users,send,agreement}) =>{
    return(
        <div className="card" id = 'card'>
            <h1>{title}</h1>
            <p>Price : {price}</p>
            <p>Storage : {storage}</p>
            <p>Max-users : {users}</p>
            <p>Max-send : {send}</p>
        </div>
    )

}
export default Card;