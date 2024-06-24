  
    
    
    import { useEffect, useState } from "react"
    import { Navbar,Container,Nav } from "react-bootstrap"
    import logo from '../Brainalyst.svg'
    import './Navbar.css'
    import navicon1 from '../nav-icon1.svg';
    import navicon2 from '../nav-icon2.svg';
    import navicon3 from '../nav-icon3.svg';
    
    function NavBar() {
    // export const Navbar=()=>{
      // const[activeLink,setActiveLink]=useState('home');
      // const[scrolled,setScrolled]=useState(false);
      // useEffect(()=>{
      //       const onScroll =()=>{
      //       if(window.scrollY>50){
      //             setScrolled(true);
      //         }else{
      //               setScrolled(false);
      //           }
      //       }
        
      //       window.addEventListener("scroll",onScroll);
      //       return()=> window.removeEventListener("scroll",onScroll);
      //   },[])
        
      //   const onUpdatedActiveLink=(value) =>{
      //         setActiveLink(value)
      //     }
          return(
            <Navbar collapseOnSelect expand="lg">
      <Container fluid>
        <Navbar.Brand href="#home">
            <img className='brand-logo-img' src={logo} alt="logo" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav">
            <span className="navbar-toggler-icon"></span>
        </Navbar.Toggle>
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="custom-left-margin">
            {/* <Nav.Link href="#home"className={activeLink==='home' ? 'active navbar-link' : 'navbar-link'} onclick={() => onUpdatedActiveLink("home")}>Home</Nav.Link> */}
            
          </Nav>
          <span className="navbar-text">
            <div className="social-icon">
                <a href="#"><img src={navicon1} alt="" /></a>
                <a href="#"><img src={navicon2} alt="" /></a>
                <a href="#"><img src={navicon3} alt="" /></a>
            </div>
                          
            <button className="vvd" onClick={()=> document.getElementById('contact').scrollIntoView({ behavior: 'smooth' })}><span>Lets Connect</span></button>
            
          </span>
     </Navbar.Collapse>
      </Container>
    </Navbar>
    )
  }
  export {NavBar} ;