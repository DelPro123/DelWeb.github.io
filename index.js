
//----------------------navbar function--------------
var nav = document.querySelector(".navbar_content");
var nav1 = document.querySelector(".navbar_content");
function hamburger_nav(){
    if ( nav.style.display === "none") {
        nav.style.display = "block";
        nav.style.display = "flex";
      } else {
        nav.style.display = "none";
      }
}
function Home(){
  WIDTH_LIMIT=1230;
  var currentWidth = window.innerWidth;
  if (currentWidth > WIDTH_LIMIT) {
    nav.style.display = 'block';
    nav.style.display = 'flex';
  } else {
      nav.style.display = 'none';
  }
}

function Project(){
  WIDTH_LIMIT=1230;
  var currentWidth = window.innerWidth;
  if (currentWidth > WIDTH_LIMIT) {
    nav.style.display = 'block';
    nav.style.display = 'flex';
  } else {
      nav.style.display = 'none';
  }
}
function Skills(){
  WIDTH_LIMIT=1230;
  var currentWidth = window.innerWidth;
  if (currentWidth > WIDTH_LIMIT) {
    nav.style.display = 'block';
    nav.style.display = 'flex';
  } else {
      nav.style.display = 'none';
  }
}
function ABOUT(){
  WIDTH_LIMIT=1230;
  var currentWidth = window.innerWidth;
  if (currentWidth > WIDTH_LIMIT) {
    nav.style.display = 'block';
    nav.style.display = 'flex';
  } else {
      nav.style.display = 'none';
  }
}
function Contact(){
  WIDTH_LIMIT=1230;
  var currentWidth = window.innerWidth;
  if (currentWidth > WIDTH_LIMIT) {
    nav.style.display = 'block';
    nav.style.display = 'flex';
  } else {
      nav.style.display = 'none';
  }
}
window.addEventListener('resize', function (e) {
  LIMIT=1230;
  var currentWidth = window.innerWidth;
   e = document.querySelector('body');
  if (currentWidth>LIMIT) {
    e.style.display = 'block';
    nav.style.display='block';
    nav.style.display='flex';
  }else{
    nav.style.display='none';
  }
});

//----------------------bug cursor animation--------------

let cursor=document.querySelector(".cursor");
document.body.onmousemove=function(event){
    let X=event.pageX;
    let Y=event.pageY;
    let x= (cursor.getBoundingClientRect().left)+(cursor.clientWidth /2);
    let y= (cursor.getBoundingClientRect().top)+(cursor.clientHeight /2);
    let radian= Math.atan2(X-x, Y-y);
    let rot = (radian * 180/Math.PI * -1)+ 270;
    cursor.style.transform = "rotate("+rot+"deg)";
    cursor.style.left= X +"px";
    cursor.style.top=  Y +"px";
}


function Dev(){
const text = document.querySelector(".dev");
const textload=()=>{
  setTimeout(()=>{
    text.textContent = "Designer."
  },0);
  setTimeout(()=>{
    text.textContent = "Developer.";
  },4000);
}
textload();
setInterval(textload,8000);
}
Dev();


function sendmail(){
    var params={
        email:document.getElementById("email").value,
        message:document.getElementById("message").value
    };
    var pattern = /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/;
    const serviceID= "service_a07cxb9";
    const templateID ="template_aft8oy5";
if(params.email.match(pattern)){
  emailjs
  .send(serviceID,templateID,params)
  .then((res) => {
      document.getElementById("email").value="";
      document.getElementById("message").value="";
      console.log(res);
      alert("Thank you for the response");
     
  })
  .catch((err) => console.log(err));
}else{
  alert("Please add a messages or valid email");
}
}




