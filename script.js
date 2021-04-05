var nav = document.body.querySelector(".nav");
var display = document.body.querySelector(".display");

var pages = [
  {
    name:"Home",
    content:"The Home "
  },
  {
    name:"About",
    content:"none"
  },
  {
    name:"Interact",
    content:"none"
  }
]

for(var i=0; i<pages.length; i++){
  createPage(pages[i]);
}

function createPage(pg){
  var button = document.createElement("button");
  button.addEventListener("click", function(){
    contentWrite(pg.content, pg.name);
  })
  button.innerHTML=pg.name;
  nav.appendChild(button);
}
function contactPage(pg){
  var header = document.createElement("h1");
  header.innerHTML="Press The Button";
  display.appendChild(header);
}
function contentWrite(wd,pg){
  display.innerHTML="";
  if(pg!=="Interact"){
    display.innerHTML=wd;
  }else{
    contactPage()
  }
  
}


function contactPage2(wd2){
  var header2 = document.createElement("h1");
  header2.innerHTML="About";
  display.appendChild(header2);
}
function createPage2(pg){
  var button2 = document.createElement("button2");
  button2.addEventListener("click", function(){
    contentWrite(pg.content, pg.name);
  })
  button2.innerHTML=pg.name;
  nav.appendChild(button2);
}
function contentWrite2(wd,pg){
  display.innerHTML="";
  if(pg!=="About"){
    display.innerHTML=wd;
  }else{
    contactPage2()
  }
  
};


var count=0
document.body.querySelector(".counter").innerHTML=count;
document.body.querySelector(".but").addEventListener("click", function(){
  count=count+1
  document.body.querySelector(".counter").innerHTML=count;
})

contentWrite(pages[0].content, "Home");