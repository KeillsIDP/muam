import { Container,Row } from 'react-bootstrap'
import icon1 from './img/icon1.svg'
import icon2 from './img/Icon2.svg'
import icon3 from './img/Icon3.svg'
import icon4 from './img/Icon4.svg'
import icon5 from './img/Icon5.svg'
import icon6 from './img/Icon6.svg'
import {Offer} from "../Offer/Offer"

import './Service.css'
import './ServiceMobile.css'

export const Service = () => {
    return (
    <div className='service'>
        <h1>Our Service</h1>
        <p>We turn information into actionable insights We work to understand your issues<br/>
        and are driven to ask better questions in the pursuit of making work.</p>
    
    <Container className='align-offers'>
        <Row xs={1} md={3} lg={3} sm={1} xxl ={3} className = "offers-row">
            <Offer icon = {icon1} title = "Base1"
             text = 'Lorem ipsum dolor sit amet, consectetur the adipiscing elit. Sed quis accumsan nisi Ut ut felis congue nisl hendrerit commodo.' />
             <Offer icon = {icon2} title = "Base1"
             text = 'Lorem ipsum dolor sit amet, consectetur the adipiscing elit. Sed quis accumsan nisi Ut ut felis congue nisl hendrerit commodo.' />
             <Offer icon = {icon3} title = "Base1"
             text = 'Lorem ipsum dolor sit amet, consectetur the adipiscing elit. Sed quis accumsan nisi Ut ut felis congue nisl hendrerit commodo.' />
       </Row>     
       <Row xs={1} md={3} lg={3} sm={1} className = 'offers-row'> 
            <Offer icon = {icon4} title = "Base1"
             text = 'Lorem ipsum dolor sit amet, consectetur the adipiscing elit. Sed quis accumsan nisi Ut ut felis congue nisl hendrerit commodo.' />
             <Offer icon = {icon5} title = "Base1"
             text = 'Lorem ipsum dolor sit amet, consectetur the adipiscing elit. Sed quis accumsan nisi Ut ut felis congue nisl hendrerit commodo.' />
             <Offer icon = {icon6} title = "Base1"
             text = 'Lorem ipsum dolor sit amet, consectetur the adipiscing elit. Sed quis accumsan nisi Ut ut felis congue nisl hendrerit commodo.' />
       </Row>
    </Container>
    </div>
    )
}