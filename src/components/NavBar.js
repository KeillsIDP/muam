import { Navbar, Nav, Container } from 'react-bootstrap';
import { useState } from 'react';
import { MenuItem } from './MenuItem';
import icon from '../img/icon.svg';

export const NavBar = () => {
  const [activeLink,setActiveLink] = useState('home');
  const onUpdateActiveLink = (value) => {
      setActiveLink(value);
  }
  return (
    <>
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
            <Nav.Link className = {activeLink==='home'?'active navbar-link' : "navbar-link"} onClick={()=> onUpdateActiveLink('home')}>Home</Nav.Link>
            <Nav.Link className = {activeLink==='about'?'active navbar-link' : "navbar-link"} onClick={()=> onUpdateActiveLink('about')}>About Us</Nav.Link>
            <Nav.Link className = {activeLink==='service'?'active navbar-link' : "navbar-link"} onClick={()=> onUpdateActiveLink('service')}>Service</Nav.Link>
            <Nav.Link className = {activeLink==='pricing'?'active navbar-link' : "navbar-link"} onClick={()=> onUpdateActiveLink('pricing')}>Pricing</Nav.Link>
            <Nav.Link className = {activeLink==='blog'?'active navbar-link' : "navbar-link"} onClick={()=> onUpdateActiveLink('blog')}>Blog</Nav.Link>
            <span className='contact-button'>
              <Nav.Link href="#contact" className = {"navbar-link"} onClick={()=> onUpdateActiveLink('null')}>Contact Us</Nav.Link>
            </span>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    {activeLink === 'about'? <MenuItem deactivation={onUpdateActiveLink} title = "About Us" info={'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas mi diam, euismod vitae iaculis non, semper a arcu. Suspendisse posuere viverra commodo. Quisque quis tellus non elit aliquet interdum laoreet sed sem. Vestibulum sit amet interdum eros, in laoreet magna. Cras quis efficitur enim, sed lacinia enim. Duis pellentesque vulputate dolor, non vulputate tellus feugiat fermentum. Vestibulum ac nisi vitae lorem maximus lacinia. Donec sit amet ante eu sem egestas posuere sit amet eu nisi. Integer laoreet tempor ex eu hendrerit. Integer sodales commodo quam quis molestie. Donec eget diam sit amet lectus pharetra accumsan sit amet id est. Pellentesque quis felis vehicula sem vulputate viverra.'}/>:''}
    {activeLink === 'service'? <MenuItem deactivation={onUpdateActiveLink} title="Our Service" info={'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas mi diam, euismod vitae iaculis non, semper a arcu. Suspendisse posuere viverra commodo. Quisque quis tellus non elit aliquet interdum laoreet sed sem. Vestibulum sit amet interdum eros, in laoreet magna. Cras quis efficitur enim, sed lacinia enim. Duis pellentesque vulputate dolor, non vulputate tellus feugiat fermentum. Vestibulum ac nisi vitae lorem maximus lacinia. Donec sit amet ante eu sem egestas posuere sit amet eu nisi. Integer laoreet tempor ex eu hendrerit. Integer sodales commodo quam quis molestie. Donec eget diam sit amet lectus pharetra accumsan sit amet id est. Pellentesque quis felis vehicula sem vulputate viverra.'}/>:''}
    {activeLink === 'pricing'? <MenuItem deactivation={onUpdateActiveLink} title="Pricing" info={'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas mi diam, euismod vitae iaculis non, semper a arcu. Suspendisse posuere viverra commodo. Quisque quis tellus non elit aliquet interdum laoreet sed sem. Vestibulum sit amet interdum eros, in laoreet magna. Cras quis efficitur enim, sed lacinia enim. Duis pellentesque vulputate dolor, non vulputate tellus feugiat fermentum. Vestibulum ac nisi vitae lorem maximus lacinia. Donec sit amet ante eu sem egestas posuere sit amet eu nisi. Integer laoreet tempor ex eu hendrerit. Integer sodales commodo quam quis molestie. Donec eget diam sit amet lectus pharetra accumsan sit amet id est. Pellentesque quis felis vehicula sem vulputate viverra.'}/>:''}
    {activeLink === 'blog'? <MenuItem deactivation={onUpdateActiveLink} title="Check Out Our Blog" info={'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas mi diam, euismod vitae iaculis non, semper a arcu. Suspendisse posuere viverra commodo. Quisque quis tellus non elit aliquet interdum laoreet sed sem. Vestibulum sit amet interdum eros, in laoreet magna. Cras quis efficitur enim, sed lacinia enim. Duis pellentesque vulputate dolor, non vulputate tellus feugiat fermentum. Vestibulum ac nisi vitae lorem maximus lacinia. Donec sit amet ante eu sem egestas posuere sit amet eu nisi. Integer laoreet tempor ex eu hendrerit. Integer sodales commodo quam quis molestie. Donec eget diam sit amet lectus pharetra accumsan sit amet id est. Pellentesque quis felis vehicula sem vulputate viverra.'}/>:''}
    </>
);
}
