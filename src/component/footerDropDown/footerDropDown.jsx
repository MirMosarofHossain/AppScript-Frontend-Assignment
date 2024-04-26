import "./footerDropDown.css"
import arrow from "../../assets/arrow-down.png"
import { useState } from "react"

export default function FooterDropDown({item}){
    const [arrowDown, setArrowDown] = useState(true)

    const arrowClickHandler = ()=>{
        setArrowDown((state)=>!state)
    }

    return <div className="row" >
            <div className="row-top">
                <h3>{item.title}</h3>
                {
                    arrowDown ? <img className="footer-arrow-down" src={arrow} alt="icon" onClick={arrowClickHandler}/> : 
                    <img className="footer-arrow-up" src={arrow} alt="icon" onClick={arrowClickHandler}/>
                }           
            </div>
            <div className="row-bottom">
                {
                   !arrowDown ? <div className="footer-row-select">
                   {
                      item.data.map((elm,idx)=><span key={idx}>{elm}</span>)
                   }
              </div>  : null
                }
            
            </div>
           </div>  
}