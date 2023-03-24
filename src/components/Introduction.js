import { Container, Row,Col } from 'react-bootstrap';
import human1 from '../img/Saly-19.png';
import playButton from '../img/Vector.svg';

export const Introduction = () => {
    return(
        <Container className ='introduction' fluid>
            <Row>
                <Col className='introduction-text'>
                <p className="introduction-title">Virtual Reality <br/> Bussiness Solutions</p>
                <p>We have over 15 year exprience in business consultting arena. We have over <br/>
                15 year exprience in business consultting arena and artficial intelligence.</p>
                <span className='introduction-interactions'>
                    <span className='join-button'><p>Join Us</p></span>
                    <img src={playButton} alt='play'/>
                    <p>Watch video</p>
                </span>
                </Col>
            </Row >
            <Row className='introduction-hero'>
                <img src={human1} alt='hero'/>
            </Row>
        </Container>
    )
}
                

