import home from "../assets/home.jpeg";
import "./home.css"
function Home (){
    return(
<section className="home" id="home">
    <img src={home} alt="cafe" className="home-img"></img>
    <div className="home-content">
        <h1>good cafees,<br />good company</h1>
        <p>
            we roast in-house,sorce from all farms
            and bake everything fresh every morning
        </p>
       <button
  onClick={() => {
    document.getElementById("menu").scrollIntoView({
      behavior: "smooth",
    });
  }}
>
  See Our Menu
</button>
    </div>

</section>
    )
}
export default Home;