import ComicsList from "./ComicsList";
import SectionJumbotron from "./SectionJumborton";


export default function Main (){
    return (
            <main>
                <SectionJumbotron image = "./img/jumbotron.jpg" />
                <ComicsList />
                
            </main>
    );
}