//FORMULARIO

const formfield = document.getElementById('formfield');

function add(){
  let newField = document.createElement('input');
  newField.setAttribute('type','text');
  newField.setAttribute('name','text');
  newField.setAttribute('class','text');
  
  newField.setAttribute('placeholder','deje un mensaje');
  formfield.appendChild(newField);
}

function remove(){
  let input_tags = formfield.getElementsByTagName('input');
  if(input_tags.length > 2) {
    formfield.removeChild(input_tags[(input_tags.length) - 1]);
  }
}
function enviar() {
  let input_tags = formfield.getElementsByTagName('input')
  preventDefault()
 }
