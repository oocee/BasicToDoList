var tehtavat = [];


window.onload = function(){
  if(JSON.parse(localStorage.getItem("todo")!=null)){
    tehtavat = JSON.parse(localStorage.getItem("todo"));
    show(); 
  }
}

// this refresh view after selecting between select options.
document.getElementById('show').addEventListener("change", function(){
  show();
});

//this function adds item to array and if item is too short (<1 characters) it gives alert and change border of input field red.
function lisaa() {
  if (document.querySelector(".lisaatxt").value.length > 0 && document.querySelector(".lisaatxt").value.length < 40) {
    if(document.querySelector(".lisaatxt").value.trim() !=""){
      tehtavat.push((document.querySelector(".lisaatxt").value.trim()));
      if(localStorage.getItem("todo")==null){
        localStorage.setItem("todo", JSON.stringify(tehtavat));
      }
      else {
        localStorage.setItem("todo", JSON.stringify(tehtavat));
      }
      show(); 
    }
    document.querySelector(".lisaatxt").style.border = 'none';
  }
  else {
    document.querySelector(".lisaatxt").style.border = "2px solid red";
    alert("String too short");
  }
  cleartxt();
}

//This function clears input field.
function cleartxt() {
  document.querySelector(".lisaatxt").value = '';
}

//this function is used delete items from list.
function poista(index) {
  tehtavat.splice(index, 1);
  if(localStorage.getItem("todo")==null){
    localStorage.setItem("todo", JSON.stringify(tehtavat));
  }
  else {
    localStorage.setItem("todo", JSON.stringify(tehtavat));
  }
  show(); 
}

//this function is used to add and deletet strikes from items.
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
  show();  
}

//Function that allows button to be used with enter key.
document.querySelector(".lisaatxt").addEventListener("keypress", function(event) {
  if (event.keyCode === 13) {
    document.querySelector(".nappi").click()
  }
});

// This function is used to count how many items are left which does not iclude <strikes>.
function items() {
  var a = 0;
    for (var i = 0; i < tehtavat.length; i++) {
      if (!tehtavat[i].includes("<strike>")) {
        a++;
      }
    }
  document.querySelector(".itemsl").innerHTML= "Items left: " + a;
}

// This function shows how many characters are left to use in typing box <input>
function maara(obj) {
    var max = 20;
    document.getElementById("quan").innerHTML = obj.value.length + "/20";
  }

// this function is used to show chosen view.
function show() {
  var a = document.getElementById('show');
  var b = a.value;
    if (b == 'all') {
      nayta();
    }
    else if (b == 'completed') {
      nayta1();
    }
    else if (b == 'active') {
      nayta2();
    }
}

function nayta(){
  document.querySelector(".lista").innerHTML ="";
  for(var i = 0; i < tehtavat.length; i++ ) {
    document.querySelector(".lista").innerHTML +="<center><div class = 'tehtava'>"+tehtavat[i]+ "</div>" + "<img src='img/V.png' id='vMark' onclick='valmis("+i+")'>"+"<img src='img/X.png' id='xMark' onclick='poista("+i+")'></center>"
  }
  items();
}

function nayta1() {
  document.querySelector(".lista").innerHTML ="";
  for(var i = 0; i < tehtavat.length; i++ ) {
      if (tehtavat[i].includes("<strike>")) {
          document.querySelector(".lista").innerHTML +="<center><div class = 'tehtava'>"+tehtavat[i]+ "</div>" + "<img src='img/V.png' id='vMark' onclick='valmis("+i+")'>"+"<img src='img/X.png' id='xMark' onclick='poista("+i+")'></center>"
        }
      }
  items();
}
function nayta2() {
  document.querySelector(".lista").innerHTML ="";
  for(var i = 0; i < tehtavat.length; i++ ) {
      if (!tehtavat[i].includes("<strike>")) {
          document.querySelector(".lista").innerHTML +="<center><div class = 'tehtava'>"+tehtavat[i]+ "</div>" + "<img src='img/V.png' id='vMark' onclick='valmis("+i+")'>"+"<img src='img/X.png' id='xMark' onclick='poista("+i+")'></center>"
        }
      }
  items();
}
