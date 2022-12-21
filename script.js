let todoInput = document.getElementById("todo-input");
let todoBtn = document.getElementById("todo-btn");
let todoContainer = document.getElementById("todo-container");

let noListEl = document.getElementById('no-list')
const handleInputList = () => {
    let li = document.createElement("li");
    const divList = document.createElement('div');
    const divRemoveBtn = document.createElement('div');


    todoContainer.style.display = "block";
    li.append(divList, divRemoveBtn);
    // console.log(divRemoveBtn.parentElement);

    divRemoveBtn.parentElement.setAttribute("onclick","removeItem(event)")
    divRemoveBtn.innerHTML =`<i class="uil uil-trash-alt">`;
    li.append(divRemoveBtn);
    todoContainer.append(divList);

    divList.textContent = todoInput.value;
    li.className = "list-item";

    todoContainer.append(li);
    li.append(divList);
    li.append(divRemoveBtn);

    refreshUi();
}

todoBtn.addEventListener("click", handleInputList);


todoInput.addEventListener("keyup", (event) => {
    if(event.key === "Enter") {
        handleInputList();
    } if (event.key === "keyZ"){
        todoInput.value = "";
    }
});

function removeItem(event) {
    
    let existingList = event.target.parentNode.parentNode;
    existingList.remove();
    console.log(existingList);
    refreshUi();
}

function refreshUi(){
    todoContainer.children.length > 0
    ? ((noListEl.hidden = true))
    : ((noListEl.hidden = false));
}


