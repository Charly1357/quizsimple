const questions = [
    {
        question:"Which is the largest City in the world?",
        answer:[
            {text:"Sao Paulo",correct:false},
            {text:"Delhi",correct:false},
            {text: "Tokyo", correct: true },
            {text: "Shanghai", correct: false },
              ]
    },
    {
        question: "Which is the richest Country in the world?",
        answer: [
            { text: "Switzerland", correct: false },
            { text: "Norway", correct: false },
            { text: "Luxemburg", correct: false },
            { text: "Liechtenstein", correct: true },
        ]
    },
    {
        question: "Which is the happiest Country in the world?",
        answer: [
            { text: "Iceland", correct: false },
            { text: "Finnland", correct: true },
            { text: "Denmark", correct: false },
            { text: "Switzerland", correct: false },
        ]
    },
    {
        question: "Which is the most innovative Country in the world?",
        answer: [
            { text: "Switzerland", correct: true },
            { text: "United Kingdom", correct: false },
            { text: "United States of America", correct: false },
            { text: "Sweden", correct: false },
        ]
    }
];
const questionElement = document.getElementById("question");
const answerButtons = document.getElementById("answer-buttons");
const nextButton = document.getElementById("next-btn");
let currentQuestionIndex = 0;
let score = 0;
function startQuiz(){
    currentQuestionIndex = 0;
    score = 0;
    nextButton.innerHTML = "Next";
    showQuestion();
}
