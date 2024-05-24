const input = document.querySelector("#favchap");
const button = document.querySelector("button");
const list = document.querySelector("ul");
const li = document.createElement("li");
const deleteButton = document.createElement("button");



button.addEventListener("click", function () {
    if (input.value.trim() !== '') {
        li.textContent = input.value;
        deleteButton.textContent = "❌";
        deleteButton.classList.add("delete");

        li.append(deleteButton);
        list.append(li);

    }else {
        input.focus();
    }
});



list.addEventListener("click", function(event){
    if(event.target && event.target.classList.contains("delete")) {
        event.target.parentElement.remove();
    }
});