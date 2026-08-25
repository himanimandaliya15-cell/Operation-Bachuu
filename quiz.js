// ==========================================
// MISSION 7 — LOVE QUIZ ❤️
// Hetav Edition
// ==========================================


// ==========================================
// QUESTIONS
// ==========================================

const questions = [
    
    {
        emoji: "",
        question: "What was one of the first things that made me feel really close to you??",
        answers: [
            "Our conversations",
"Your sense of humor",
"The way you cared for me",
"Everything about you"
        ],
        correct: 3
    },
    
    {
        emoji: "",
        question: "If we could disappear for one day and go anywhere together, what would I choose??",
        answers: [
            "A quiet mountain place",
"A beach at sunset",
"A road trip with no plan",
"Somewhere completely new"
        ],
        correct: 2
    },
    
    {
                emoji: "",
        question: "What do I value most in our relationship??",
        answers: [
            "Trust",
"Communication",
"The little moments",
"All of these"
        ],
        correct: 3
    },
    
    {
               emoji: "",
        question: "When I'm having a bad day, what do I usually need most from you??",
        answers: [
            "Someone to listen",
"A little reassurance",
"Your stupid nonsense",
"Just knowing you 're there"
        ],
        correct: 1
    },
    
    {
               emoji: "",
        question: "Which version of us do I love the most?",
        answers: [
            "When we 're being romantic",
"When we 're laughing over absolutely nothing",
"When we 're simply comfortable together",
"Every version of US"
        ],
        correct: 3
    },
    
    {
               emoji: "",
        question: "What's something I hope we get to experience together someday??",
        answers: [
            "A proper vacation",
"Watching sunsets together",
"Building a life full of memories",
"All of it"
        ],
        correct: 3
    },
    
    {
               emoji: "",
        question: "What do I think makes you special??",
        answers: [
            "Your ambition",
"Your kindness",
"The way you care about the things and people you love",
"The person you are when nobody is watching"
        ],
        correct: 2
    },
    
    {
               emoji: "",
        question: "If I had to describe our relationship in one word, what would I choose??",
        answers: [
            "Unexpected",
"Chaotic",
"Beautiful",
"Ours"
        ],
        correct: 3
    },
    
    {
               emoji: "",
        question: "What's one thing I never want us to lose, no matter how much life changes??",
        answers: [
            "Our conversations",
"Our friendship",
"Our ability to laugh together",
"The way we choose each other"
        ],
        correct: 3
    },
    
    {
                emoji: "",
        question: "After everything we've been through, would you still choose me??",
        answers: [
            "Of course.",
"Every single time.",
"Without hesitation.",
"Always.🥹"
        ],
        
        // SPECIAL FINAL QUESTION
        // Every answer means the same thing ❤️
        
        correct: "all"
    }
    
];


// ==========================================
// VARIABLES
// ==========================================

let currentQuestion = 0;

let score = 0;

let answered = false;


// ==========================================
// ELEMENTS
// ==========================================

const introScreen =
    document.getElementById("introScreen");

const quizScreen =
    document.getElementById("quizScreen");

const resultScreen =
    document.getElementById("resultScreen");

const startBtn =
    document.getElementById("startBtn");

const continueBtn =
    document.getElementById("continueBtn");

const questionNumber =
    document.getElementById("questionNumber");

const scoreDisplay =
    document.getElementById("scoreDisplay");

const progressBar =
    document.getElementById("progressBar");

const questionEmoji =
    document.getElementById("questionEmoji");

const questionText =
    document.getElementById("question");

const answersContainer =
    document.getElementById("answers");

const feedback =
    document.getElementById("feedback");


// ==========================================
// AUDIO
// ==========================================

const correctSound =
    document.getElementById("correctSound");

const wrongSound =
    document.getElementById("wrongSound");

const clickSound =
    document.getElementById("clickSound");

const victorySound =
    document.getElementById("victorySound");


// ==========================================
// SAFE SOUND FUNCTION
// ==========================================

function playAudio(audio){

    if(!audio) return;

    audio.currentTime = 0;

    audio.play().catch(() => {});

}


// ==========================================
// START QUIZ
// ==========================================

startBtn.addEventListener("click", function(){

    playAudio(clickSound);

    introScreen.classList.add("hidden");

    quizScreen.classList.remove("hidden");

    currentQuestion = 0;

    score = 0;

    showQuestion();

});


// ==========================================
// SHOW QUESTION
// ==========================================

function showQuestion(){

    answered = false;

    const q = questions[currentQuestion];


    // Question number

    questionNumber.innerHTML =
        `Question ${currentQuestion + 1} / ${questions.length}`;


    // Score

    scoreDisplay.innerHTML =
        `❤️ ${score}`;


    // Progress

    const progress =
        ((currentQuestion + 1) / questions.length) * 100;

    progressBar.style.width =
        progress + "%";


    // Emoji

    questionEmoji.innerHTML =
        q.emoji;


    // Question

    questionText.innerHTML =
        q.question;


    // Clear old answers

    answersContainer.innerHTML = "";

    feedback.innerHTML = "";


    // Create answers

    q.answers.forEach(function(answer,index){

        const button =
            document.createElement("button");

        button.className = "answer";

        button.innerHTML = answer;

        button.dataset.index = index;

        button.addEventListener(
            "click",
            function(){

                selectAnswer(index,button);

            }
        );

        answersContainer.appendChild(button);

    });

}


// ==========================================
// SELECT ANSWER
// ==========================================

function selectAnswer(index,button){

    if(answered) return;

    answered = true;

    const q = questions[currentQuestion];


    // Special final question

    if(q.correct === "all"){

        score++;

        button.classList.add("correct");

        playAudio(correctSound);

        feedback.innerHTML =
            "💖 Correct! There was never a wrong answer. ❤️";

        createHeartBurst();

        setTimeout(nextQuestion,1600);

        return;

    }


    // Correct answer

    if(index === q.correct){

        score++;

        button.classList.add("correct");

        playAudio(correctSound);

        feedback.innerHTML =
            "✨ Correct! You really know us. ❤️";

        createHeartBurst();

    }


    // Wrong answer

    else{

        button.classList.add("wrong");

        playAudio(wrongSound);

        feedback.innerHTML =
            " Nope! Try remembering that one... ❤️";


        // Highlight correct answer

        const allAnswers =
            document.querySelectorAll(".answer");

        allAnswers[q.correct]
            .classList.add("correct");

    }


    // Next question

    setTimeout(nextQuestion,1600);

}


// ==========================================
// NEXT QUESTION
// ==========================================

function nextQuestion(){

    currentQuestion++;

    if(currentQuestion >= questions.length){

        showResults();

    }else{

        showQuestion();

    }

}


// ==========================================
// RESULTS
// ==========================================

function showResults() {
    
    quizScreen.classList.add("hidden");
    
    resultScreen.classList.remove("hidden");
    
    
    // ======================================
    // SCORE
    // ======================================
    
    document.getElementById("finalScore")
        .innerHTML =
        `${score} / ${questions.length}`;
    
    
    const message =
        document.getElementById("resultMessage");
    
    
    // ======================================
    // PERSONAL RESULT MESSAGE ❤️
    // ======================================
    
    if (score === 10) {
        
        message.innerHTML =
            
            "Okayyy Bachuu... 🥹❤️<br><br>" +
            
            "You got everything right.<br>" +
            
            "But honestly, I wasn't really testing " +
            "how well you remember facts about me...<br><br>" +
            
            "I wanted to know if you remember the " +
            "little things that make <strong>us</strong>... us. ❤️<br><br>" +
            
            "And somehow, you still managed to make me " +
            "smile through a quiz I created for you. 🥹<br><br>" +
            
            "<strong>Maybe that's why you're my favourite person.</strong> ❤️";
        
    }
    
    else if (score >= 7) {
        
        message.innerHTML =
            
            "Not bad, Bachuu... 😏❤️<br><br>" +
            
            "You may not remember every little detail,<br>" +
            
            "but you definitely remember the things that matter. 🥹<br><br>" +
            
            "And that's what I really wanted to know.<br><br>" +
            
            "<strong>You know me. You know us.</strong> ❤️<br><br>" +
            
            "Now there's just one more secret waiting for you... 💌";
        
    }
    
    else {
        
        message.innerHTML =
            
            "Hmmmm... 😏❤️<br><br>" +
            
            "Looks like someone needs to pay a little more " +
            "attention to his girl. 😂<br><br>" +
            
            "But don't worry... I wasn't expecting perfection.<br>" +
            
            "Because loving someone isn't about remembering " +
            "every answer correctly.<br><br>" +
            
            "It's about remembering the moments that matter. ❤️<br><br>" +
            
            "<strong>And I know you remember those.</strong> 🥹";
        
    }
    
    
    // ======================================
    // STARS ⭐
    // ======================================
    
    const stars =
        document.getElementById("resultStars");
    
    let starCount =
        Math.max(
            1,
            Math.ceil(score / 2)
        );
    
    stars.innerHTML =
        "⭐".repeat(starCount);
    
    
    // ======================================
    // VICTORY EFFECTS 🎉
    // ======================================
    
    playAudio(victorySound);
    
    createHeartBurst();
    
}


// ==========================================
// MISSION 8 UNLOCK
// ==========================================

continueBtn.addEventListener("click", function(){

    playAudio(clickSound);

    // Save Mission 7 as completed
    localStorage.setItem("mission7", "completed");

    // Open Mission 8
    window.location.href = "mission8.html";

});


// ==========================================
// FLOATING HEARTS
// ==========================================

function createFloatingHeart(){

    const container =
        document.getElementById("hearts");

    if(!container) return;


    const heart =
        document.createElement("div");

    heart.className =
        "floating-heart";


    const symbols = [
        "❤️",
        "💖",
        "💕",
        "💗",
        "💘"
    ];


    heart.innerHTML =
        symbols[
            Math.floor(
                Math.random() * symbols.length
            )
        ];


    heart.style.left =
        Math.random() * 100 + "vw";


    heart.style.fontSize =
        (15 + Math.random() * 20) + "px";


    heart.style.animationDuration =
        (6 + Math.random() * 5) + "s";


    container.appendChild(heart);


    setTimeout(function(){

        heart.remove();

    },11000);

}


// Create hearts regularly

setInterval(
    createFloatingHeart,
    700
);


// ==========================================
// HEART BURST
// ==========================================

function createHeartBurst(){

    for(let i = 0; i < 18; i++){

        const heart =
            document.createElement("div");

        heart.innerHTML =
            "❤️";

        heart.style.position =
            "fixed";

        heart.style.left =
            "50%";

        heart.style.top =
            "50%";

        heart.style.zIndex =
            "9999";

        heart.style.pointerEvents =
            "none";

        heart.style.fontSize =
            (18 + Math.random() * 20) + "px";

        heart.style.transition =
            "1s ease-out";


        document.body.appendChild(heart);


        const x =
            (Math.random() - .5) * 500;

        const y =
            (Math.random() - .5) * 500;


        setTimeout(function(){

            heart.style.transform =
                `translate(${x}px,${y}px) scale(1.5)`;

            heart.style.opacity =
                "0";

        },20);


        setTimeout(function(){

            heart.remove();

        },1100);

    }

} 