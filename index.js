// Data for Application
// Array of object 
'use strict'
const quizData = [  
    {  
     question: "Which language runs in a web browser?",  
     a: "Java",  
     b: "C",  
     c: "Python",  
     d: "JavaScript",  
     correct: "d",  
    },  
    {  
     question: "What does CSS stand for?",  
     a: "Central Style Sheets",  
     b: "Cascading Style Sheets",  
     c: "Cascading Simple Sheets",  
     d: "Cars SUVs Sailboats",  
     correct: "b",  
    },  
    {  
     question: "What does HTML stand for?",  
     a: "Hypertext Markup Language",  
     b: "Hypertext Markdown Language",  
     c: "Hyperloop Machine Language",  
     d: "Helicopters Terminals Motorboats Lamborginis",  
     correct: "a",  
    },  
    {  
     question: "What year was JavaScript launched?",  
     a: "1996",  
     b: "1995",  
     c: "1994",  
     d: "none of the above",  
     correct: "b",  
    },  
   ];  

   //Variable defination 
   const question = document.getElementById('questions');
   const option1 = document.getElementById('a');
   const option2 = document.getElementById('b');
   const option3 = document.getElementById('c');
   const option4 = document.getElementById('d');
   const submit = document.getElementById('submit');
   const result = document.getElementById('result');
   const time = document.querySelector("#time");
   const viewScore = document.getElementById('viewscore');

// Handling time
let totalSecond = 45;
let tempSeconds ; //define
tempSeconds = totalSecond; //intialize

const setSeconds = (s) => {
    time.textContent = s ;
    };
    
//this function is called in every 1 second
let x = setInterval(() => {
    if(tempSeconds<0){
tempSeconds=45;
setSeconds(tempSeconds);
    }else{
        setSeconds(tempSeconds);
    }
tempSeconds--;

},1000);


   const loadQuestion =(index)=>{
    question.innerHTML=quizData[index].question;
    option1.innerHTML= 1+". "+quizData[index].a;
    option2.innerHTML=2+". "+quizData[index].b;
    option3.innerHTML=3+". "+quizData[index].c;
    option4.innerHTML=4+". "+quizData[index].d;
   }
 
   let FinalScore=0;
   let questionCounter=0;
   loadQuestion(questionCounter);
const Answered = (id)=>{
    let correctAnswer=quizData[questionCounter].correct;
    if(correctAnswer===id){
        result.innerHTML = "Correct";
        FinalScore++;
    }else{
        tempSeconds=tempSeconds-10;
        result.innerHTML = "Incorrect";
    }
questionCounter++;
if(questionCounter<quizData.length){
loadQuestion(questionCounter);
}else{
let container =  document.querySelector('.container');
container.style.display ="none";
let finalResult = document.querySelector('.finalResult');
finalResult.style.display ="inline";
document.getElementById('score').innerHTML =FinalScore;
}

}
// window.localStorage.setItem(1,"ankit");
// console.log(window.localStorage.getItem(1));

document.getElementById('submit').addEventListener('click',()=>{
 //Highscore string   
    let new_highScore = document.getElementById('input').value +"  "+ FinalScore;
    
    if(localStorage.getItem('highScore')=== null){
        localStorage.setItem('highScore','[]');
    }
   // console.log( JSON.parse(localStorage.getItem("highScore")));

    let old_highScore = JSON.parse(localStorage.getItem('highScore')); // took acces to the array with key as highScore
    old_highScore.push(new_highScore); // pushed the new element to the array
    console.log(old_highScore);
    localStorage.setItem('highScore',JSON.stringify(old_highScore));
    
    location.reload();
})

//ViewScore

viewScore.addEventListener('click', ()=>{
    let container =  document.querySelector('.container');
    container.style.display ="none";
    let finalResult =  document.querySelector('.finalResult');
    finalResult.style.display ="none";
    console.log( JSON.parse(localStorage.getItem("highScore")).map((item)=>item))

    document.querySelector('.viewscore').innerHTML = `
    <h3>Highscores<h3>
    <p>${
      JSON.parse(localStorage.getItem("highScore")).map((item)=>item)}</p>
    `;



});



  


