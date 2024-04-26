import "./categoryBar.css"
import arrowLeft from "../../assets/arrow-left.png"
import { useState } from "react"
export default function CategoryBar({setShowSidebar}) {

  const selectItems = ["RECOMMENDED",'NEWEST FIRST','POPULAR','PRICE : HIGH TO LOW','PRICE : LOW TO HIGH']

  const [showFilter, setShowFilter] = useState(false)
 const [showSelectContainer, setShowSelectContainer]= useState(false)

 const selectItemClickHandler = (item)=>{
      setSelectedItem(item)
      setShowSelectContainer((state)=>!state)
 }

  const arrowClickHandler = () => {
    setShowFilter((state) => !state)
    setShowSidebar((state)=>!state)
  }
  const selectArrowHandler = ()=>{
    setShowSelectContainer((state)=>!state)
  }
  const [selectedItem, setSelectedItem] = useState("RECOMMENDED")

  return <section className="categoryBar">
    <span className="d-none bold">3425 Items</span>
    {
      showFilter ? <div className="hide" onClick={arrowClickHandler}><img src={arrowLeft} alt="icon" className="d-none" /> {" "} <span className="d-none">HIDE</span> FILTER</div>
        : <div className="show" onClick={arrowClickHandler}><img src={arrowLeft} alt="icon" className="d-none" /> {" "} <span className="d-none">SHOW</span> FILTER</div>
    }
    {/* <span className="line">{"|"}</span> */}
    <div className="select">
      <div className="select-top">
         <span className="bold">{selectedItem}</span>
         <img src={arrowLeft} alt="logo" onClick={selectArrowHandler}/>
      </div>

      {
        showSelectContainer ? <div className="select-bottom">
        {
          selectItems.map((item,idx)=> <span className={selectedItem == item ? "bold" : "normal"}  onClick={()=>{selectItemClickHandler(item)}} key={idx}>{item}</span> )
        }
      </div>  :null
      }
      
    </div>

  </section>
}