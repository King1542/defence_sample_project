document.addEventListener("DOMContentLoaded",function(){
// storing a class in a variable so that we use only variable name further
    const heroBtn=document.querySelector(".hero button");

    const heroSection=document.querySelector(".hero");

    heroBtn.addEventListener("click",()=>{

        alert("Welcome to Indian defence Website");

        heroSection.querySelector("h1").textContent="Join Indian Defence Today";

        heroBtn.textContent="Explore Again";
        
    })
// using loop to change color of the element
    const cards = document.querySelectorAll(".card h3");

    const colors = ["#8a0000ff","#2e0092ff","#115e00ff"];

    cards.forEach((i, index)=>{
        
        i.style.color = colors[index];

    })

    const notice = document.querySelector("aside p");

    let visible  = true;

    setInterval (()=>{

        notice.style.visibility=visible?"hidden":"visible";

        visible=!visible;

    },100);



// ==================================
// form submsission validation
// ==================================

const form = document.querySelector("form");

const genderInputs = document.querySelectorAll('input[name="gender"]');

const divisionSelect = document.querySelector("select");

form.addEventListener("submit", function(e){
    
    e.preventDefault();

    const name = form.querySelector('input[type="Text"]').value;
    
    const email = form.querySelector('input[type="email"]').value;

    if(name==="" || email===""){

        alert("Please fill all required fields.");

        return;

    }
 
    let gender ="";

    genderInputs.forEach(input=>{

        if(input.checked){

            gender = input.nextSibling.textContent.trim();
            
        }
    })

    if(gender==="male" && divisionSelect.value==="Army"){

        alert(`Army is good for you, ${name}!`);

    } else if(gender==="Female"&& divisionSelect.value==="Navy"){

        alert(`Navy is good for you, ${name}!`);

        }

     else{

        alert(`Your Form has been submitted, ${name}!`);
        }

    form.reset();
   


})















})