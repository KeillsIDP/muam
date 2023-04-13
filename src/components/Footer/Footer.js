import './Footer.css'
import './FooterMobile.css'

import {Container,Row,Col} from 'react-bootstrap'
import zone from './img/icon.svg'
import phone from './img/Phone.png'
import mail from './img/Mail.png'
import pin from './img/Address.png'
import face from './img/mfacebook.svg'
import twit from './img/mtwitter.svg'
import inst from './img/minstagram.svg'
import pint from './img/mpinterest.png'

export const Footer = () => {
    return (
        <div className='footer'>
            <div className='footer-top'>
                <Container className='footer-handler' fluid>
                    <Row className='footer-row'>
                        <Col className='footer-info footer-logo-handler'>
                            <a href=''><img src={zone} className='footer-logo'/>
                            Zone.</a>
                        </Col>
                        <Col className='footer-info'>
                        <a href=''><   img src={pin}/>
                            Dhaka,Bangladesh</a>
                        </Col>
                        <Col className='footer-info'>
                        <a href=''> <img src={phone}/>
                            0943833399</a>
                        </Col>
                        <Col className='footer-info'>
                        <a href=''> <img src={mail}/>
                            support@zone.com</a>
                        </Col>
                        <Col className='footer-info'>
                        <a href=''><img src={face}/></a>
                        <a href=''><img src={twit}/></a>
                        <a href=''><img src={inst}/></a>
                        <a href=''><img src={pint}/></a>
                        </Col>
                    </Row>
                    <Row className='footer-row'>
                        <Col><a href=''><p>Service</p></a></Col>
                        <Col><a href=''><p>Order Management</p></a></Col>
                        <Col><a href=''><p>Social Assistant</p></a></Col>
                        <Col><a href=''><p>Crypto Platform</p></a></Col>
                        <Col><a href=''><p>Analyzer of the News</p></a></Col>
                    </Row>
                    <Row className='footer-row'>
                        <Col> <a href=''><p>Company</p></a></Col>
                        <Col><a href=''><p>About Us</p></a></Col>
                        <Col><a href=''><p>News</p></a></Col>
                        <Col><a href=''><p>Our trusted partner</p></a></Col>
                        <Col><a href=''><p>New users FAQ</p></a></Col>
                    </Row>
                    <Row className='footer-row'>
                        <Col><a href=''><p>Supports</p></a></Col>
                        <Col><a href=''><p>Help center</p></a></Col>
                        <Col><a href=''><p>Feedback</p></a></Col>
                        <Col><a href=''><p>Contact us</p></a></Col>
                        <Col> <a href=''><p>Terms conditions</p></a></Col>
                    </Row>
                    <Row className='footer-row'>
                        <Col><a href=''><p>Resources</p></a></Col>
                        <Col><a href=''><p>Download App</p></a></Col>
                        <Col><a href=''><p>Blog</p></a></Col>
                        <Col><a href=''><p>What's new</p></a></Col>
                        <Col><a href=''><p>Sitemap</p></a></Col>
                    </Row>
                </Container>
            </div>
            <div className= 'footer-bottom'>
                <div className='footer-bottom-handler'>
                    <p>© 2021 Zone. - All rights reserved.</p>
                    <div className='footer-bottom-text'>
                    <a href=''><p>Privacy</p></a>
                    <a href=''><p>Security</p></a>
                    <a href=''><p>Terms</p></a>
                    </div>
                </div>
            </div>
        </div>
    )
}