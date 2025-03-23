let boxes=document.querySelectorAll(".box");
let gamepanel = document.querySelector(".container")
let winDisplay=document.querySelector(".msg-container");
let newgamebtn = document.querySelector(".new_btn");
let p=document.getElementsByTagName("#p")
let reset = document.querySelector(".reset_btn");
let  turno=true;//player1
let winPattern=[
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8],
];

boxes.forEach((box)=>{
    box.addEventListener("click",()=>{
        console.log("box was clicked");
        // box.innerText="X"
        if (turno) {
            box.innerText = "X";
            turno = false;
        }
        else {
            box.innerText = "O"
            turno = true;
        }
        box.disabled=true;
        checkWinner();
    });
});

const enableboxes=()=>{
    for(let box of boxes){
        box.disabled=false;
        box.innerText="";
    }
};
const checkWinner= () =>{
    for(let pattern of winPattern){
      

        let postion1value = boxes[pattern[0]].innerText;
        let position2value = boxes[pattern[1]].innerText;
        let position3value = boxes[pattern[2]].innerText;

        if(postion1value != "" && position2value != "" && postion1value != ""){
            if(postion1value === position2value && position2value === position3value){
            console.log("winner is "+position2value);
                boxes.forEach(box =>box.disabled=true);
                winnerpannel(postion1value);
            }
        }
        
    }

};

const winnerpannel=(winnername)=>{
    gamepanel.style.visibility = "hidden";
    winDisplay.innerHTML = `Congratulations! Winner! is ${winnername} 🎉`;
    winDisplay.style.visibility="visible";
    newgamebtn.style.visibility = "visible";

}



newgamebtn.addEventListener("click", () => {
    console.log("new game was clicked!")
    gamepanel.style.visibility = "visible";
    winDisplay.style.visibility = "hidden";
    newgamebtn.style.visibility="hidden";
})


newgamebtn.addEventListener("click", enableboxes);
reset.addEventListener("click", enableboxes);