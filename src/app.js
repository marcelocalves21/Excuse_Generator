// /* eslint-disable */
// import "bootstrap";
// import "./style.css";

// import "./assets/img/rigo-baby.jpg";
// import "./assets/img/4geeks.ico";


const randonNumber = (max) => {
  let random = Math.floor(Math.random() * max )
  return random
}

const excuseGenerator = () => {
  let who = ['The dog','My grandma','His turtle','My bird'];
  let action = ['ate','peed','crushed','broke'];
  let what = ['my homework', 'the keys', 'the car'];
  let when = ['before the class','right on time','when I finished','during my lunch','while I was praying'];
  // let excuse = [who[randonNumber(who.length)], action[randonNumber(action.length)], what[randonNumber(what.length)], when[randonNumber(when.length)]]
  let excuse = `${who[randonNumber(who.length)]} ${action[randonNumber(action.length)]} ${what[randonNumber(what.length)]} ${when[randonNumber(when.length)]}`
  document.getElementById("excuse").innerHTML = excuse
}