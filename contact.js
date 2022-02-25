window.addEventListener("DOMContentLoaded", (event) => {

    // message validation formulaire 

    const form = document.getElementById('formulaire');
    form.onsubmit = submit;
    
    function submit(event) {
       event.preventDefault();
       
       const nom = document.getElementById('nom');
       const prenom = document.getElementById('prenom');
       const email = document.getElementById('email');

       const msg = document.getElementById('msg');     

       msg.innerHTML = 'Merci ' + prenom.value + ' ' + nom.value + ' pour ton message ! Je te recontacte au plus vite à cette adresse mail : ' + email.value + ' si nécessaire.'; 
   } 
    
})