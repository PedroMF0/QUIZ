const questions = [
    {
        question: "1. O que significa a sigla EPI?",
        options: ["Equipamento de Proteção Industrial", "Equipamento de Proteção Individual", "Equipamento de Prevenção Individual"],
        correctAnswer: 1
    },
    {
        question: "2. Qual é a principal finalidade dos EPIs?",
        options: ["Tornar o trabalho mais desconfortável", "Melhorar a produtividade do trabalhador", "Proteger o trabalhador contra riscos à sua saúde e segurança"],
        correctAnswer: 2
    },
    {
        question: "3. O que é ergonomia?",
        options: ["Uma técnica de alongamento muscular", "O estudo das condições de trabalho que visam a adaptação do ambiente ao trabalhador", "Um método de controle de qualidade"],
        correctAnswer: 1
    },
    {
        question: "4. Qual é um exemplo de EPI para proteção da cabeça?",
        options: ["Óculos de segurança", "Protetor auricular", "Capacete"],
        correctAnswer: 2
    },
    {
        question: "5. Qual é um exemplo de EPI para proteção auditiva?",
        options: ["Protetor auricular", "Máscara facial", "Luvas"],
        correctAnswer: 0
    },
];

let currentQuestionIndex = 0;
let score = 0;

const questionElement = document.getElementById("question");
const optionsElement = document.getElementById("options");
const resultElement = document.getElementById("result");
const nextButton = document.getElementById("next-button");


function loadQuestion() {
    const currentQuestion = questions[currentQuestionIndex];
    questionElement.textContent = currentQuestion.question;
    optionsElement.innerHTML = "";

    currentQuestion.options.forEach((option, index) => {
        const button = document.createElement("button");
        button.textContent = option;
        button.addEventListener("click", () => checkAnswer(index));
        optionsElement.appendChild(button);
    });

    resultElement.textContent = ""; // Limpa a mensagem de resposta correta/incorreta.
    nextButton.style.display = "none"; // Oculta o botão "Próxima Pergunta" ao carregar uma nova pergunta.
}

function checkAnswer(selectedIndex) {
    const currentQuestion = questions[currentQuestionIndex];
    if (selectedIndex === currentQuestion.correctAnswer) {
        score++;
        resultElement.textContent = "Resposta correta!";
    } else {
        resultElement.textContent = "Resposta incorreta!";
    }

    nextButton.style.display = "block"; // Mostra o botão "Próxima Pergunta" após responder.
}

const tryAgainButton = document.getElementById("try-again-button");
const resultGif = document.getElementById("result-gif");

function resetQuiz() {
    currentQuestionIndex = 0;
    score = 0;
    loadQuestion();
    tryAgainButton.style.display = "none"; // Hide the "Tente Novamente" button
    resultGif.style.display = "none"; // Hide the GIF
}

tryAgainButton.addEventListener("click", () => {
    resetQuiz();
    resultGif.style.display = "block"; // Show the GIF again
});

function showResult() {
    questionElement.textContent = `Você acertou ${score} de ${questions.length} perguntas.`;
    optionsElement.innerHTML = "";
    resultElement.textContent = "";
    nextButton.style.display = "none";
    tryAgainButton.style.display = "block"; // Show the "Tente Novamente" button
    resultGif.style.display = "block"; // Show the GIF
}

// ... (rest of your JavaScript code)

loadQuestion();



nextButton.addEventListener("click", () => {
    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
        loadQuestion();
    } else {
        showResult();
    }
});

loadQuestion();
