window.addEventListener("DOMContentLoaded", (event) => {

    const txtAnim = document.querySelector('h2');

    new Typewriter(txtAnim, {
        loop: true,
        deleteSpeed: 40
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
    .deleteChars(14)
    .typeString('<span style="color: #8f00ff"> Wordpress !</span>')
    .pauseFor(1000)
    .start()
    
    document.body.onload=function(){
        nbr=5;
        p=0;
        container=document.getElementById("container");
        g=document.getElementById("g");
        d=document.getElementById("d");
        container.style.width = (800*nbr)+"px";
        for(i=1; i<=nbr; i++){
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

    d.onclick=function(){
        if(p>-nbr+1)
        p--;
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

    
})

