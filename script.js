const countdown = document.querySelector(".count")
let time = 10;
countdown.innerHTML = time--;
setTimeout(()=>{
    countdown.innerHTML = time--;
    setTimeout(()=>{
        countdown.innerHTML = time--;
        setTimeout(()=>{
            countdown.innerHTML = time--;
            setTimeout(()=>{
                countdown.innerHTML = time--;
                setTimeout(()=>{
                    countdown.innerHTML = time--;
                    setTimeout(()=>{
                        countdown.innerHTML = time--;
                        setTimeout(()=>{
                            countdown.innerHTML = time--;
                            setTimeout(()=>{
                                countdown.innerHTML = time--;
                                setTimeout(()=>{
                                    countdown.innerHTML = time--;
                                    setTimeout(()=>{
                                        countdown.innerHTML = "HAPPY INDEPENDENCE DAY TO ALL";
                                    },1000)
                                },1000)
                            },1000)
                        },1000)
                    },1000)
                },1000)
            },1000)
        },1000)
    },1000)
},1000)
