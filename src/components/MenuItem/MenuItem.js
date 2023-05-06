import { X } from "react-bootstrap-icons"
import "./MenuItem.css"
import "./MenuItemMobile.css"

export const MenuItem  = ({title,info,deactivation}) => {
    return(
        <div className={'menu-item'} onClick={()=>deactivation('home')}>
            <span className="menu-cross"><X size="7vw" onClick={()=>deactivation('home')}/></span>
            <div className="menu-content" onClick={e=>e.stopPropagation()}>
                <h1 className="menu-title">{title}</h1>
                <p className="menu-text">{info}</p>
            </div>
        </div>
    )
} 