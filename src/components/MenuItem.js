export const MenuItem  = ({title,info,deactivation}) => {
    return(
        <div className={'menu-item'} onClick={()=>deactivation('home')}>
            <div className="menu-content" onClick={e=>e.stopPropagation()}>
                <h1 className="menu-title">{title}</h1>
                <p className="menu-text">{info}</p>
            </div>
        </div>
    )
} 