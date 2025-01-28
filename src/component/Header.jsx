export default function Header (){
    return(
     <header>
        <div className="container">
           <div className="row-header d-flex">
              <div className="col-left ">
                <img className="img-fluid" src="../img/dc-logo.png" alt="Logo Dc" />
              </div>
              <div className="col-right d-flex">
                 <nav className="header-navbar">
                    <ul className="d-flex">
                        <li><a href="#">characters</a></li>
                        <li><a className="active" href="#">comics</a><div className="line-bar"></div></li>
                        <li><a href="#">movies</a></li>
                        <li><a href="#">tv</a></li>
                        <li><a href="#">games</a></li>
                        <li><a href="#">collectibles</a></li>
                        <li><a href="#">videos</a></li>
                        <li><a href="#">fans</a></li>
                        <li><a href="#">news</a></li>
                        <li><a href="#">shop</a></li>
                        
                    </ul>
                 </nav>
              </div>

            </div> 
        </div>     
    </header>
    );
}