import { faBehance, faFacebook, faInstagram, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faX } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
export default function Hero() {
    return (


        <>
            <section className="hero">
                <div className="side1">
                    <h2>Hey !! Mario still here, But don't forget that</h2>
                    <p>At focal X agency, we are working to build somthing different. Here you’ll have a group of creative people who specialize in:
                        Branding, Digital Marketing, Web/App Development, Ui/Ux
                        Content creation, Graphic design, Social media and More........
                        So you can take a tour in our website, OR just <span>Press Start :</span></p>
                </div>



                <section>
                    <div className="imges">
                        <img className="img1" src="	http://focal-x.com/assets/img/home/fotter.svg" alt="" />
                        <img className="img2" src="	https://www.focal-x.com/assets/img/home/gamefor-mobile.png" alt="" />
                        <img className="img3" src="https://www.focal-x.com/assets/img/home/pattren.png" alt="" />
                    </div>


                    <div className="links">

                        <div className="icons">
                            <a href="http://"><FontAwesomeIcon icon={faX} /></a>
                            <a href="http://"><FontAwesomeIcon icon={faInstagram} /></a>
                            <a href="http://"><FontAwesomeIcon icon={faLinkedin} /></a>
                            <a href="http://"><FontAwesomeIcon icon={faBehance} /></a>
                            <a href="http://"><FontAwesomeIcon icon={faFacebook} /></a>

                        </div>
                        <div className="copyright">2021 - 2023 focal X agency All Right Reserved</div>
                    </div>



                </section>
            </section>
        </>


    )
}