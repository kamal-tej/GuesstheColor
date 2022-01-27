let start=0;
let once= 0;
let square=[]
let r=0;
let g=0;
let b=0;
let z=0;
let container=document.getElementById("container");
function easy(){
  success.textContent="";
  let container=document.getElementById("container");
  var i=0;
  if(square.length>3){
    for(var k=5;k>=3;k--){square[k].classList.remove("square"); square.pop();}
  }
  for(i=0;i<3;i++){
    if(square.length<3){
    square.push(document.createElement('div'));
    square[i].innerHtml="";
    container.appendChild(square[i]);
    square[i].classList.add("square");
    getRandomColors();
    square[i].style.backgroundColor="rgb("+r+","+g+","+b+")";
  }
  else{
    if(square.length==3){
      for(let i=0;i<3;i++){
        getRandomColors();
        square[i].style.backgroundColor="rgb("+r+","+g+","+b+")";
      }
    }
  }
  }
  operate();
  generate();
}
function hard(){
  easy();
  let container=document.getElementById("container");
  var i=0;
  for(i=3;i<6;i++){
    if(i==3 && once==0){
        let br=document.createElement('br');
        container.appendChild(br);
        once=1;
    }
    if(square.length<6) {
    square.push(document.createElement('div'));
    square[i].setAttribute('id',i);
    console.log(square);
    square[i].innerHtml="";
    container.appendChild(square[i]);
    square[i].classList.add("square");
    getRandomColors();
    square[i].style.backgroundColor="rgb("+r+","+g+","+b+")";
  }
  else{
    if(square.length==6){
      for(let i=0;i<6;i++){
        getRandomColors();
        square[i].style.backgroundColor="rgb("+r+","+g+","+b+")";
      }
    }
  }
  }
  operate();
  generate();
}
function getRandomColors(){
  r=Math.ceil(Math.random()*256);
  g=Math.ceil(Math.random()*256);
  b=Math.ceil(Math.random()*256);
}
function operate(){
  for(let i=0;i<square.length;i++){
    square[i].addEventListener('click', () => {
      console.log('hi');
      success.style.fontSize="500%";
      success.style.textAlign="center";
      success.style.fontFamily="Lucida Console";
      if(document.getElementById("rgb-values-display").textContent==square[i].style.backgroundColor){
            success.textContent="won";
            success.style.color=square[i].style.backgroundColor;
            for(let j=0;j<square.length;j++){
              square[j].style.backgroundColor=square[i].style.backgroundColor;
            }
      }
      else{
            square[i].style.backgroundColor="black";
      }
    });
  }
}
function colorChange() {
  success.textContent="";
  for(let i=0;i<square.length;i++){
    getRandomColors();
    square[i].style.backgroundColor="rgb("+r+","+g+","+b+")";
  }
  generate();
}
function generate(){
  if(start==0){intialize(); start=1;}
  let random=Math.floor(Math.random()*square.length);
  document.getElementById("rgb-values-display").textContent=square[random].style.backgroundColor;
}
function intialize(){
  let body =document.getElementById("body");
  let p=document.createElement('p')
  body.appendChild(p);
  p.setAttribute("id","success");
  let success=document.getElementById("success");
}
