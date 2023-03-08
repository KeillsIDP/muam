import { Container,Row } from 'react-bootstrap'
import icon1 from '../img/icon1.svg'
import {Offer} from "./Offer"

export const Offers = () => {
    return (
    <div className='service'>
        <h1>Our Service</h1>
        <p>We turn information into actionable insights We work to understand your issues<br/>
        and are driven to ask better questions in the pursuit of making work.</p>
    
    <Container className='align-offers' fluid = 'sm'>
        <Row xs={1} md={3} lg={3} sm={1} xxl ={3} className = "offers-row">
            <Offer icon = {icon1} title = "Base1"
             text = 'When you run this code, you’ll be given a warning that a key should be provided for list items. A “key” is a special string attribute you need to include when creating lists of elements.<br/> We’ll discuss why it’s important in the next section.' />
             <Offer icon = {icon1} title = "Base1"
             text = 'When you run this code, you’ll be given a warning that a key should be provided for list items. A “key” is a special string attribute you need to include when creating lists of elements.<br/> We’ll discuss why it’s important in the next section.' />
             <Offer icon = {icon1} title = "Base1"
             text = 'When you run this code, you’ll be given a warning that a key should be provided for list items. A “key” is a special string attribute you need to include when creating lists of elements.<br/> We’ll discuss why it’s important in the next section.' />
       </Row>     
       <Row xs={1} md={3} lg={3} sm={1} className = 'offers-row'> 
            <Offer icon = {icon1} title = "Base1"
             text = 'When you run this code, you’ll be given a warning that a key should be provided for list items. A “key” is a special string attribute you need to include when creating lists of elements.<br/> We’ll discuss why it’s important in the next section.' />
             <Offer icon = {icon1} title = "Base1"
             text = 'When you run this code, you’ll be given a warning that a key should be provided for list items. A “key” is a special string attribute you need to include when creating lists of elements.<br/> We’ll discuss why it’s important in the next section.' />
             <Offer icon = {icon1} title = "Base1"
             text = 'When you run this code, you’ll be given a warning that a key should be provided for list items. A “key” is a special string attribute you need to include when creating lists of elements.<br/> We’ll discuss why it’s important in the next section.' />
       </Row>
    </Container>
    </div>
    )
}