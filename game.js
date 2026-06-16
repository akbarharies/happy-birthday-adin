let score = 0;

let gameStarted = False;



function startHeartGame(){

    if(gameStarted) return;

    gameStarted = true;

    const note =
    document
    .getElementById(
        "startNote"
    );

    const title =
    document
    .getElementById(
        "gameTitle"
    );

    if(note){

        note.style.display =
        "none";
    }

    if(title){

        title.style.display =
        "none";
    }

    spawnHeart();

}


function spawnHeart(){

    if(score>=10){
        return;
    }

    const container =
    document.getElementById(
        "heartContainer"
    );

    if(!container){

        return;

    }

    const heart =
    document.createElement(
        "img"
    );

    const random =
    Math.floor(
        Math.random()*4
    )+1;

    heart.src =
    `assets/icons/heart${random}.png`;

    heart.className =
    "heart";

    heart.style.left =
    Math.random()*75
    +"%";

    container
    .appendChild(
        heart
    );

    watchHeart(
        heart
    );

    setTimeout(()=>{

        spawnHeart();

    },

    1000);

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


function watchHeart(heart){

    const interval =
    setInterval(()=>{

        if(!heart.parentNode){

            clearInterval(
            interval
            );

            return;

        }

        const heartRect =
        heart
        .getBoundingClientRect();

        const snoopyRect =
        document
        .querySelector(
            ".snoopy-net"
        )
        .getBoundingClientRect();

        const hit =

        heartRect.bottom
        >=
        snoopyRect.top

        &&

        heartRect.left
        <
        snoopyRect.right

        &&

        heartRect.right
        >
        snoopyRect.left;

        if(hit){

            heart.remove();

            score++;

            document
            .getElementById(
                "heartCounter"
            )

           .innerHTML=

            `❤️ ${score}/10`;

            clearInterval(
            interval);

        }

    },80);

}

