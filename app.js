const navSlide = () => {
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.nav-links');
    const navLinks = document.querySelectorAll('.nav-links li');
    const texto = document.querySelector('.texto11');
    const wheel = document.getElementById('wheel-size');

    burger.addEventListener('click',() =>{
        nav.classList.toggle('nav-active')

        navLinks.forEach((link, index) =>{
            if(link.style.animation){
                link.style.animation = '';
                texto.style.display = "block";
                wheel.style.display = "block";
            }else{
                link.style.animation = `navLinkFade 0.5s ease forwards ${ index / 7 + 0.5}s`;
                texto.style.display = "none";
                wheel.style.display = "none";
            // console.log(index / 5);
            }
    
        });
        burger.classList.toggle('toggle');
    });

    
    
}

function app(){
    navSlide();
}

app();



const logo = document.querySelectorAll('#caucho-logo path');


for(let i = 0; i < logo.length; i++){
    console.log(`letter ${i} is ${logo[i].getTotalLength()}`)
}




var linkss = document.querySelectorAll('a[href*="#"]');

//assign a click event to all the # links
for(var l = 0; l < linkss.length; l++) {
    linkss[l].addEventListener('click', scrollMe);
}

function scrollMe(e) {
    e.preventDefault();
     //needed in order for the scroll to work

    var hash = e.target.hash;
   

    //check if hash is not empty
    if(hash) {   

        // Scroll to that element
        document.getElementById('aceitess').scrollIntoView({ 
           behavior: 'smooth'
        });

        
    }else{
        document.getElementById('redes').scrollIntoView({ 
            behavior: 'smooth'
         });
    }
}


