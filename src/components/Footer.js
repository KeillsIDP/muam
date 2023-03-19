import '../css/Footer.css'

import {Container,Row,Col} from 'react-bootstrap'
import zone from '../img/icon.svg'
import phone from '../img/Phone.png'
import mail from '../img/Mail.png'
import pin from '../img/Address.png'
import face from '../img/mfacebook.svg'
import twit from '../img/mtwitter.svg'
import inst from '../img/minstagram.svg'
import pint from '../img/mpinterest.png'

export const Footer = () => {
    return (
        <div className='footer'>
            <div className='footer-top'>
                <Container className='footer-handler' fluid>
                    <Row className='footer-row'>
                        <Col className='footer-info footer-logo-handler'>
                            <img src={zone} className='footer-logo'/>
                            Zone.
                        </Col>
                        <Col className='footer-info'>
                        <   img src={pin}/>
                            Dhaka,Bangladesh
                        </Col>
                        <Col className='footer-info'>
                            <img src={phone}/>
                            0943833399
                        </Col>
                        <Col className='footer-info'>
                            <img src={mail}/>
                            support@zone.com
                        </Col>
                        <Col className='footer-info'>
                            <img src={face}/>
                            <img src={twit}/>
                            <img src={inst}/>
                            <img src={pint}/>
                        </Col>
                    </Row>
                    <Row className='footer-row'>
                        <Col><p>Service</p></Col>
                        <Col><p>Order Management</p></Col>
                        <Col><p>Social Assistant</p></Col>
                        <Col><p>Crypto Platform</p></Col>
                        <Col><p>Analyzer of the News</p></Col>
                    </Row>
                    <Row className='footer-row'>
                        <Col> <p>Company</p></Col>
                        <Col><p>About Us</p></Col>
                        <Col><p>News</p></Col>
                        <Col><p>Our trusted partner</p></Col>
                        <Col><p>New users FAQ</p></Col>
                    </Row>
                    <Row className='footer-row'>
                        <Col><p>Supports</p></Col>
                        <Col><p>Help center</p></Col>
                        <Col><p>Feedback</p></Col>
                        <Col><p>Contact us</p></Col>
                        <Col> <p>Terms conditions</p></Col>
                    </Row>
                    <Row className='footer-row'>
                        <Col><p>Resources</p></Col>
                        <Col><p>Download App</p></Col>
                        <Col><p>Blog</p></Col>
                        <Col><p>What's new</p></Col>
                        <Col><p>Sitemap</p></Col>
                    </Row>
                </Container>
            </div>
            <div className= 'footer-bottom'>
                <div className='footer-bottom-handler'>
                    <p>© 2021 Zone. - All rights reserved.</p>
                    <div className='footer-bottom-text'>
                        <p>Privacy</p>
                        <p>Security</p>
                        <p>Terms</p>
                    </div>
                </div>
            </div>
        </div>
    )
}