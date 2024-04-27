import { useSelector } from "react-redux"
import "./favorite.css"
import ProductCart from "../product cart/productCart";

export default function Favorite(){
    const {data} = useSelector((store)=>store.favoriteData)
    // console.log(data);
    return <section className="favorite">
         {
            data.map((product)=><div className="card" key={product.id}>
            <div className="img-container">
            <img className="image" src={product.image} alt={product.category} />
            </div>       
            <h3>{product.title.slice(0,18).toUpperCase().trim()}...</h3>
            <div className="card-bottom">
            <p><a href="#">Sign in</a> or Create an account to see pricing</p>         
            </div>
            
         </div>)
         }
    </section>
}