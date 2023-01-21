import preloader from "../../img/Spinner-0.7s-237px.svg"

const Preloader = () => {
    return ( 
        <div className="preloader">
            Loading...
            <img src={preloader} alt="" />
        </div>
        
     );
}
 
export default Preloader;