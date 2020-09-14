//Procurar botão
document.querySelector("#add-time")
//Quando clicar no botão
.addEventListener('click', cloneField);
//Executar uma ação
function cloneField() {
    //Pegar os campos. Q campos?
   const newFieldContainer = document.querySelector('.schedule-item').cloneNode(true);
    //limpar os campos
   const fields = newFieldContainer.querySelectorAll('input');
   //Para cada campo limpar
    fields.forEach(function(field) {
       field.value = ""; 
    });
   //colocar na página
    document.querySelector('#schedule-items').appendChild(newFieldContainer);
}