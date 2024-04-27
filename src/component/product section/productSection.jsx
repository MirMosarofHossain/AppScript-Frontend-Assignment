import { useState } from "react"
import CategoryBar from "../category section/categoryBar"
import SideBar from "../sideBar/sideBar"
import "./productSection.css"
import ProductBody from "../product Body/productBody"

export default function ProductSection() {
    const [showSidebar, setShowSidebar] = useState(false)
    return <section className="product-section">
        <CategoryBar setShowSidebar={setShowSidebar} />
        <div className="product-container">
            {
                showSidebar ? <div className="left-container">
                    <SideBar />
                </div> : null
            }

            <div className="right-container">
                <ProductBody showSidebar={showSidebar}/>
            </div>
        </div>
    </section>
}