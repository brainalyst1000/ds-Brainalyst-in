import React from "react";
import {Container,Row,Col} from 'react-bootstrap';
import {
    BrowserRouter as Router,
    Link
  } from "react-router-dom";
import './Footer.css';
import navicon1 from '../nav-icon1.svg';
import navicon2 from '../nav-icon2.svg';
import navicon3 from '../nav-icon3.svg';
import navicon4 from '../youtube.svg';



export const Foot=()=>{
    return(
        
        <footer className="footer" id="footer">
            <Container>
                <div style={{display:"flex",justifyContent:'space-around',padding:'1rem'}}>
                <div><span><h3>Get connected With us On Social Media</h3></span></div>
                <div className="social-icon">
                <a href="#"><img src={navicon1} alt="" /></a>
                <a href="#"><img src={navicon2} alt="" /></a>
                <a href="#"><img src={navicon3} alt="" /></a>
                <a href="#"><img src={navicon4} alt="" /></a>
                </div>
                </div>
                <hr />
                <Row>
                    <Col><h3>Brainalyst</h3><p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Non mollitia modi reiciendis.</p></Col>
                    {/* <Col><h6>Product</h6><p>DS</p>
                    <p>Python</p>
                    <p>Tablue</p>
                    <p>Git</p>
                    </Col> */}
                    <Col>
                    <h6>Links</h6>
                    <p><Link to='/faq' style={{textDecoration:'none',color:'#fff'}}>FAQ</Link></p>
                    <p><a href="" style={{textDecoration:'none',color:'#fff'}}>Privacy Policy</a></p>
                    <p><a href="" style={{textDecoration:'none',color:'#fff'}}>Terms & Conditions</a></p>
                    <p><a href="" style={{textDecoration:'none',color:'#fff'}}>Offers</a></p>
                    </Col>
                    <Col><h6>Contact</h6>
                    <p><i class="fa-solid fa-house" style={{color: '#ffffff'}}></i> F-22,Crona Arcade Bhadurgarh ,Haryana</p>
                    <p><i class="fa-solid fa-envelope" style={{color: '#ffffff'}}></i> info@brainalst.in</p>
                    <p><i class="fa-solid fa-phone" style={{color: '#ffffff'}}></i> +91-0000000000</p>
                    {/* <p>+91-0000000000</p> */}
                    </Col>
                </Row>
                <div className="copyDiv">Copyright 2024. All Rights Reserved</div>
            </Container>


        </footer>

    )
}