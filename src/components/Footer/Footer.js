import './Footer.css'
import './FooterMobile.css'

import {Container,Row,Col} from 'react-bootstrap'
import {DropDownLinks} from '../DropDownLinks/DropDownLinks.js'
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
                            <a href=''><img src={zone} className='footer-logo'/>Zone.</a>
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
                    <DropDownLinks title = {'Service'} options={['Order Management','Social Assistant','Crypto Platform','Analyzer of the News']}/>
                    <DropDownLinks title = {'Company'} options={['About Us','News','Our trusted partner','New users FAQ']}/>
                    <DropDownLinks title = {'Supports'} options={['Help center','Feedback','Contact us','Terms conditions']}/>
                    <DropDownLinks title = {'Resources'} options={['Download App','Blog',"What's new",'Sitemap']}/>
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