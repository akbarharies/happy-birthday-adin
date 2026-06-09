function startHeartGame(){

    console.log("Game Started");
}


let snoopy = null;

let isDragging = false;

let offsetX = 0;


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
