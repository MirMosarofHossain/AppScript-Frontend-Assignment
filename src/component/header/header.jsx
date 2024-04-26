import "./header.css"
import logo1 from "../../assets/logo1.png"

export default function Header(){
    return <header>
        <span className="d-none"><img src={`${logo1}`} alt="" /> Lorem ipsum dolor</span>
        <span><img src={`${logo1}`} alt="" /> Lorem ipsum dolor</span>
        <span className="d-none"><img src={`${logo1}`} alt="" /> Lorem ipsum dolor</span>
    </header>
}