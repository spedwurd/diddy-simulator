let baby_oil = 0

function playAudio() {
    let audio = new Audio("diddyparty.mp3");
    audio.play();
}

function updateOil() {
    document.getElementById('baby_oil').innerText = baby_oil;
}

async function getOil() {
    playAudio()    
    console.log('hi')
    await new Promise(r => setTimeout(r, 100));
    baby_oil += 1
    new_oil = document.createElement('img')
    new_oil.setAttribute('src', '/images/baby-oil.png')
    new_oil.style.left = `${Math.floor(Math.random() * 100)}%`
    new_oil.style.top = `${Math.floor(Math.random() * 100)}%`
    document.getElementById('baby_oils').appendChild(new_oil)
    updateOil()
}

getOil()