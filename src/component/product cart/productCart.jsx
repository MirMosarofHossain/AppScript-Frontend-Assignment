import "./productCart.css"
import heart from "../../assets/heart.png"
import redHeartLogo from '../../assets/redHeart.png'
import { useState } from "react"
import {useDispatch}  from 'react-redux'
import { favoriteDataAction } from "../../store/store"

export default function ProductCart({product}){
    const [redHeart, setRedHeart] = useState(false)
    const dispatch = useDispatch()
    
    const logoClickHandler = (item)=>{
        setRedHeart((state)=>!state)
        dispatch(favoriteDataAction.addData(item))
    }
    const redlogoClickHandler = (item)=>{
        setRedHeart((state)=>!state)
    }

     return <div className="card">
        <div className="img-container">
        <img className="image" src={product.image} alt="" />
        </div>       
        <h3>PRODUCT NAME</h3>
        <div className="card-bottom">
        <p><a href="">Sign in</a> or Create an account to see pricing</p>
        {
            redHeart ? <img src={redHeartLogo} alt="logo1" onClick={()=>{redlogoClickHandler(product)}}/> :
            <img src={heart} alt="logo" onClick={()=>{logoClickHandler(product)}}/>
        }
        
        </div>
        
     </div>
}