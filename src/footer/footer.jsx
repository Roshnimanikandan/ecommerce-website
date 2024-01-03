import React from 'react';
import './footer.css';
import fb from '../assets/fbimg.png';
import twitter from '../assets/twitterimg.png';
import linkedin from '../assets/linkedinimg.png';
import insta from '../assets/instaimg.png';
const Footer=()=>{
    return(
        <div className="footer">
<div className="sb__footer section__padding">
    <div className="sb__footer-links">
        <div className="sb__footer-links_div">
            <h4>CONTACT INFO</h4>
            <hr></hr>
            <a href="/employer">
                <p> (+91) 7448802418</p>
            </a>
            <a href="/healthplan">
                <p>support@glammart.com</p>
            </a>
            <a href="/individual">
                <p>sales@glammart.com</p>
            </a>
        </div>
        <div className="sb__footer-links_div">
            <h4>QUICK LINKS</h4>
            <hr></hr>
            <a href="AboutUs">
                <p>About Us</p>
            </a>
            <a href="ContactUs">
                <p>Contact Us</p>
            </a>
            <a href="ReturnAndRefund">
                <p>Return & Refund Policy</p>
                </a>
            <a href="ShippingPolicy">
                <p>Shipping Policy</p>
                </a>
    </div><div className="sb__footer-links_div">
            <h4>CUSTOMER INFO</h4>
            <hr></hr>
            <a href="/employer">
                <p>My Account</p>
            </a>
            <a href="/employer">
                <p>Track your Order</p>
            </a>
            <a href="/employer">
                <p>Order returns</p>
            </a>
            <a href="/employer">
                <p>Wishlist</p>
            </a>
            <a href="/employer">
                <p>News & Events</p>
            </a>
            <a href="FAQ">
                <p>FAQ</p>
            </a>
            </div>
            <div className="sb__footer-links_div">
            <h4>CATEGORIES</h4>
            <hr></hr>
            <a href="/about">
                <p>Makeup</p>
            </a>
            <a href="/press">
                <p>Skin</p>
            </a>
            <a href="/career">
                <p>Hair</p>
                </a>
            <a href="/contact">
                <p>SelfCare</p>
                </a>
            <a href="/contact">
                <p>Mom & Baby Care</p>
                </a>
            <a href="/contact">
                <p>Fragrance</p>
                </a>
            <a href="/contact">
                <p>Ayurveda</p>
                </a>
            <a href="/contact">
                <p>Men's Products</p>
                </a>
            </div>
            <div className="sb__footer-links_div">
            <h4>Follow Us On</h4>
            <div className="socialmedia">
                <p><img src={fb} alt=""/></p>
                <p><img src={twitter} alt=""/></p>
                <p><img src={linkedin} alt=""/></p>
                <p><img src={insta} alt=""/></p>
            </div>
          </div>
</div>
<hr></hr>
<div className="sb__footer-below">
    <div className="sb__footer-copyright">
        <p>@{new Date().getFullYear()} CodeInn. All right reserved.</p>
    </div>
    <div className="sb__footer-below-links">
        <a href="TermsAndConditions"><div><p>Terms & Conditions</p></div></a>
        <a href="/PrivacyPolicy"><div><p>Privacy</p></div></a>
        <a href="/security"><div><p>Security</p></div></a>
        <a href="/cookie"><div><p>Cookie  Declaration</p></div></a>
    </div>
</div>
        </div>
        </div>
        
    )
}
export default Footer;