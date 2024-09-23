let inputs = document.querySelector("#inp");
let text = document.querySelector(".text");
let btn = document.querySelector("button")
btn.onclick = function(){
    if(inputs.value == ""){
        alert("Please Enter the Task");
    }
    else {
        let newEle = document.createElement("ul");
        newEle.innerHTML = `${inputs.value} <button>Delete</button>`;
        text.appendChild(newEle);
        inputs.value = "";
        newEle.querySelector("button").addEventListener("click", function(){
            newEle.remove();
        });
    }
}