let input=document.getElementById("input");
let add_btn=document.querySelector("#add");
let todos=document.querySelector(".todos");

input.addEventListener("click",()=>{
    input.placeholder="";
    // input.style.backgroundColor="lightyellow";
})

let todo_array=[]


add_btn.addEventListener("click",()=>{

    if(input.value){
       let new_todo=document.createElement("div");
       new_todo.className="todo";
       let new_title=document.createElement("div");
       new_title.className="title";
       new_title.innerText=input.value;
       let new_delete_btn=document.createElement("button");
       new_delete_btn.className="delete";
       new_delete_btn.innerText="Delete";
       let new_checkbox=document.createElement("input");
       new_checkbox.type="checkbox";
       new_checkbox.className="todo_check";
       new_checkbox.style.width="39px";
       new_checkbox.style.height="37px";
       new_checkbox.style.cursor="pointer";
        
       new_todo.append(new_checkbox);
       new_todo.appendChild(new_title);
       new_todo.appendChild(new_delete_btn);
        todos.appendChild(new_todo);
        input.value="";
        input.placeholder="Enter your Todo here";
    }
    else{
       alert("Please write someting");
    }

})



todos.addEventListener("click", (event) => {
    if (event.target.classList.contains("delete")) {
        let parent = event.target.parentNode;
        todos.removeChild(parent);
    }
    if(!(event.target.classList.contains("input_class"))){
        if(input.value==""){
            input.placeholder="Enter your Todo here";
        }
    }

    if(event.target.classList.contains("todo_check")){
        let checkedbox = event.target;
        let next_sibling=checkedbox.nextSibling;
        let lineover=document.createElement("s");
        lineover.innerText=next_sibling.innerText;
        if(next_sibling.children.length==0){
            next_sibling.innerText="";
            next_sibling.appendChild(lineover);
        }
        else{
            next_sibling.innerText=lineover.innerText;
            lineover.remove();
        }
       
    }
    


});

