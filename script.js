function addItem(){
    // captura os elementos
    let item = document.getElementById("input-item");
    let container = document.getElementById("container-label");

    // cria os novos elementos
    let label = document.createElement("label");
    label.classList.add("label-item");
    label.id = item.value;

    label.addEventListener('click',function(e){
        e.target.classList.toggle('item-checado');
    })
    

    let text = document.createTextNode(item.value);

    label.appendChild(text);
    container.appendChild(label);

    item.value = '';
    item.focus();
}