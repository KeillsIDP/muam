import {useState} from 'react'
import {Container,Row,Col} from 'react-bootstrap'
import './DropDownLinks.css'

export const DropDownLinks = ({title,options}) => {
    const [opened,setOpened] = useState(false);
    const opt = Array(options.length);
    for(let i = 0; i<opt.length;i++)
        opt[i] = <Col onClick={e=>e.stopPropagation()} className={opened?'':"hidden-col"}><a href=''><p>{options[i]}</p></a></Col>
    return(
        <Row className='footer-row'>
            <Col  onClick={()=>{setOpened(!opened)}}><p className="column-title">{title}</p></Col>
            {opt}
        </Row>
    )
}