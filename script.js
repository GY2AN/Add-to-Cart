let mainContainerEl = document.getElementById("mainContainer");

let createInputEl = document.createElement("input");
createInputEl.classList.add("input-El", "text-center");
createInputEl.type = "text";
createInputEl.id = "checkBox";
mainContainerEl.appendChild(createInputEl);

let creatbutton = document.createElement("button");
creatbutton.classList.add("btn-primary", "m-2");
creatbutton.textContent = "ADD To Cart";
mainContainerEl.appendChild(creatbutton);

creatbutton.onclick = function(){
    let uListEl = document.createElement("ul");
    uListEl.classList.add("unordered-list");
    mainContainerEl.appendChild(uListEl);

    let listItemsEl = document.createElement("li");
    listItemsEl.classList.add("list-items");
    uListEl.appendChild(listItemsEl);
    let inputUserValue = createInputEl.value;
    listItemsEl.textContent = inputUserValue;
}
