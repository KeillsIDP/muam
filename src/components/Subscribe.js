import {Form} from 'react-bootstrap'
import plane from '../img/Plane.svg'
import '../css/Subscribe.css'

export const Subscribe = () => {
    return(
        <div className='subscribe'>
            <h1>Subscribe to get the Latest News</h1>
            <p>We recommended you to subscribe to our newspaper,drop your email below to get daily update about us</p>
            <div className='subscribe-input'>
                <Form.Control type="email" placeholder="Enter your email adress" color='white' />
                <button className='subscribe-button'><img src={plane}/>Subscribe</button>
            </div>
        </div>
    )
}