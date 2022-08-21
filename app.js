let value1 ;
let value2 ;
const submit = document.getElementById("btn");
const question = document.getElementById("addition");
const inputEle = document.getElementById("input");
const alert = document.querySelector(".ans-alert");
const ans = document.getElementById("ans-alert");

function newquestion (){
    value1 = getRandomValue();
    value2 = getRandomValue();
    question.innerText = `What is ${value1} added to ${value2}?`;

};
newquestion();

function getRandomValue(){
    return (Math.ceil(Math.random() * 10));
}
submit.addEventListener("click", (e) => {
    e.preventDefault();
    checkResult();
});
function checkResult() {
    answer = value1 + value2;
    const userAnswer = +inputEle.value;
    if (userAnswer === answer) {
        ans.innerText = `Right Answer😎😎`;
        ans.classList.add("active");
    } else {
        ans.innerText = `Wrong Answer😅😅`;
        ans.classList.add("active");
    }
    //set timeout 
    setTimeout(()=>{
        ans.classList.remove("active");
        newquestion();
    },1000)
}