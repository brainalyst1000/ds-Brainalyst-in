  
    
    
    import { useEffect, useState } from "react"
    import { Navbar,Container,Nav } from "react-bootstrap"
    import logo from '../Brainalyst.svg'
    import './Navbar.css'
    import navicon1 from '../nav-icon1.svg';
    import navicon2 from '../nav-icon2.svg';
    import navicon3 from '../nav-icon3.svg';
    
    
    export const NavBar=()=>{
      const[activeLink,setActiveLink]=useState('home');
      const[scrolled,setScrolled]=useState(false);
      useEffect(()=>{
            const onScroll =()=>{
            if(window.scrollY>50){
                  setScrolled(true);
              }else{
                    setScrolled(false);
                }
            };
        
            window.addEventListener("scroll",onScroll);
            return()=> window.removeEventListener("scroll",onScroll);
        },[])
        
        const onUpdatedActiveLink=(value) =>{
              setActiveLink(value)
          }
          return(
            <Navbar collapseOnSelect expand="lg"  className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <Container fluid >
        <Navbar.Brand href="#home">
            <img className='brand-logo-img' src={logo} alt="logo" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav">
            <span className="navbar-toggler-icon"></span>
        </Navbar.Toggle>
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="custom-left-margin">
            <Nav.Link href="#home"className={activeLink==='home' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdatedActiveLink("home")}>Home</Nav.Link>
            <Nav.Link href="#course"className={activeLink==='course' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdatedActiveLink("course")}>Course</Nav.Link>
            <Nav.Link href="#Curriculum"className={activeLink==='curriculum' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdatedActiveLink("curriculum")}>Curriculum</Nav.Link>
            <Nav.Link href="#project"className={activeLink==='project' ? 'active navbar-link' : 'navbar-link'} onclick={() => onUpdatedActiveLink("project")}>Project</Nav.Link>
            <Nav.Link href="#career"className={activeLink==='career' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdatedActiveLink("career")}>Career</Nav.Link>
            <Nav.Link href="#jobprep"className={activeLink==='jobprep' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdatedActiveLink("job")}>Job</Nav.Link>
            <Nav.Link href="#expert"className={activeLink==='expert' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdatedActiveLink("expert")}>Expert</Nav.Link>
            <Nav.Link href="#bonus"className={activeLink==='bonus' ? 'active navbar-link' : 'navbar-link'} onclick={() => onUpdatedActiveLink("bonus")}>Bonus</Nav.Link>
            <Nav.Link href="#feature"className={activeLink==='feature' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdatedActiveLink("Feature")}>Feature</Nav.Link>
            <Nav.Link href="#review"className={activeLink==='review' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdatedActiveLink("review")}>Review</Nav.Link>
            <Nav.Link href="#certificate"className={activeLink==='certificate' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdatedActiveLink("certificate")}>Certificate</Nav.Link>
                        
          </Nav>
          <span className="navbar-text">
            <div className="social-icon">
                <a href="https://www.linkedin.com/company/brainalyst/posts/?feedView=all"><img src={navicon1} alt="" /></a>
                <a href="https://www.facebook.com/Brainalystindia/"><img src={navicon2} alt="" /></a>
                <a href="https://www.instagram.com/brainalyst_india/"><img src={navicon3} alt="" /></a>
            </div>
            <button className="vvd" onClick={()=> document.getElementById('contact').scrollIntoView({ behavior: 'smooth' })}><span>Lets Connect</span></button>
            
          </span>
     </Navbar.Collapse>
      </Container>
    </Navbar>
    )
  }
  