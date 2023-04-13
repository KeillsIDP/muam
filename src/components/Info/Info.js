import { Col, Container, Row } from "react-bootstrap"
import man1 from './img/man1.png'
import man2 from './img/man2.png'

import './Info.css'
import './InfoMobile.css'

export const Info = () => {
    return (
        <Container className = "info">
            <Row>
                <Col className="info-image">
                    <img src = {man1}/>
                </Col>
                <Col className="info-text-zone">
                    <h1>
                        We complete every projects extra care as customer need
                    </h1>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis at dictum risus, non suscipit arcu. Quisque aliquam posuere tortor, sit amet convallis nuncoe scelerisque in. orem ipsum  dolor sit amet, consectetur adipisicing elit. Labore eius molestiae facere, natus reprehenderit eaque eum, autem ipsam. Magfini, error. Tempora odit laborum iure inventore possimus laboriosam qui nam. 
                    </p>
                    <span>
                        <p className="info-read-button">Read More</p>
                    </span>
                </Col>
            </Row>
            <Row>
                <Col className="info-text-zone">
                    <h1>
                        We complete every projects extra care as customer need
                    </h1>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis at dictum risus, non suscipit arcu. Quisque aliquam posuere tortor, sit amet convallis nuncoe scelerisque in. orem ipsum  dolor sit amet, consectetur adipisicing elit. Labore eius molestiae facere, natus reprehenderit eaque eum, autem ipsam. Magfini, error. Tempora odit laborum iure inventore possimus laboriosam qui nam. 
                    </p>
                    <span>
                        <p className="info-read-button">Read More</p>
                    </span>
                </Col>
                <Col className="info-image">
                    <img src = {man2}/>
                </Col>
            </Row>
        </Container>
    )
}