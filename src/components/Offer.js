import {Container, Image,Col} from 'react-bootstrap'

export const Offer = (props) => {
    return (
      
        <Col>
          <span className='offer'>
              <img src = {props.icon} className="offer-image"/>
              <p className='offer-title'>{props.title}</p>
              <p className='offer-text'>{props.text}</p>
              <a href=''><p>Learn more</p></a>
          </span>
        </Col>

    )
}