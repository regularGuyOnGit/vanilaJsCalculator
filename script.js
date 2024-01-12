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
const mess = document.querySelector(".message")







// keyboard.addEventListener('click',(e)=>{
    //     c +=  e.target.innerText
    //     screenDisplay.innerText =c;
    
    // })




    let c= ""
    const operators = ['+',"-","*","/","%","."]

  
    
AC.addEventListener('click',()=>{
    screenDisplay.innerText="0"
    c = ""
})
posneg.addEventListener("click",()=>{
    // let length = c.length -1
if ( c == ""){
    return
}
   else if( c.length == 1){
        c = "" ;  
        screenDisplay.innerText = 0;
        return

    }
    c = c.slice(0,c.length -1)
    screenDisplay.innerText =c;
    
    console.log(c);
})


dot.addEventListener('click',(e)=>{

    if(c.slice(-2,-1)== "." || c.slice(-3,-2)== "." || c.slice(-4,-3)== "."  || c.slice(-5,-4)== "."   ){
        return
    }

    let temp = c.slice(-2,-1)
    if(c.slice(-1) === '.' ){
        return 
    }
    c +=  e.target.innerText
    screenDisplay.innerText =c;

    console.log(temp);
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
    let tempArr = [...c]
    console.log(tempArr);
if( c == "" || operators.includes(c.slice(-1)) || tempArr.includes("+") || tempArr.includes("-") || tempArr.includes("*")|| tempArr.includes("/")|| tempArr.includes("%"))    {

    mess.classList.add("messRed")
    mess.innerText = "Please Calulate First!"
   
    setTimeout(()=>{
    mess.innerText = ""
   },3700)

    return 
}
    
    c +=  e.target.innerText
   screenDisplay.innerText =c  ;
})

multi.addEventListener('click',(e)=>{
    let tempArr = [...c]
    if( c == "" || operators.includes(c.slice(-1)) || tempArr.includes("+") || tempArr.includes("-") || tempArr.includes("*")|| tempArr.includes("/")|| tempArr.includes("%") ){
        mess.classList.add("messRed")
        mess.innerText = "Please Calulate First!"
       
        setTimeout(()=>{
        mess.innerText = ""
       },3700)
    
        return 
    }
    // console.log(typeof (e.target.innerText));
    c +=  e.target.innerText
   screenDisplay.innerText =c ;
})
div.addEventListener('click',(e)=>{
    let tempArr = [...c]
    if( c == "" || operators.includes(c.slice(-1)) || tempArr.includes("+") || tempArr.includes("-") || tempArr.includes("*")|| tempArr.includes("/")|| tempArr.includes("%") ){
        mess.classList.add("messRed")
        mess.innerText = "Please Calulate First!"
       
        setTimeout(()=>{
        mess.innerText = ""
       },3700)
    
        return 
    }
    // console.log(typeof (e.target.innerText));
    c +=  e.target.innerText
   screenDisplay.innerText =c ;
})
minus.addEventListener('click',(e)=>{
    let tempArr = [...c]
    if( c == "" || operators.includes(c.slice(-1)) || tempArr.includes("+") || tempArr.includes("-") || tempArr.includes("*")|| tempArr.includes("/")|| tempArr.includes("%") ){
        mess.classList.add("messRed")
        mess.innerText = "Please Calulate First!"
       
        setTimeout(()=>{
        mess.innerText = ""
       },3700)
    
        return 
    }
    // console.log(typeof (e.target.innerText));
    c +=  e.target.innerText
   screenDisplay.innerText =c ;
})
percent.addEventListener('click',(e)=>{
    let tempArr = [...c]
    if( c == "" || operators.includes(c.slice(-1)) || tempArr.includes("+") || tempArr.includes("-") || tempArr.includes("*")|| tempArr.includes("/")|| tempArr.includes("%") ){
        mess.classList.add("messRed")
        mess.innerText = "Please Calulate First!"
       
        setTimeout(()=>{
        mess.innerText = ""
       },3700)
    
        return 
    }
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
   if(temp == undefined){
     c == "" ?    screenDisplay.innerText =  "0" :  screenDisplay.innerText =  c
    return 

   }
   c = String(temp)
   screenDisplay.innerText =  c
//    console.log(typeof c);
//    
})


// console.log(c);