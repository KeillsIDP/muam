import { X } from "react-bootstrap-icons"
import "./MenuItem.css"
import "./MenuItemMobile.css"
//<span className="menu-cross"><X size="5vw" onClick={()=>deactivation('home')}/></span>
export const MenuItem  = ({title,info,deactivation}) => {
    return(
        <div className={'menu-item'} onClick={()=>deactivation('home')}>
            <div className="menu-content" onClick={e=>e.stopPropagation()}>
                <span className='menu-header'><h1 className="menu-title">{title}</h1><X className="menu-cross" size="5vw" onClick={()=>deactivation('home')}/></span>
                <p className="menu-text">{info}</p>
            </div>
        </div>
    )
} 