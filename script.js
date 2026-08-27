const typingText =
    "Every love story is beautiful... but ours is my favorite. ❤️";

let typingIndex = 0;

function typeWriter() {
    if (typingIndex < typingText.length) {
        document.getElementById("typing").innerHTML +=
            typingText.charAt(typingIndex);

        typingIndex++;

        setTimeout(typeWriter, 55);
    }
}

typeWriter();


// Background hearts
const emojis = ["❤️", "💕", "💗", "💖", "✨"];

function createParticle() {

    const particle = document.createElement("div");

    particle.className = "particle";

    particle.innerHTML =
        emojis[Math.floor(Math.random() * emojis.length)];

    particle.style.left =
        Math.random() * 100 + "vw";

    particle.style.fontSize =
        Math.random() * 25 + 15 + "px";

    particle.style.animationDuration =
        Math.random() * 4 + 4 + "s";

    document.body.appendChild(particle);

    setTimeout(() => {
        particle.remove();
    }, 9000);
}

setInterval(createParticle, 350);


// OPEN SURPRISE
function startSurprise() {

    console.log("SURPRISE BUTTON CLICKED!");

    const surprise =
        document.getElementById("surprise");

    surprise.classList.add("show");

    createStars(100);

    createExplosion(100);

    for (let i = 0; i < 50; i++) {

        setTimeout(() => {
            createFlyingHeart();
        }, i * 100);
    }

    setTimeout(() => {
        createExplosion(80);
    }, 1000);

    setTimeout(() => {
        createExplosion(80);
    }, 2500);

    setTimeout(() => {

        surprise.classList.remove("show");

        document.querySelector(".story")
            .scrollIntoView({
                behavior: "smooth"
            });

    }, 6000);
}


// Heart explosion
function createExplosion(amount) {

    for (let i = 0; i < amount; i++) {

        const heart =
            document.createElement("div");

        heart.className = "firework";

        heart.innerHTML =
            Math.random() > 0.5
                ? "❤️"
                : "💕";

        const angle =
            Math.random() * Math.PI * 2;

        const distance =
            Math.random() * 500 + 100;

        const x =
            Math.cos(angle) * distance;

        const y =
            Math.sin(angle) * distance;

        heart.style.setProperty(
            "--x",
            x + "px"
        );

        heart.style.setProperty(
            "--y",
            y + "px"
        );

        heart.style.left =
            "50%";

        heart.style.top =
            "50%";

        document.body.appendChild(heart);

        setTimeout(() => {
            heart.remove();
        }, 2500);
    }
}


// Flying hearts
function createFlyingHeart() {

    const heart =
        document.createElement("div");

    heart.className =
        "flying-heart";

    const hearts = [
        "❤️",
        "💕",
        "💗",
        "💖",
        "💘",
        "💝",
        "🥰"
    ];

    heart.innerHTML =
        hearts[
            Math.floor(
                Math.random() * hearts.length
            )
        ];

    heart.style.left =
        Math.random() * 100 + "vw";

    heart.style.fontSize =
        Math.random() * 35 + 20 + "px";

    heart.style.animationDuration =
        Math.random() * 3 + 3 + "s";

    document.body.appendChild(heart);

    setTimeout(() => {
        heart.remove();
    }, 7000);
}


// Stars
function createStars(amount) {

    const container =
        document.querySelector(".stars");

    container.innerHTML = "";

    for (let i = 0; i < amount; i++) {

        const star =
            document.createElement("div");

        star.className = "star";

        star.style.left =
            Math.random() * 100 + "%";

        star.style.top =
            Math.random() * 100 + "%";

        star.style.animationDelay =
            Math.random() * 2 + "s";

        container.appendChild(star);
    }
}


// Music
let musicPlaying = false;

function toggleMusic() {

    const music =
        document.getElementById("music");

    const button =
        document.querySelector(".music-btn");

    if (!musicPlaying) {

        music.play()
            .catch(() => {
                console.log("Music needs user interaction");
            });

        musicPlaying = true;

        button.innerHTML = "🔊";

    } else {

        music.pause();

        musicPlaying = false;

        button.innerHTML = "🎵";
    }
}


// Final surprise
function finalExplosion() {

    for (let i = 0; i < 100; i++) {

        setTimeout(() => {
            createExplosion(3);
        }, i * 25);
    }

    for (let i = 0; i < 70; i++) {

        setTimeout(() => {
            createFlyingHeart();
        }, i * 60);
    }

    setTimeout(() => {

        document
            .getElementById("finalPopup")
            .classList.add("show");

    }, 1000);
}