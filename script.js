const app = document.getElementById("app");

let currentSlide = 1;

function goToSlide(slideNumber){

    currentSlide = slideNumber;
    
    loadSlide();

}

function nextSlide(slideNumber){

        currentSlide = slideNumber;

        loadSlide();

}

function startMusic(){

    const music =
    document.getElementById("bgMusic");

    music.play();

}

function loadSlide(){

    if(currentSlide === 1){

        app.innerHTML = `

        <section class="slide slide1 fade-in">

            <img
            class="bg"
            src="assets/backgrounds/slide1-bg.png">

            <img
            class="moon"
            src="assets/icons/moon1.png">

            <img
            class="snoopy-sleep"
            src="assets/snoopy/snoopy-sleep.png">

            <div class="zzz">
                Z Z Z
            </div>

            <h1 class="title1">
                Happy<br>
                Birthday,<br>
                Sayangku🤍
            </h1>

            <button
            class="start-btn"
            onclick="startBirthday()">

                START

            </button>

            <p class="small-text">
                ditekan tombol startnya dek
            </p>

        </section>

        `;
    }

    else if(currentSlide === 2){

        app.innerHTML = `

        <section class="slide slide2 fade-in">

           <img
            class="bg"
            src="assets/backgrounds/slide2-bg.png">

            <img
            class="moon2"
            src="assets/icons/moon2.png">

            <img
            class="snoopy-halo"
            src="assets/snoopy/snoopy-halo.png">

            <div class="slide2-text">

            <p id="typingText"></p>

            </div>

            <div
            class="next-wrapper"
            onclick="nextSlide(3)">

            <img
            class="next-btn"
            src="assets/buttons/arrow-next.png">
            
            <span class="next-label">
                NEXT
            </span>
        
            </div>

        </section>

        `;

        typeSlide2();

    }

    else if(currentSlide === 3){

        app.innerHTML = `

        <section class="slide slide3 fade-in">

            <img
            class="bg"
            src="assets/backgrounds/slide3-bg.png">

            <img
            class="moon3"
            src="assets/icons/moon2.png">

           <img
           class="snoopy-flower"
            src="assets/snoopy/snoopy-flower.png">

           <div
           class="note-button"
           onclick="showReasons()">

            <img
            class="note-img"
            src="assets/buttons/note.png">

            <span class="special-title">
                reasons why You're Special 🤍
            </span>

            </div>

            <div id="reasonsContainer">

            </div>

            <div
            class="next-wrapper slide3-next"
            onclick="nextSlide(4)">

            <img
            class="next-btn"
            src="assets/buttons/arrow-next.png">

            <span class="next-label">
                NEXT
            </span>

            </div>

        </section>

        `;

    }

    else if(currentSlide === 4){

        app.innerHTML = `

        <section class="slide slide4 fade-in">

            <img
            class="bg"
            src="assets/backgrounds/slide4-bg.png">

            <img
            class="snoopy-camera"
            src="assets/snoopy/snoopy-camera.png">

            <!-- POLAROID 1 -->

            <div
            class="polaroid polaroid1"
            onclick="showPhoto(1)">

                <img
                class="polaroid-img"
                src="assets/buttons/polaroid.png">

                <img
                id="photo1"
                class="hidden-photo photo1"
                src="assets/photos/photo1.png">

                <div class="caption1">
                    the sweetest
                </div>

            </div>

            <!-- POLAROID 2 -->

            <div
            class="polaroid polaroid2"
            onclick="showPhoto(2)">

                <img
                class="polaroid-img"
                src="assets/buttons/polaroid.png">

                <img
                id="photo2"
                class="hidden-photo photo2"
                src="assets/photos/photo2.png">

                <div class="caption2">
                    the cutest
                </div>

            </div>

            <!-- POLAROID 3 -->

            <div
            class="polaroid polaroid3"
            onclick="showPhoto(3)">

                <img
                class="polaroid-img"
                src="assets/buttons/polaroid.png">

                <img
                id="photo3"
                class="hidden-photo photo3"
                src="assets/photos/photo3.png">

                <div class="caption3">
                    the prettiest
                </div>

            </div>


            <div
            class="next-wrapper slide4-next"
            onclick="nextSlide(5)">

                <img
                class="next-btn"
                src="assets/buttons/arrow-next.png">

                <span class="next-label">
                    NEXT
                </span>

            </div>

        </section>

        `;

    }

    else if(currentSlide === 5){

        app.innerHTML = `

        <section class="slide slide5 fade-in">

            <img
            class="bg"
            src="assets/backgrounds/slide5-bg.png">

            <div
            class="sun-button"
            onclick="showSunPhoto()">

                <img
                class="sun-img"
                src="assets/buttons/sun.png">

                <img
                id="sunPhoto"
                class="sun-photo"
                src="assets/photos/photo4.png">

            </div>

            <div class="slide5-text">
                tap to see

                <br>

                "the center of universe"
            </div>

            <img
            class="snoopy-laughing"
            src="assets/snoopy/snoopy-laughing.png">

            <div
            class="next-wrapper slide5-next"
            onclick="nextSlide(6)">

                <img
                class="next-btn"
                src="assets/buttons/arrow-next.png">

                <span class="next-label">
                    NEXT
                </span>

            </div>

        </section>

        `;

    }

    else if(currentSlide === 6){

        app.innerHTML = `

        <section class="slide slide6 fade-in">

            <img
            class="bg"
            src="assets/backgrounds/slide6-bg.png">

            <div class="game-title">

                Catch The Hearts

            </div>

            <div class="heart-counter">

                ❤️ 0 / 10

            </div>

            <div
            class="start-note"
            onclick="startHeartGame()">

                <div class="note-title">

                    Help Sonpy to finish this game

                </div>

                <div class="note-subtitle">

                    Ready babyy?

                </div>

            </div>

            <img
            class="snoopy-net"
            src="assets/snoopy/snoopy-net.png">

            <div
            class="unlock-box hidden">

                You unlocked
                a secret message

            </div>

            <div
            class="next-wrapper slide6-next">

                <img
                class="next-btn"
                src="assets/buttons/arrow-next.png">

                <span class="next-label">

                    NEXT

                </span>

            </div>

        </section>

        `;

        setTimeout(()=>{

            initSnoopyControls();

        },50);

    }

}

function startBirthday(){

    startMusic();

    document
    .querySelector(".slide1")
    .classList.add("fade-out");

    setTimeout(()=>{

        goToSlide(2);

    },800);

}
function typeSlide2(){

    const text = `Halo my Gwen!
selamat hari menetas sayang,
ga terasa ndut udah 20 tahun
udah berkepala 2
kaciyan banet jadi fosil`;

    const target =
    document.getElementById("typingText");

    let i = 0;

    target.innerHTML = "";

    const typing = setInterval(()=>{

        if(i < text.length){

            target.innerHTML += text.charAt(i);

            i++;

        }else{

            clearInterval(typing);

        }

    },40);

}
function showReasons(){

    const container =
    document.getElementById(
        "reasonsContainer"
    );

    container.innerHTML="";

    const reasons=[

        "Karena kamu suka Sonpy",

        "Karena kamu cantik, lucu, gemesin, baik hati",

        "Karena kamu Adin, dan ga ada adin lain yg kayak kamu"

    ];

    reasons.forEach(

        (text,index)=>{

        setTimeout(()=>{
        
        const card=
        document.createElement(
        "div"
        );

        card.className=
            "reason-card";

        card.innerHTML=
        text;
    
        container.appendChild(
        card
        );

        }, index*700);

        });

    }

loadSlide();

let photoIndex = 0;

const photos = [

    "assets/photos/photo1.png",

    "assets/photos/photo2.png",

    "assets/photos/photo3.png"

];

const captions = [

    "the sweetest",

    "the cutest",

    "the prettiest"

];

function showPhoto(number){

    const photo =
    document.getElementById(`photo${number}`);

    photo.style.opacity = "1";

    photo.style.transform = "scale(1)";

}

function showSunPhoto(){

    const photo =
    document.getElementById("sunPhoto");

    photo.style.opacity = "1";

    photo.style.transform = "scale(1)";

}