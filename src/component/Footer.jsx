import footerLinks from "../data/footerLinks";

export default function Footer (){
    return (
            <footer>
                <div className="footer-top">
                    <div className="container">
                        <nav className="footer-nav ">
                          <ul className="d-flex">
                                  <li><img className="img-fluid" src="../img/buy-comics-digital-comics.png" alt="digital comics" /><a href="#">digital comics</a></li>
                            <li><img className="img-fluid" src="../img/buy-comics-merchandise.png" alt="merchandise" /><a href="#">dc merchandise</a></li>
                            <li><img className="img-fluid" src="../img/buy-comics-subscriptions.png" alt="subscriptions" /><a href="#">subscription</a></li>
                            <li><img className="img-fluid" src="../img/buy-comics-shop-locator.png" alt="shop" /><a href="#">comic shop locator</a></li>
                            <li><img className="img-fluid" src="../img/buy-dc-power-visa.svg" alt="power visa" /><a href="#">dc power visa</a></li>
                            
                          </ul>
                          
                        </nav>
                    </div>
                </div>  
                <div className="footer-center">
                  <div className="container">
                    <div className="footer-center-row d-flex">
                       <div className="col-left d-flex">


                        {footerLinks.map((footerObj)=> {
                          return (
                             
                                <nav key={footerObj.id}>
                                  <h5>{footerObj.title}</h5>
                                  <ul>
                                    {footerObj.links.map((link)=>{
                                      return(
                                       <li key={link.id}>
                                        <a href={link.url}>{link.text}</a>
                                       </li>
                                       )
                                    })}
                                  </ul>
                                </nav>
                            )
                        })}

                      </div> 
                      <div className="col-right">
                         
                        </div>            
                    </div>
                  </div>
                </div>
                <div className="footer-bottom">
                  <div className="container">
                    <div className="row d-flex">
                      <div className="col-left">
                        <button> SIGN-UP NOW!</button> 
                      </div>
                      <div className="col-right">
                        <nav className="d-flex ">
                          <ul className="d-flex">
                             <li><a href="#">FOLLOW US</a></li>
                             <li><a href="#"><img src="../img/footer-facebook.png" alt="Logo Facebook" /></a></li>
                             <li><a href="#"><img src="../img/footer-twitter.png" alt="Logo Facebook" /></a></li>
                             <li><a href="#"><img src="../img/footer-youtube.png" alt="Logo Facebook" /></a></li>
                             <li><a href="#"><img src="../img/footer-pinterest.png" alt="Logo Facebook" /></a></li>
                             <li><a href="#"><img src="../img/footer-periscope.png" alt="Logo Facebook" /></a></li>
                          </ul>
                        </nav>
                      </div>

                    </div>
                  </div>
                </div>
            </footer>
    );
}