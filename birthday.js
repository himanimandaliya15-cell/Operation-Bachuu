// ==========================================
// MISSION 09 — BIRTHDAY FINALE 🎂
// Hetav Edition ❤️
// ==========================================


// ==========================================
// ELEMENTS
// ==========================================

const gift = document.getElementById("gift");

const tap = document.getElementById("tap");

const birthdayReveal =
    document.getElementById("birthdayReveal");

const photoArea =
    document.getElementById("photoArea");

const finalBtn =
    document.getElementById("finalBtn");

const particles =
    document.getElementById("particles");


// ==========================================
// STATE
// ==========================================

let opened = false;


// ==========================================
// OPEN FINAL GIFT 🎁
// ==========================================

gift.addEventListener("click", openFinalGift);

function openFinalGift(){

    if(opened) return;

    opened = true;


    // ======================================
    // GIFT OPENING ANIMATION 🎁
    // ======================================

    gift.innerHTML = "✨";

    gift.style.animation = "none";

    gift.style.transform =
        "scale(1.4) rotate(10deg)";


    // Hide instruction

    tap.style.display = "none";


    // ======================================
    // BIG CELEBRATION 🎉
    // ======================================

    createCelebration();


    // Extra burst

    setTimeout(function(){

        createCelebration();

    },500);


    // ======================================
    // BIRTHDAY REVEAL
    // ======================================

    setTimeout(function(){

        birthdayReveal.style.display =
            "block";

    },900);


    // ======================================
// PHOTO SLIDESHOW 📸❤️
// ======================================

setTimeout(function(){

    photoArea.style.display =
        "block";

},2200);


    // ======================================
    // FINAL BUTTON
    // ======================================

    setTimeout(function(){

        finalBtn.style.display =
            "inline-block";

    },3000);

}





// ==========================================
// BIG CELEBRATION
// ==========================================

function createCelebration(){

    for(let i = 0; i < 80; i++){

        setTimeout(function(){

            createParticle();

        }, i * 35);

    }

}


// ==========================================
// CONTINUOUS PARTICLES
// ==========================================

setInterval(function(){

    if(opened){

        createParticle();

    }

},50);


// ==========================================
// FINAL BUTTON
// ==========================================

finalBtn.addEventListener(
    "click",
    function() {
        
        // Hide the One Last Surprise button
        finalBtn.style.display = "none";
        
        // Open the final photo puzzle
        startPhotoPuzzle();
        
    }
);


function finalSurprise(){

    // Mission 9 completed

    localStorage.setItem(
        "mission9",
        "completed"
    );


    // Go back to Mission Control

    window.location.href =
        "dashboard.html";

}
// =====================================
// HETAV'S GROWING UP SLIDESHOW ❤️
// =====================================

const journeyPhotos = [

    "images/hetav1.jpg",
    "images/hetav2.jpg",
    "images/hetav3.jpg",
    "images/hetav4.jpg",
    "images/hetav5.jpg",
    "images/hetav6.jpg",
    "images/hetav7.jpg",
    "images/hetav8.jpg",
    "images/hetav9.jpg",
    "images/hetav10.jpg",
    "images/hetav11.jpg",
    "images/hetav12.jpg",
    "images/hetav13.jpg"

];


const journeyMessages = [

    "Once upon a time, there was a little boy with a whole world waiting for him. ❤️",

    "Those little eyes already carried so many dreams. 🥹",

    "And slowly, that little boy started growing into himself. 🌱",

    "Learning, changing and discovering the person he wanted to become. ✨",

    "The years passed... and that little boy became a young man. ❤️",

    "With bigger dreams, bigger ambitions and a heart full of hope. 💫",

    "A boy who grew up to love machines, adventures and everything that makes life exciting. 💗",

    "Someone who never stopped chasing the things he loves. 💪🏻",

    "Someone who creates, dreams and builds his own world. 🎧",

    "And somewhere along the way, you became someone very special to me. ❤️",

    "You didn't just grow older... you grew wiser, stronger and kinder. 🌟",

    "You grew up to become a gentleman — someone you can truly be proud of. 🥳",

    "From that little boy to the Man you are today... I'm so happy I get to be a part of your journey. ❤️"

];


let journeyIndex = 0;
let journeyTimer;

function startJourneySlideshow(){

const journeySection =
    document.getElementById("journeySection");

if(journeySection){
    journeySection.style.display = "block";
}
const startBtn =
        document.getElementById("startJourneyBtn");

    if(startBtn){
        startBtn.style.display = "none";
    }
    const photo =
        document.getElementById("journeyPhoto");

    const message =
        document.getElementById("journeyMessage");

    const counter =
        document.getElementById("photoCounter");

    if(!photo || !message || !counter){

        console.log(
            "Journey slideshow elements not found."
        );

        return;

    }
    


    function showJourneyPhoto(){

        // Fade out
        photo.style.opacity = "0";
        message.style.opacity = "0";

        setTimeout(function(){

            photo.src =
                journeyPhotos[journeyIndex];

            message.innerHTML =
                journeyMessages[journeyIndex];

            counter.innerHTML =
                (journeyIndex + 1) +
                " / " +
                journeyPhotos.length;

            // Fade in
            photo.style.opacity = "1";
            message.style.opacity = "1";

        },500);

    }


    // Show first photo immediately
    showJourneyPhoto();


    // Move to the next photo every 10 seconds
    journeyTimer = setInterval(function(){

        journeyIndex++;

        // All 13 photos finished
        if(journeyIndex >= journeyPhotos.length){

            clearInterval(journeyTimer);

            journeyIndex =
                journeyPhotos.length - 1;

            setTimeout(function(){

                const finalBtn =
                    document.getElementById("finalBtn");

                if(finalBtn){

                    finalBtn.style.display =
                        "inline-block";

                }

            },1500);

            return;
        }

        showJourneyPhoto();

    },5000);

}
// ==========================================
// FINAL PHOTO PUZZLE 🧩❤️
// ==========================================

const puzzleImage =
    "images/final-photo.jpg";

const puzzleBoard =
    document.getElementById("puzzleBoard");

const puzzleStatus =
    document.getElementById("puzzleStatus");

let puzzleOrder = [
    0, 1, 2,
    3, 4, 5,
    6, 7, 8
];

let selectedPiece = null;


// ==========================================
// START PUZZLE
// ==========================================

function startPhotoPuzzle() {
    
    const puzzle =
        document.getElementById("photoPuzzle");
    
    if (!puzzle || !puzzleBoard) return;
    
    puzzle.style.display = "block";
    
    puzzle.scrollIntoView({
    behavior: "smooth",
    block: "start"
});

puzzleOrder = [
    0, 1, 2,
    3, 4, 5,
    6, 7, 8
];

// Shuffle until it is actually different
do {

    puzzleOrder.sort(
        () => Math.random() - 0.5
    );

} while (
    puzzleOrder.every(
        (value, index) =>
            value === index
    )
);

createPuzzle();
    
}


// ==========================================
// CREATE PUZZLE
// ==========================================

function createPuzzle() {
    
    puzzleBoard.innerHTML = "";
    
    puzzleOrder.forEach(function(pieceNumber, position) {
        
        const piece =
            document.createElement("div");
        
        piece.className =
            "puzzle-piece";
        
        piece.dataset.position =
            position;
        
        piece.dataset.piece =
            pieceNumber;
        
        const row =
            Math.floor(pieceNumber / 3);
        
        const column =
            pieceNumber % 3;
        
        piece.style.backgroundImage =
            `url("${puzzleImage}")`;
        
        piece.style.backgroundPosition =
            `${column * 50}% ${row * 50}%`;
        
        piece.addEventListener(
            "click",
            function() {
                
                selectPiece(piece);
                
            }
        );
        
        puzzleBoard.appendChild(piece);
        
    });
    
}


// ==========================================
// SELECT / SWAP PIECES
// ==========================================

function selectPiece(piece) {
    
    if (selectedPiece === null) {
        
        selectedPiece = piece;
        
        piece.classList.add("selected");
        
        return;
        
    }
    
    
    if (selectedPiece === piece) {
        
        piece.classList.remove("selected");
        
        selectedPiece = null;
        
        return;
        
    }
    
    
    const firstPosition =
        Number(selectedPiece.dataset.position);
    
    const secondPosition =
        Number(piece.dataset.position);
    
    
    const temp =
        puzzleOrder[firstPosition];
    
    puzzleOrder[firstPosition] =
        puzzleOrder[secondPosition];
    
    puzzleOrder[secondPosition] =
        temp;
    
    
    selectedPiece.classList.remove("selected");
    
    selectedPiece = null;
    
    
    createPuzzle();
    
    checkPuzzle();
    
}


// ==========================================
// CHECK PUZZLE
// ==========================================

function checkPuzzle() {
    
    const solved =
        puzzleOrder.every(
            function(value, index) {
                
                return value === index;
                
            }
        );
    
    
    if (solved) {
        
        puzzleStatus.innerHTML =
            "✨ MEMORY RESTORED! ❤️<br>You've found the last piece.";
        
        puzzleStatus.style.color =
            "#ffd166";
        
        setTimeout(function() {
            
            showLastPage();
            
        }, 1500);
        
    }
    
}
// ==========================================
// FINAL GRAND FINALE ❤️
// ==========================================

function showLastPage() {
    
    const puzzle =
        document.getElementById("photoPuzzle");
    
    const lastPage =
        document.getElementById("lastPage");
    
    
    // Hide puzzle
    if (puzzle) {
        
        puzzle.style.display =
            "none";
        
    }
    
    
    // Show final page
    if (lastPage) {
        
        lastPage.style.display =
            "block";
        
        lastPage.scrollIntoView({
            
            behavior: "smooth",
            
            block: "start"
            
        });
        
    }
    
    
    // Mark mission complete
    localStorage.setItem(
        "mission9",
        "completed"
    );
    
}
// ==========================================
// OUR SPECIAL SONG 🎵❤️
// ==========================================

const finalSong = new Audio("music/our-song.mp3");

finalSong.loop = false;

function playFinalSong() {
    
    if (finalSong.paused) {
        
        finalSong.play();
        
        document.getElementById("songButton").innerHTML =
            "⏸️ Pause Our Song ❤️";
        
    } else {
        
        finalSong.pause();
        
        document.getElementById("songButton").innerHTML =
            "🎵 Play Our Song ❤️";
        
    }
    
}