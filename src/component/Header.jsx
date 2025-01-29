import links from "../data/headerLinks";

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
                       {links.map((link)=> {
                        return (
                           <li key={link.id}>
                              <a href={link.url} className={link.current ? "active" : ""} >{link.text}</a>
                           </li>
                            
                        )
                       })}
                        
                    </ul>
                 </nav>
              </div>

            </div> 
        </div>     
    </header>
    );
}