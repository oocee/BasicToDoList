var tehtavat = [];


window.onload = function(){
  if(JSON.parse(localStorage.getItem("todo")!=null)){
    tehtavat = JSON.parse(localStorage.getItem("todo"));
    nayta();
  }
}

function lisaa() {
  if (document.querySelector(".lisaatxt").value.length > 5 && document.querySelector(".lisaatxt").value.length < 40) {
    if(document.querySelector(".lisaatxt").value.trim() !=""){
      tehtavat.push((document.querySelector(".lisaatxt").value.trim()));
      if(localStorage.getItem("todo")==null){
        localStorage.setItem("todo", JSON.stringify(tehtavat));
      }
      else {
        localStorage.setItem("todo", JSON.stringify(tehtavat));
      }
      nayta();
    }
  }
  else {
    alert("annettu merkkijone liian lyhyt")
  }
  cleartxt();
}

//This function clears input field.
function cleartxt() {
  document.querySelector(".lisaatxt").value = '';
}

function nayta(){
  document.querySelector(".lista").innerHTML ="";
  for(var i = 0; i < tehtavat.length; i++ ) {
    document.querySelector(".lista").innerHTML +="<center><div class = 'tehtava'></div>"+tehtavat[i]+"<button class='yliviivaa' onclick='valmis("+i+")'></button>"+"<button class='poista' onclick='poista("+i+")'></button></center>"
  }
}

function poista(index) {
  tehtavat.splice(index, 1);
  if(localStorage.getItem("todo")==null){
    localStorage.setItem("todo", JSON.stringify(tehtavat));
  }
  else {
    localStorage.setItem("todo", JSON.stringify(tehtavat));
  }
  nayta();
}

function valmis(index) {
  if (tehtavat[index].includes("<strike>")) {
    tehtavat[index] = tehtavat[index].replace("<strike>", "");
    tehtavat[index] = tehtavat[index].replace("</strike>", "");
  }
  else {
    tehtavat[index] = "<strike>" + tehtavat[index] + "</strike>";
  }
  if(localStorage.getItem("todo")==null){
    localStorage.setItem("todo", JSON.stringify(tehtavat));
  }
  else {
    localStorage.setItem("todo", JSON.stringify(tehtavat));
  }
  nayta();  
}

//Function that allows button to be used with enter key.
document.querySelector(".lisaatxt").addEventListener("keypress", function(event) {
  if (event.keyCode === 13) {
    document.querySelector(".nappi").click()
  }
});

