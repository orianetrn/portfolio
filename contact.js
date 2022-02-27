window.addEventListener("DOMContentLoaded", (event) => {

    // message validation formulaire 

    const form = document.getElementById('formulaire');
    form.onsubmit = submit;
    
    function submit(event) {
       event.preventDefault();
       
       const nom = document.getElementById('nom');
       const prenom = document.getElementById('prenom');
       const email = document.getElementById('email');
       const message = document.getElementById('message');

       const msg = document.getElementById('msg');   
       
       alert ('Le message : ' + message.value + ' a bien été envoyé.');

       msg.innerHTML = 'Merci ' + prenom.value + ' ' + nom.value + ' pour ton message ! Je te recontacte au plus vite à cette adresse mail : ' + email.value + ' si nécessaire.'; 
   } 
    
   // animation sourie

   let i = 0;
   let svg  = d3.select('#animation')
                .append('svg')
                .attr('width',1920)
                .attr('height',200)
                .on('mousemove',anim);

    function anim(){

        var coord = d3.mouse(this);
                    
         svg.insert('circle', 'rect')
        .attr('cx', coord[0])
        .attr('cy', coord[1])
        .attr('r', 0)
        .transition()
        .duration(1500)
        .ease(d3.easeCircleOut)
        .attr('r', 20)
        .style('opacity', 0)
        .remove();
    }
})
