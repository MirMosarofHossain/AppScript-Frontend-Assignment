import "./footer.css"
import usLogo from "../../assets/usLogo.png"
import linkedin from "../../assets/linkedin.png"
import insta from "../../assets/Insta.png"
import Gpay from "../../assets/Gpay.png"
import Opay from "../../assets/Opay.png"
import payPal from "../../assets/payPal.png"
import apple from "../../assets/apple.png"
import amex from "../../assets/amex.png"
import masterCard from "../../assets/masterCard.png"
import star from "../../assets/star.png"
import FooterDropDown from "../footerDropDown/footerDropDown"
import arrow from "../../assets/arrow-down.png"
import { useState } from "react"

export default function Footer() {
    const dropDownData = [
        {
            title: 'mettā muse',
            data: ['About Us', 'Stories', 'Artisans', 'Boutiques', 'Contact Us', 'EU Compliances Docs']
        },
        {
            title: 'QUICK LINKS',
            data: ['Orders & Shipping', 'Join/Login as a Seller', 'Payment & Pricing', 'Return & Refunds', 'FAQs', 'Privacy Policy','Terms & Conditions']
        },
    ]

    const [arrowDown, setArrowDown] = useState(true)

    const arrowClickHandler = () => {
        setArrowDown((state) => !state)
    }

    return <footer className="footer">
        <div className="footer-top">
            <div className="footer-top-left">
                <h3>BE THE FIRST TO KNOW</h3>
                <p className="lg-text">Sign up for updates from mettā muse.</p>
                <p className="sm-text">Lorem Ipsum is simply dummy text of the printing and typesetting industry. this is simply dummy text.</p>
                <div className="input-box">
                    <input placeholder="Enter your e-mail..." type="text" />
                    <button>SUBSCRIBE</button>
                </div>
            </div>
            <div className="footer-top-right">

                <div className="contact-lg">
                    <h3>CONTACT US</h3>
                    <p>+44 221 133 5360</p>
                    <p>customercare@mettamuse.com</p>
                </div>
                <div className="contact-sm">
                    <h3>CALL US</h3>
                    <div className="details">
                        <p>+44 221 133 5360</p>
                        <img src={star} />
                        <p>customercare@mettamuse.com</p>
                    </div>
                </div>

                <div className="currency">
                    <h3>CURRENCY</h3>
                    <div className="logo-container">
                        <img className="usLogo" src={usLogo} alt="Usa" /> <img src={star} /> <span>USD</span>
                    </div>
                    <p className="lg-text">Transactions will be completed in Euros and a currency reference is available on hover.</p>

                </div>

            </div>
        </div>
        <hr />

        <div className="footer-bottom lg-footer-bottom">
            <div className="col">
                <h3 style={{ fontSize: "20px" }}>mettā muse</h3>
                <span>About Us</span>
                <span>Stories</span>
                <span>Artisans</span>
                <span>Boutiques</span>
                <span>Contact Us</span>
                <span>EU Compliances Docs</span>
            </div>
            <div className="col">
                <h3 style={{ fontSize: "18px" }}>QUICK LINKS</h3>
                <a href="#">Orders & Shipping</a>
                <a href="#">Join/Login as a Seller</a>
                <a href="#">Payment & Pricing</a>
                <a href="#">Return & Refunds</a>
                <a href="#">FAQs</a>
                <a href="#">Privacy Policy</a>
                <a href="#">Terms & Conditions</a>
            </div>
            <div className="col">
                <h3 style={{ fontSize: "18px" }}>FOLLOW US</h3>
                <div className="social-media">
                    <img src={insta} alt="logo" />
                    <img src={linkedin} alt="logo" />
                </div>
                <h3 style={{ fontSize: "18px" }}>mettā muse ACCEPTS</h3>

                <section className="payment">
                    <img src={Gpay} />
                    <img src={masterCard} />
                    <img src={payPal} />
                    <img src={amex} />
                    <img src={apple} />
                    <img src={Opay} />

                </section>
            </div>
        </div>


        <div className="sm-footer-bottom">
            {
                dropDownData.map((item, idx) => <FooterDropDown item={item} key={idx} />)
            }

            <div className="row">
                <div className="row-top">
                    <h3>FOLLOW US</h3>
                    {
                        arrowDown ? <img className="footer-arrow-down" src={arrow} alt="icon" onClick={arrowClickHandler} /> :
                            <img className="footer-arrow-up" src={arrow} alt="icon" onClick={arrowClickHandler} />
                    }
                </div>
                <div className="row-bottom">
                    {
                        !arrowDown ? <div className="footer-row-select-logo">
                            <img src={insta} alt="logo" />
                            <img src={linkedin} alt="logo" />
                        </div> : null
                    }

                </div>
            </div>
            <section className="sm-payment-section">
                <h3 style={{ fontSize: "18px" }}>mettā muse ACCEPTS</h3>
                <div className="payment">
                    <img src={Gpay} />
                    <img src={masterCard} />
                    <img src={payPal} />
                    <img src={amex} />
                    <img src={apple} />
                    <img src={Opay} />

                </div>

            </section>
        </div>
        <p>Copyright &#169; 2023 mettamuse. All rights reserved.</p>
    </footer>
}