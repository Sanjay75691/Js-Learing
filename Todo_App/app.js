let input =  document.getElementById("taskInput")
let button = document.getElementById("addBtn")
let ul = document.getElementById("taskList")

button.addEventListener("click", function() {
    console.log(input.value);

    if(input.value.trim() === "") {
        alert("Enter Value");
        return;
    }

    let li = document.createElement("li");
    li.textContent = input.value;
    ul.appendChild(li);
    input.value = "";

    let deletebtn = document.createElement("button")
    deletebtn.textContent = "Delete";
    li.appendChild(deletebtn)
    ul.appendChild(li)
    
    deletebtn.addEventListener("click", function(){
        li.remove();
    });
    input.value = "";
    input.focus();
});