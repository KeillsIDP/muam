import skype from './img/skype 1.svg'
import linked from './img/linkedin 1.svg'
import twitter from './img/twitter 1.svg'
import facebook from './img/facebook.svg'
import sunny from './img/sunny.png'
import alina from './img/alina.png'
import alex from './img/alex.png'
import afroza from './img/afroza.png'

import './Team.css'
import './TeamMobile.css'

export const Team = () =>{
    return(
    <div className="team">
        <h2>Met Our Team</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed quis 
            accumsan nisi Ut ut felis congue nisl hendrerit commodo.
        </p>
                <div className="team-persons">
                    <div className="team-person">
                        <img src={sunny} className="team-person-picture" alt='picture'/>
                        <h4>Sunny Khan</h4>
                        <p>EXECUTIVE OFFICER</p>
                        <div className="team-person-socials">
                            <img src={skype} className="team-person-social" alt='skype'/>
                            <img src={linked} className="team-person-social" alt='linked'/>
                            <img src={twitter} className="team-person-social" alt='twitter'/>
                            <img src={facebook} className="team-person-social" alt='facebook'/>
                        </div>
                    </div>
                    <div className="team-person">
                        <img src={alina} className="team-person-picture" alt='picture'/>
                        <h4>Alina Jesia</h4>
                        <p>UX/UI DESIGNER</p>
                        <div className="team-person-socials">
                            <img src={skype} className="team-person-social" alt='skype'/>
                            <img src={linked} className="team-person-social" alt='linked'/>
                            <img src={twitter} className="team-person-social" alt='twitter'/>
                            <img src={facebook} className="team-person-social" alt='facebook'/>
                        </div>
                    </div>
                    <div className="team-person">
                        <img src={alex} className="team-person-picture" alt='picture'/>
                        <h4>Alex Sohag</h4>
                        <p>BUSINESS DEVELOPMENT</p>
                        <div className="team-person-socials">
                            <img src={skype} className="team-person-social" alt='skype'/>
                            <img src={linked} className="team-person-social" alt='linked'/>
                            <img src={twitter} className="team-person-social" alt='twitter'/>
                            <img src={facebook} className="team-person-social" alt='facebook'/>
                        </div>
                    </div>
                    <div className="team-person">
                        <img src={afroza} className="team-person-picture" alt='icon'/>
                        <h4>Afroza Mou</h4>
                        <p>HEAD OF MARKETING</p>
                        <div className="team-person-socials">
                            <img src={skype} className="team-person-social" alt='skype'/>
                            <img src={linked} className="team-person-social" alt='linked'/>
                            <img src={twitter} className="team-person-social" alt='twitter'/>
                            <img src={facebook} className="team-person-social" alt='facebook'/>
                        </div>
                    </div>
        </div>
    </div>
    )
}