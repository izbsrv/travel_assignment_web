let currentQuestion = 1;
const totalQuestions = 5;

function showQuestion(questionNumber) {
    for (let i = 1; i <= totalQuestions; i++) {
        document.getElementById('question' + i).style.display = i === questionNumber ? 'block' : 'none';
    }
}

function nextQuestion() {
    if (validateAnswer()) {
        currentQuestion++;
        if (currentQuestion > totalQuestions) {
            submitQuiz();
        } else {
            showQuestion(currentQuestion);
        }
    } else {
        alert('Пожалуйста, выберите ответ.');
    }
}

function validateAnswer() {
    const question = document.forms['quiz-form']['q' + currentQuestion];
    for (let i = 0; i < question.length; i++) {
        if (question[i].checked) {
            return true;
        }
    }
    return false;
}

function submitQuiz() {
    const form = document.getElementById('quiz-form');
    const resultContainer = document.getElementById('result');
    const nextButton = document.getElementById('next-btn');
    const homeButton = document.getElementById('home-btn');
    const answers = {
        q1: 'c',
        q2: 'b',
        q3: 'b',
        q4: 'a',
        q5: 'd'
    };
    let score = 0;

    for (let question in answers) {
        const selected = form.elements[question].value;
        if (selected === answers[question]) {
            score++;
        }
    }

    resultContainer.textContent = `Ваш результат: ${score} из 5`;
    resultContainer.style.display = 'block';
    form.style.display = 'none';
    nextButton.style.display = 'none';
    homeButton.style.display = 'block';
}

function goHome() {
    location.reload();
}

// Показываем первый вопрос при загрузке страницы
document.addEventListener('DOMContentLoaded', () => {
    showQuestion(currentQuestion);
});
