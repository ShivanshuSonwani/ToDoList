// Event Listener to add Todo when user click submit button
submitToDo.addEventListener("click",(e)=>{
    e.preventDefault()
    if(desc.value) {
            let noteTodo = desc.value
            localStorage.setItem(localStorage.length+1,noteTodo)
        console.log(e)
        desc.value = ""
            location.reload()
    }
})

// To clear all the ToDos 
clearToDo.addEventListener("click",(e)=>{
    e.preventDefault()
    if(confirm("Do you really want to clear your ToDo list?")) {
        localStorage.clear()
        }
    location.reload()
})


// Showing the list to the user
if(localStorage.length === 0) {
    document.getElementById("clearToDo").hidden = true
    document.getElementById("list").innerHTML += `
    <div class="alert alert-info" role="alert">
    You have noting in your ToDo List!!
    </div>`
    } else {
        for(let i=1 ; i<=localStorage.length ; i++){
            noteValue = localStorage.getItem(i)
                document.getElementById("list").innerHTML += `
                <ul class="list-group">
                <li class="list-group-item"><b>${i}.</b>&nbsp ${noteValue}</li>
                </ul>`
            }
    }