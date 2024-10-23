/* function mudarAllan() {
    document.title = "Arllyson Marques";
    let textoFreela = document.getElementById("textoFreela");
    textoFreela.innerHTML = "Entre em contato comigo!";
    textoFreela.setAttribute("class", "arllyson");

    if (document.getElementById("aArllyson")) {
        console.log(document.getElementById("aArllyson"));
    
    } else {
        let aArllyson = document.createElement("a");
        aArllyson.setAttribute("href", "www.linkedin.com/in/AllanVitorMarques");
        aArllyson.setAttribute("target", "_blank");
        aArllyson.innerHTML="Irmão de Allan"
        aArllyson.setAttribute("id", "aArllyson");
    
        let divFreelance = document.getElementById("freelance");
        divFreelance.appendChild(aArllyson); 
    }

    document.getElementById("foto").setAttribute("src","imgs/Bob.jpg");
}
*/

const Freelance = document.getElementById("freelance");

Freelance.addEventListener('submit', function(event) {

    event.preventDefault();

    const checkboxes = Array.from(document.querySelectorAll('.form-check-input'));
    let isChecked = false;
    let checkedValues = [];
 for (const checkbox of checkboxes) {

     if (checkbox.checked) {
         isChecked = true;
         const label = document.querySelector(`label[for=${checkbox.id}]`).innerText;
         checkedValues.push(label);
     }
 }
 if (!isChecked) {
     alert('Por favor, selecione pelo menos uma opção (Manhã, Tarde ou Noite).');
     return;
 }
    const Nome = document.getElementById("nomecompleto").value;
    const email = document.getElementById("email").value;
    const comentario = document.getElementById("comments").value;
    const idioma = document.getElementById("Escolhaidioma").value
    const data_entrega = document.getElementById("Entrega").value;
    const Horas = document.getElementById("horas").value

    const multiplaSelect = document.getElementById("multipla");
    const multiplaescolha = Array.from(multiplaSelect.selectedOptions).map(option => option.value).join(', ');

    alert(`
        Dados preenchidos:
        Nome: ${Nome}
        Email: ${email}
        Comentário: ${comentario}
        Idioma: ${idioma}
        Linguagens: ${multiplaescolha}
        Banco de dados e Turno: ${checkedValues.join(', ')}
        Horário da reunião: ${Horas}
        Data de entrega: ${data_entrega} `)

    Freelance.submit();
})
