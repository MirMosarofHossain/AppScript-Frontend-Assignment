import "./filterItem.css"
import arrowLeft from "../../assets/arrow-left.png"
import { useState } from "react"
export default function FilterItem({item}){
    const [arrowDown, setArrowDown] = useState(true)
    const [selectItem, setSelectItem] = useState([{name:'Men' , selected:false},{name:'Women' , selected:false},{name:'Baby & Kids' , selected:false}])
    const unselectHandler = ()=>{
        setSelectItem([{name:'Men', selected:false},{name:'Women' , selected:false},{name:'Baby & Kids' , selected:false}])
    }
    const onChangeHandler=(idx)=>{
        if(selectItem[idx].selected){
            let newArr = [...selectItem]
            newArr[idx] = {...newArr[idx], ...{selected:false}}
            setSelectItem(newArr)
          }
          else{
            let newArr = [...selectItem]
            newArr[idx] = {...newArr[idx], ...{selected:true}}
            setSelectItem(newArr)
          }
    }

    const arrowClickHandler = ()=>{
        setArrowDown((state)=>!state)
    }

    return <div className="row" >
            <div className="row-top">
                <span>{item.toUpperCase()}</span>
                {
                    arrowDown ? <img className="arrow-down" src={arrowLeft} alt="icon" onClick={arrowClickHandler}/> : 
                    <img className="arrow-up" src={arrowLeft} alt="icon" onClick={arrowClickHandler}/>
                }           
            </div>
            <div className="row-bottom">
                <span>All</span>
                {
                   !arrowDown ? <div className="row-select">
                   <span onClick={unselectHandler}>Unselect all</span>
                   {
                      selectItem.map((elm,idx)=><div className="checkbox" key={idx}>
                          <input onChange={()=>{onChangeHandler(idx)}} checked={elm.selected} type="checkbox" />
                          <span>{elm.name}</span>


                      </div> )
                   }
              </div>  : null
                }
            
            </div>
           </div>  
}