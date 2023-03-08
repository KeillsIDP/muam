import { Navbar, Nav, Container } from 'react-bootstrap';
import { useState } from 'react';
import icon from '../img/icon.svg';

export const NavBar = () => {
  const [activeLink,setActiveLink] = useState('home');
  const onUpdateActiveLink = (value) => {
      setActiveLink(value);
  }
  return (
    <Navbar expand="lg">
      <Container>
        <Navbar.Brand href="#home" >
          <span className='logo'>
            <img src = {icon} alt = 'icon'/>
            <p>Zone.</p>
          </span>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home" className = {activeLink==='home'?'active navbar-link' : "navbar-link"} onClick={()=> onUpdateActiveLink('home')}>Home</Nav.Link>
            <Nav.Link href="#about" className = {activeLink==='about'?'active navbar-link' : "navbar-link"} onClick={()=> onUpdateActiveLink('about')}>About Us</Nav.Link>
            <Nav.Link href="#service" className = {activeLink==='service'?'active navbar-link' : "navbar-link"} onClick={()=> onUpdateActiveLink('service')}>Service</Nav.Link>
            <Nav.Link href="#pricing" className = {activeLink==='pricing'?'active navbar-link' : "navbar-link"} onClick={()=> onUpdateActiveLink('pricing')}>Pricing</Nav.Link>
            <Nav.Link href="#blog" className = {activeLink==='blog'?'active navbar-link' : "navbar-link"} onClick={()=> onUpdateActiveLink('blog')}>Blog</Nav.Link>
            <span className='contact-button'>
              <Nav.Link href="#contact" className = {"navbar-link"} onClick={()=> onUpdateActiveLink('null')}>Contact Us</Nav.Link>
            </span>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
);
}
