let boxes=document.querySelectorAll('.box');

let turn0=true;

let pattern=[
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6],
];

boxes.forEach((box)=>{
    box.addEventListener('click',()=>{
        if(turn0){
            box.innerText='O';
            turn0=false;
        }
        else{
            box.innerText='X';
            turn0=true;
        }
        box.disabled=true;
        checkWinner();
    });
});

function checkWinner(){
    for(let pat of pattern){
        let pos1=boxes[pat[0]].innerText;
        let pos2=boxes[pat[1]].innerText;
        let pos3=boxes[pat[2]].innerText;
        if(pos1!="" && pos2!="" && pos3!="" ){
            if(pos1==pos2 && pos2==pos3){
                showWinner(pos1);
            }
        }
    }
}

function showWinner(winner){
    let val=document.querySelector('h2');
    val.innerText=`${winner} is the winner`;
    val.style.color='green';
    boxes.forEach((box)=>{
        box.disabled=true;
        box.style.backgroundColor='red';
    });
}
let reset=document.querySelector('.reset');
reset.addEventListener('click',()=>{
    boxes.forEach((box)=>{
        box.innerText="";
        box.disabled=false;
        box.style.backgroundColor='white';
    });
    let val=document.querySelector('h2');
    val.innerText="";
    // val.style.color='black';
    turn0=true;
});