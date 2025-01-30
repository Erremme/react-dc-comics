export default function ComicsCard({series , thumb,}){
    return(
           
            <div className="card">
                <div className="card-img">
                    <img src={thumb} alt={series} />
                </div>
                <div className="card-text">
                    <h6>{series}</h6>
                </div>
             </div>
                
    )
}