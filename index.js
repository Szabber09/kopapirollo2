/* 1. Az új játék gombra kattintva legyen új játékterünk */

/* Ha a játékos a kő/papír/olló gombokra kattint, akkor a megfelelő kép jelenjen meg */

const ujJatekGomb=document.getElementById("ujjatek");
const jatekTer=document.getElementsByClassName("jatekter");

console.log(jatekTer)
ujJatekGomb.addEventListener("click", megjelenit);

function megjelenit(){
    const htmlKod=`
    <div id="gep">
        <h2>A gép tippje</h2>
        <div class="kep">
          <img src="kepek/placeholder.jpg" alt="kopapriollo" />
        </div>
      </div>
      <div id="jatekos">
        <h2>A Játékos tippje</h2>
        <div class="gombok">
          <button id="ko">K</button>
          <button id="papir">P</button>
          <button id="ollo">O</button>
        </div>
        <div class="kep">
          <img src="kepek/placeholder.jpg" alt="kopapriollo" />
        </div>
      </div>
      `
    jatekTer[0].innerHTML=""
    jatekTer[0].insertAdjacentHTML("beforeend", htmlKod)
    const gombElemek=document.querySelectorAll(".gombok button") /* listát kapunk */
    gombElemek[0].addEventListener("click", kivalaszt)
    gombElemek[1].addEventListener("click", kivalaszt)
    gombElemek[2].addEventListener("click", kivalaszt)
    
}

function kivalaszt(event){
  const kep=document.querySelector("#jatekos img")
  console.log(kep)
  console.log(event.target.id)
  kep.src=`kepek/${event.target.id}.PNG`
  gepvalasztas(event.target.id)
}
const tipplista=["ko","papir","ollo"]
function gepvalasztas(jValasztasa){
  const kep=document.querySelector("#gep img")
  console.log(kep)
  let veletlen=Math.floor(Math.random()*3)
  console.log(veletlen)
  let gepTipp=tipplista[veletlen]
  kep.src=`kepek/${gepTipp}.PNG`
  ellenorzes(veletlen,jValasztasa)
}

function ellenorzes(veletlen, jValasztasa){
  let f1 = 

}