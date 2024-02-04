const rgb_org = document.querySelector('.rgb');
const boxs = document.querySelector('.boxs');
const border = document.querySelectorAll('.border');
const arman = document.querySelector('.arman');
let R = Math.floor(Math.random()* 256) ; 
let G = Math.floor(Math.random()* 256) ; 
let B = Math.floor(Math.random()* 256) ; 




boxs.innerHTML+=`<div class="border" style="background-color:rgb( ${R} , ${G} , ${B} ) "></div>`
for (let i = 0; i < 8; i++) {
      let r = Math.floor(Math.random()* 256); 
      let g = Math.floor(Math.random()* 256); 
      let b = Math.floor(Math.random()* 256);
      rgb_org.innerHTML= `rgb : ${R} , ${G} , ${B}`;
      boxs.innerHTML+=`<div class="border" style="background-color:rgb( ${r} , ${g} , ${b} ) "></div>`
         
   };

   boxs.addEventListener(`click` , function (e) {
      if(e.target.classList.contains('border')){
         console.log(R,G,B);
     }   
  
  })
  arman.style.background = `rgb(${R}, ${G}, ${B})`;




