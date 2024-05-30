

import { faBehance, faFacebook, faInstagram, faLinkedin, faTwitter } from '@fortawesome/free-brands-svg-icons'
import './Footer.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export default function Footer() {



    return (

        <><section className="footer">

            <div className='contact1'>
                <img src="http://focal-x.com/assets/img/iconFotter/logo.png" alt="" />
                <span className='agency'>.agency</span>
                <div className='site'>
                    <p>Head Office</p>
                    <p>Syria - Latakia - grh2+hjx35.5199518</p>
                </div>
            </div>

            <div className='contact2'>
                <span className='sales'>Sales</span>
                <span><a href="http://contact@focal-x.com">contact@focal-x.com</a></span>
                <span> <a href="tel:+963 953 666 056">+963 953 666 056</a></span>
                <span className='public'>Public Relations</span>
                <span> <a href="http://pr@focal-x.com">pr@focal-x.com</a></span>
                <span> <a href="tel:+963 953 666 052">+963 953 666 052</a>
                </span>
            </div>

            <div className='contact3'>
                <span className='customer'>Customer Support</span>
                <span><a href="http://info@focal-x.com">info@focal-x.com</a></span>
                <span> <a href="+963 953 666 054">+963 953 666 054</a></span>
                <span className='human'>Human Resources</span>
                <span> <a href="hr@focal-x.com">hr@focal-x.com</a></span>

            </div>

            <div className='contact4'>
                <span className='useful'>Useful Links</span>
                <span>Clients & Partners</span>
                <span> Check Certificat ID</span>
                <span>Check for employee</span>
                <span> Our Brand ID guidlines</span>
            </div>

            <div className='contact5'>
                <span className='touch'>Keep In Touch</span>

<a href="http://"><FontAwesomeIcon icon={faFacebook} /></a>
<a href="http://"><FontAwesomeIcon icon={faBehance} /></a>
<a href="http://"><FontAwesomeIcon icon={faInstagram} /></a>
<a href="http://"><FontAwesomeIcon icon={faTwitter} /></a>
<a href="http://"><FontAwesomeIcon icon={faLinkedin} /></a>
            </div>

        </section><p className='rights'>
                © 2021 - 2023 focal X L.L.C All Right Reserved <span className='liner'></span>
            </p></>
        
    )
}