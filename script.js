const screenDisplay = document.querySelector('#display-screen');
const posneg = document.querySelector(".posneg")
const percent = document.querySelector(".percent")
const div = document.querySelector(".div")
const seven = document.querySelector(".seven")
const eight = document.querySelector(".eight")
const nine = document.querySelector(".nine")
const multi = document.querySelector(".multi")
const four = document.querySelector(".four")
const five = document.querySelector(".five")
const six = document.querySelector(".six")
const minus = document.querySelector(".minus")
const one = document.querySelector(".one")
const two = document.querySelector(".two")
const three = document.querySelector(".three")
const add = document.querySelector(".add")
const zero = document.querySelector(".zero")
const dot = document.querySelector(".dot")
const equal = document.querySelector(".equal")
const AC = document.querySelector(".ac")
const keyboard = document.querySelector(".keyboard")
let c= ""


// keyboard.addEventListener('click',(e)=>{
//     c +=  e.target.innerText
//     screenDisplay.innerText =c;

// })

AC.addEventListener('click',()=>{
    screenDisplay.innerText="0"
    c = ""
})


dot.addEventListener('click',(e)=>{
    c +=  e.target.innerText
    screenDisplay.innerText =c;
})

zero.addEventListener('click',(e)=>{
    // console.log(typeof (e.target.innerText));
    c +=  e.target.innerText
   screenDisplay.innerText =c;
})

one.addEventListener('click',(e)=>{
    // console.log(typeof (e.target.innerText));
    c +=  e.target.innerText
   screenDisplay.innerText =c;
})

two.addEventListener('click',(e)=>{
    // console.log(typeof (e.target.innerText));
    c +=  e.target.innerText
   screenDisplay.innerText = c;
})


three.addEventListener('click',(e)=>{
    // console.log(typeof (e.target.innerText));
    c +=  e.target.innerText
   screenDisplay.innerText =c;
})

four.addEventListener('click',(e)=>{
    // console.log(typeof (e.target.innerText));
    c +=  e.target.innerText
   screenDisplay.innerText =c;
})
five.addEventListener('click',(e)=>{
    // console.log(typeof (e.target.innerText));
    c +=  e.target.innerText
   screenDisplay.innerText =c;
})

six.addEventListener('click',(e)=>{
    // console.log(typeof (e.target.innerText));
    c +=  e.target.innerText
   screenDisplay.innerText =  c;
})
seven.addEventListener('click',(e)=>{
    // console.log(typeof (e.target.innerText));
    c +=  e.target.innerText
   screenDisplay.innerText = c;
})
eight.addEventListener('click',(e)=>{
    // console.log(typeof (e.target.innerText));
    c +=  e.target.innerText
   screenDisplay.innerText = c;
})
nine.addEventListener('click',(e)=>{
    // console.log(typeof (e.target.innerText));
    c +=  e.target.innerText
   screenDisplay.innerText = c;
})

add.addEventListener('click',(e)=>{
    // console.log(typeof (e.target.innerText));
    c +=  e.target.innerText
   screenDisplay.innerText =c  ;
})

multi.addEventListener('click',(e)=>{
    // console.log(typeof (e.target.innerText));
    c +=  e.target.innerText
   screenDisplay.innerText =c ;
})
div.addEventListener('click',(e)=>{
    // console.log(typeof (e.target.innerText));
    c +=  e.target.innerText
   screenDisplay.innerText =c ;
})
minus.addEventListener('click',(e)=>{
    // console.log(typeof (e.target.innerText));
    c +=  e.target.innerText
   screenDisplay.innerText =c ;
})
percent.addEventListener('click',(e)=>{
    // console.log(typeof (e.target.innerText));
    c +=  e.target.innerText
   screenDisplay.innerText =c ;
})





equal.addEventListener('click',(e)=>{
    //screenDisplay.innerText = ;
   function equality(number){
// ?  some code here to make it work

if( number.split("").includes('+')){

  let temp =( number.split("+"));
  let x = Number(temp[0]);
  let y = Number(temp[1]);

  return (Math.round((x + y)*100))/100
}

else if ( number.split("").includes('*')){

    let temp =( number.split("*"));
    let x = Number(temp[0]);
    let y = Number(temp[1]);
  
    return (Math.round((x * y)*100))/100
  }

else if ( number.split("").includes('/')){

    let temp =( number.split("/"));
    let x = Number(temp[0]);
    let y = Number(temp[1]);
  
    return (Math.round((x / y)*100))/100
  }
else if ( number.split("").includes('-')){

    let temp =( number.split("-"));
    let x = Number(temp[0]);
    let y = Number(temp[1]);
  
    return ((x - y));
  }
  
else if ( number.split("").includes('%')){

    let temp =( number.split("%"));
    let x = Number(temp[0]);
    let y = Number(temp[1]);
  
    return  (Math.round((x * y/100)*100))/100
  }

   }
//    equality(c)
   let temp = equality(c);
   c = temp
   screenDisplay.innerText =  c
//    
})