import "./sideBar.css"
import FilterItem from "../filter items/filterItem"

export default function SideBar(){
    const filterItems = ['IDEAL FOR','occasion','work','fabric','segment','suitable for','raw materials','Pattern'];
    return <aside className="sidebar">
           <div className="customize">
            <input type="checkbox" />
            <span>Customizble</span>
           </div>
           <div className="fiterItems">
            {
                filterItems.map((item,index)=><FilterItem item={item} key={index}/>)
            }
           </div>
           
    </aside>
}