import { useEffect } from "react";
import {useDispatch, useSelector} from "react-redux"
import {productDataAction} from "../../store/store.js"
import "./productBody.css"
import axios from "axios";
import ProductCart from "../product cart/productCart.jsx";

export default function ProductBody({showSidebar}){
    const dispatch = useDispatch()
    const {products} = useSelector((store)=>store.productData)
// console.log("main pro......" , products);
    useEffect(()=>{
        const getData = async ()=>{
            let {data} = await axios.get("https://fakestoreapi.com/products") 
            dispatch(productDataAction.updateData(data))         
        }
        getData()
    },[])

    return <section className={!showSidebar ? "product-body" : "product-body-side"}>
         {
            products.map((product)=><ProductCart product={product} key={product.id}/>)
         }
    </section>
}