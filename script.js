const infiList = document.getElementById("infi-list");

let j = 11;
function addTwoElements(){
    for(let i=1; i<=2; i++){
        const li = document.createElement("li");
        li.innerText= `Item ${j++}`;
        infiList.appendChild(li);
    }
}
for(let i=1; i<=10; i++){
    const li = document.createElement("li");
    li.innerText= `Item ${i}`;
    infiList.appendChild(li);
}

infiList.addEventListener("scroll",()=>{

    if(infiList.scrollHeight - infiList.clientHeight - infiList.scrollTop <= 4){
        addTwoElements();
    }
})

