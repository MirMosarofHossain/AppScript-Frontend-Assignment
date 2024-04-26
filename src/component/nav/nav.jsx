import "./nav.css"
import logo2 from "../../assets/Logo2.png"
import searchLogo from "../../assets/searchLogo.png"
import heartLogo from "../../assets/heartLogo.png"
import bagLogo from "../../assets/bagLogo.png"
import userLogo from "../../assets/userLogo.png"
import menuLogo from "../../assets/menulogo.png"
import { useState } from "react"
export default function Nav() {
    const [showDropdown, setShowDropdown] = useState(false)
    const menuIconHandler = ()=>{
   setShowDropdown((state)=>!state)
    }
    return <> 
    <nav>
        <section className="nav-top">
            <span>
                <img className="menu-logo" src={menuLogo} alt="logo" onClick={menuIconHandler}/>
                <img src={`${logo2}`} alt="logo" />
            </span>

            <span className="company-logo">LOGO</span>
            <ul>
                <li><img src={`${searchLogo}`} alt="logo" /></li>
                <li><img src={`${heartLogo}`} alt="logo" /></li>
                <li><img src={`${bagLogo}`} alt="logo" /></li>
                <li className="d-none"><img src={`${userLogo}`} alt="logo" /></li>
                <li className="d-none"><select name="language" id="">
                    <option value="">ENG</option>
                    <option value="bengali">BNG</option>
                </select>
                </li>
            </ul>
        </section>

        <section className="nav-bottom d-none">
            <ul>
                <li>SHOP</li>
                <li>SKILLS</li>
                <li>STORIES</li>
                <li>ABOUT</li>
                <li>CONTACT US</li>
            </ul>
        </section>



{
    showDropdown ? <section className="drop-down">
    <ul>
        <li>SHOP</li>
        <li>SKILLS</li>
        <li>STORIES</li>
        <li>ABOUT</li>
        <li>CONTACT US</li>
    </ul>
</section>  :null 
}
    </nav>

    <div className="home-shop">
       <span>HOME </span>
       <span className="vl">|</span>
       <span> SHOP</span>
    </div>
    </>
}