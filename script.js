var btt = "off"
var troca = document.getElementById("button")

function darkMode(){
  document.body.classList.toggle('dark')
  if(btt == "off"){
  troca.setAttribute("src", "https://cdn-icons-png.flaticon.com/512/702/702471.png");
  btt = "on"
  } else if(btt == "on"){
  troca.setAttribute("src", "https://cdn-icons-png.flaticon.com/512/606/606807.png");
    btt = "off"
  } 
}