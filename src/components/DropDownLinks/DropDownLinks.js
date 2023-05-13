import {useState} from 'react'
import {Container,Row,Col} from 'react-bootstrap'
import './DropDownLinks.css'

export const DropDownLinks = ({title,options,check,checkChange}) => {
    const [opened,setOpened] = useState(false);
    if(title===check && !opened)
        setOpened(true);
    else if(title!==check && opened)
        setOpened(false);

    const opt = Array(options.length);
    for(let i = 0; i<opt.length;i++)
        opt[i] = <Col onClick={e=>e.stopPropagation()} className={opened?'':"hidden-col"}><a href=''><p>{options[i]}</p></a></Col>
    return(
        <div className='drop-down-links'>
        <Row className='footer-row'>
            <Col  onClick={()=>{!opened?checkChange(title):checkChange('')}}><p className="column-title">{title}</p></Col>
            {opt}
        </Row>
        </div>
    )
}