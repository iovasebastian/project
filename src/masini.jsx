import './masini.css';
import luxury from "./icon-luxury.svg";
import suv from "./icon-suvs.svg";
import sedan from "./icon-sedans.svg";


const Masini = () =>{
    {/*document.getElementById("buton2").onclick = function () {
        window.location = "http://www.youtube.com";
    };
    document.getElementById("buton3").onclick = function () {
        window.location = "http://www.youtube.com";
    };
    let Sedan = document.getElementById("sedan");
    let Suv = document.getElementById("suv");
    var culoareSuv = getComputedStyle(Suv).backgroundColor;
    const btn = document.getElementById("buton");
    btn.addEventListener('click', function onClick(event){
        Sedan.style.backgroundColor = culoareSuv;
    });*/}
    return(
        <div class = "container-masini">
    <div class = "sedan" id = "sedan">
      <img class = "inner"src = {sedan} alt = "poza_sedan"/>
      <h1 class = "inner">Sedans</h1>
      <p class = "inner">Choose a sedan for its affordability and excellent fuel economy. Ideal for cruising in the city 
        or on your next road trip.</p>
      <div id = "buton" class = "buton-masini unu">
        <p class = "learn">Learn More</p>
      </div>
    </div>
    <div class = "suv" id = "suv">
      <img class = "inner" src = {suv} alt = "poza_suv"/>
      <h1 class = "inner">SUVs</h1>
      <p class = "inner">Take an SUV for its spacious interior, power, and versatility. Perfect for your next family vacation 
        and off-road adventures.</p>
      <div id = "buton2" class = "buton-masini doi">
        <p class = "learn">Learn More</p>
      </div>
    </div>
    <div class = "luxury">
      <img class ="inner" src = {luxury} alt = "poza_luxury"/>
      <h1 class = "inner">Luxury</h1>
      <p class = "inner">Cruise in the best car brands without the bloated prices. Enjoy the enhanced comfort of a luxury 
        rental and arrive in style.
      </p>
      <div id = "buton3" class = "buton-masini trei">
        <p class = "learn">Learn More</p>
      </div>
    </div>
  </div>
    )
}
export default Masini;