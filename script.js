console.log("hey")

const selection = document.querySelectorAll(".selection");
console.log(selection);
const audio = document.getElementsByClassName("audio")[0];
console.log(audio)

const audioOpen = () =>{
    audio.src = "./assets/audios/1002.MP3"
    audio.play()
    setTimeout(function() {
        alert("Wrong choice, 'This option is not available'. Please choose another");
    }, 1000); 
}

const container = document.querySelector(".container");
console.log(container)


selection.forEach((select, index) => {
    select.addEventListener("click", () => {
        
        if(index == 0) {
            audio.pause()
            alert("HUMPH, only a little? You can make your mind again!")
        }

        if (index == 1){
            audioOpen()
        }

        if(index == 2){
            audio.pause();
            audio.src = "./assets/audios/Lego Batman falling in love meme(MP3_160K).mp3"
            audio.play()
            
            setTimeout(function() {
                alert("I love you so much, too, bae. Here is what I made for you")
            }, 1000); 
            container.classList.add("active");
        }

        if(index == 3){
            audioOpen()
        }

    })
})

const close = document.querySelector(".close")
close.addEventListener("click", () => {
    container.classList.remove("active");
    audio.pause()
})