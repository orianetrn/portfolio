window.addEventListener("DOMContentLoaded", (event) => {

    // animation machine à écrire

    const txtAnim = document.querySelector('h2');

    new Typewriter(txtAnim, {
        loop: true ,
        deleteSpeed: 40,
    })
    .changeDelay(40)
    .typeString ('Viens découvrir mes projets réalisés avec :')
    .pauseFor(300)
    .typeString('<span style="color: #01befe"> Photoshop !</span>')
    .pauseFor(1000)
    .deleteChars(11)
    .typeString('<span style="color: #ffdd00"> Illustrator !</span>')
    .pauseFor(1000)
    .deleteChars(13)
    .typeString('<span style="color: #ff7d00"> Adobe XD !</span>')
    .pauseFor(1000)
    .deleteChars(10)
    .typeString('<span style="color: #ff006d"> Indesign !</span>')
    .pauseFor(1000)
    .deleteChars(10)
    .typeString('<span style="color: #59d102"> Premiere Pro !</span>')
    .pauseFor(1000)
    .start()
    
    // carrousel rosignol

const imgs = document.getElementById("img");
const img = document.querySelectorAll ("#img img");

let i=0;

function carrousel(){
    i++;
    if(i > img.length -1){
        i=0;
    }
    imgs.style.transform = `translateX(${-i *530}px)`;
}
setInterval(carrousel, 2000);

// carrousel halloween

const imgs2 = document.getElementById("img2");
const img2 = document.querySelectorAll ("#img img");

let j=0;

function carrousel2(){
    j++;
    if(j > img2.length -1){
        j=0;
    }
    imgs2.style.transform = `translateX(${-j *420}px)`;
}
setInterval(carrousel2, 2000);

// carrousel resto pizza

const imgs3 = document.getElementById("img4");
const img3 = document.querySelectorAll ("#img img");

let k=0;

function carrousel3(){
    k++;
    if(k > img3.length -1){
        k=0;
    }
    imgs3.style.transform = `translateX(${-k *600}px)`;
}
setInterval(carrousel3, 2000);

    // carrousel portfolio

    document.body.onload=function(){
        nbr=6;
        p=0;
        container=document.getElementById("container");
        g=document.getElementById("g");
        d=document.getElementById("d");
        container.style.width = (800*nbr)+"px";
        for(i=0; i<=nbr; i++){
            div=document.createElement("div");
            div.className = "photo";
            div.style.backgroundImage = "url(img"+i+".png)";
            container.appendChild(div); 
        }
    }

    g.onclick=function(){
        if(p<0)
        p++;
        container.style.transform="translate("+p*800+"px)";
        container.style.transition="all 1s ease";
        afficherMasquer();
    }
    
    function afficherMasquer(){
        if(p == -nbr+1)
            d.style.visibility="hidden";
        else
            d.style.visibility="visible";
        if(p == 0)
            g.style.visibility="hidden";
        else
            g.style.visibility="visible";
    }

    d.onclick=function(){
        if(p>-nbr+1)
        p--;
        container.style.transform="translate("+p*800+"px)";
        container.style.transition="all 1s ease";
        afficherMasquer();
    }

})

