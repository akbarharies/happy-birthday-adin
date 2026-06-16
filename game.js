let score = 0;

let gameStarted = False;

let snoopy = null;

let isDragging = false;

let offsetX = 0;



function startHeartGame(){

    if(gameStarted) return;

    gameStarted = true;

    document
    .getElementById("startNote")
    .classList
    .add("game-hidden");

    document
    .getElementById("gameTitle")
    .classList
    .add("game-hidden");

    spawnHeart();

}


function spawnHeart(){
    
    if(score>=10) return;
    
    const container =
    document
    .getElementById(
    "heartContainer"
    );

    const heart =
    document
    .createElement("img");

    const number =
    Math.floor(
    Math.random()*4
    )+1;

    heart.src =
    `assets/icons/heart${number}.png`;

    heart.className =
    "heart";

    heart.style.left =
    Math.random()*80
    +"%";

    container
    .appendChild(
    heart
    );

    checkCatch(
    heart
    );

    setTimeout(()=>{

    spawnHeart();

    },
    800+
    Math.random()*1200
    );

    heart.addEventListener(
    "animationend",
    ()=>{

    heart.remove();

    });

}



function checkCatch(heart){
    
    const loop =
    setInterval(()=>{

        if(!heart.parentNode){

            clearInterval(
            loop
            );

            return;

        }

        const h =
        heart
        .getBoundingClientRect();

        const s =
        document
        .querySelector(
            ".snoopy-net"
        )
        .getBoundingClientRect();

        if(

            h.bottom>
            s.top

            &&

            h.left<
            s.right

            &&

            h.right>
            s.left

        ){
            heart.remove();

            score++;

            document
            .getElementById(
                "heartCounter"
            )

            .innerHTML=

            `❤️ ${score} / 10`;

            clearInterval(
                loop
            );

        }

    },80);

}



function initSnoopyControls(){

    snoopy =
    document.querySelector(".snoopy-net");

    if(!snoopy) return;

    snoopy.addEventListener(
        "pointerdown",
        (e)=>{

            isDragging = true;

            const rect =
            snoopy.getBoundingClientRect();

            offsetX =
            e.clientX - rect.left;

        }
    );


    document.addEventListener(
        "pointerup",
        ()=>{

            isDragging = false;

        }
    );


    document.addEventListener(
        "pointermove",
        moveSnoopy
    );

}


function moveSnoopy(e){

    if(!isDragging) return;

    const gameArea =
    document.querySelector(".slide6");

    const gameRect =
    gameArea.getBoundingClientRect();

    let x =
    e.clientX -
    gameRect.left -
    offsetX;

    const maxX =
    gameRect.width -
    snoopy.offsetWidth;

    if(x < 0){

        x = 0;

    }

    if(x > maxX){

        x = maxX;

    }

    snoopy.style.left =
    x + "px";

}
