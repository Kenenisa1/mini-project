const inputBox= document.getElementById("input-box");
const listContainer=document.getElementById("list-container");
let nwElement=document.getElementById("nw-element")
function addTask(){
    if(inputBox.value === ''){
        nwElement.style.display="block";
        nwElement.toggle
        nwElement.innerHTML("Please write the list first")

    }
    else{
        let li=document.createElement("li")
        li.innerHTML= inputBox.value;
        listContainer.appendChild(li);
        let span=document.createElement("span");
        span.innerHTML="\u00d7";
        li.appendChild(span);
    }
    inputBox.value="";
    saveData();
    nwElement.style.display="none";

}

listContainer.addEventListener("click", function(e){
    if(e.target.tagName=== "LI"){
        e.target.classList.toggle("checked");
    }
    else if(e.target.tagName === "SPAN"){
        e.target.parentElement.remove();
    }
}, false)

function saveData(){
    localStorage.setItem("data", listContainer.innerHTML)

}

function showTask(){
    listContainer.innerHTML=localStorage.getItem("data");
}
showTask();