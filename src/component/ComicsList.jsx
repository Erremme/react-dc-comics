import comics from "../data/mainComics";
import ComicsCard from "./ComicsCard";
import ButtonComponent from "./ButtonComponent";

export default function ComicsList(){
   return(
    <section className="section-comics">
    <div className="container">
        <div className="row d-flex">
            <div className="current-series">
                <h4>CURRENT SERIES</h4>
            </div>
            {comics.map((comic)=>{
                return(
                        <div className="col" key={comic.id}>
                            <ComicsCard 
                                thumb={comic.thumb} 
                                series={comic.series} 
                            />
                        </div>
                )
            })}
         
        </div>
        <div className="microsection-button text-center">
            <ButtonComponent text="LOAD MORE" type="primary" />
        </div>
        
    </div>
</section>
   ) 
}