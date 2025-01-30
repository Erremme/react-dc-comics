export default function ButtonComponent({children, text="click me", type}){
    return(
           <button className={`btn ${type}`}>{children}{text}</button>
    );
}