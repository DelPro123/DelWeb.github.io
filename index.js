
//----------------------navbar function--------------
var nav = document.querySelector(".navbar_content");
function hamburger_nav(){
    if ( nav.style.display === "none") {
        nav.style.display = "block";
        nav.style.display = "flex";
      } else {
        nav.style.display = "none";
      }
}
function home(){
  WIDTH_LIMIT=1023;
  var currentWidth = window.innerWidth;
  if (currentWidth > WIDTH_LIMIT) {
    nav.style.display = 'block';
    nav.style.display = 'flex';
  } else {
      nav.style.display = 'none';
  }
}

function project(){
  WIDTH_LIMIT=1023;
  var currentWidth = window.innerWidth;
  if (currentWidth > WIDTH_LIMIT) {
    nav.style.display = 'block';
    nav.style.display = 'flex';
  } else {
      nav.style.display = 'none';
  }
}
function skills(){
  WIDTH_LIMIT=1023;
  var currentWidth = window.innerWidth;
  if (currentWidth > WIDTH_LIMIT) {
    nav.style.display = 'block';
    nav.style.display = 'flex';
  } else {
      nav.style.display = 'none';
  }
}
function contact(){
  WIDTH_LIMIT=1023;
  var currentWidth = window.innerWidth;
  if (currentWidth > WIDTH_LIMIT) {
    nav.style.display = 'block';
    nav.style.display = 'flex';
  } else {
      nav.style.display = 'none';
  }
}
window.addEventListener('resize', function (e) {
  LIMIT=10000;
  var currentWidth = window.innerWidth;
  var e = document.getElementById('form-search');
  if (currentWidth<=LIMIT) {
    e.style.display = 'block'
  }
});

//----------------------bug cursor animatio--------------

let cursor=document.querySelector(".cursor");
document.body.onmousemove=function(e){
    let X=e.pageX;
    let Y=e.pageY;
    let x= (cursor.getBoundingClientRect().left)+(cursor.clientWidth /2);
    let y= (cursor.getBoundingClientRect().top)+(cursor.clientHeight /2);
    let radian= Math.atan2(X-x, Y-y);
    let rot = (radian * 180/Math.PI * -1)+ 270;
    cursor.style.transform = "rotate("+rot+"deg)";
    cursor.style.left= X +"px";
    cursor.style.top=  Y +"px";
}



const text = document.querySelector(".dev");
const textload=()=>{
  setTimeout(()=>{
    text.textContent = "Designer.";
  },0);
  setTimeout(()=>{
    text.textContent = "Developer.";
  },4000);
}
textload();
setInterval(textload,8000);



