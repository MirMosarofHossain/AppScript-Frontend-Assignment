import { useSelector } from "react-redux"
import "./favorite.css"
import ProductCart from "../product cart/productCart";

export default function Favorite(){
    const {data} = useSelector((store)=>store.favoriteData)
    console.log(data);
    return <section className="favorite">
         {
            data.map((product)=><ProductCart product={product} key={product.id}/>)
         }
    </section>
}