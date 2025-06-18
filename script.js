let baby_oil = 0;
let oil_grabber = 0;
let grabber_rate = 1;
let party = 0;
let oil_per_click = 1;
let grabber_cost = 10;
let upgrade_cost = 50;
let party_cost = 100;
let countdown = 30;
document.getElementById('nav-jizdy').innerText = `Jizdy comes in ${countdown} Jizdy comes in ${countdown} Jizdy comes in ${countdown} Jizdy comes in ${countdown} Jizdy comes in ${countdown} Jizdy comes in ${countdown} Jizdy comes in ${countdown} Jizdy comes in ${countdown} Jizdy comes in ${countdown} Jizdy comes in ${countdown} Jizdy comes in ${countdown} Jizdy comes in ${countdown} Jizdy comes in ${countdown} Jizdy comes in ${countdown} Jizdy comes in ${countdown} Jizdy comes in ${countdown} Jizdy comes in ${countdown} Jizdy comes in ${countdown} Jizdy comes in ${countdown} Jizdy comes in ${countdown} Jizdy comes in ${countdown} Jizdy comes in ${countdown} Jizdy comes in ${countdown} Jizdy comes in ${countdown}  `;


function playAudio() {
    let audio = new Audio("/assets/button.mp3");
    audio.play();
}

function updateOil() {
    document.getElementById('oil').innerText = baby_oil;
    new_oil = document.createElement('img')
    new_oil.setAttribute('src', '/assets/baby-oil.png'), Object.assign(new_oil.style, { height: '5vh', width: '5vw', position: 'absolute', zIndex: '-1000'});
    new_oil.style.left = `${Math.floor(Math.random() * 100)}%`
    new_oil.style.top = `${Math.floor(Math.random() * 100)}%`
    document.getElementById('column-two').appendChild(new_oil)
}

async function getOil() {
    playAudio()
    console.log('hi')
    baby_oil += oil_per_click;
    updateOil();
}

function upgradeClicks() {
    if (baby_oil >= upgrade_cost) {
        playAudio();
        baby_oil -= upgrade_cost;
        upgrade_cost = Math.floor(upgrade_cost * 1.1);
        oil_per_click += 1;
        document.getElementById('upgrade-clicks-cost').innerText = `(-${upgrade_cost})`;
        document.getElementById('oil-per-click').innerText = `(+${oil_per_click})`;
        document.getElementById('opc-value').innerText = `${oil_per_click}`;
        updateOil();
        }
}

function buyGrabber() {
    if (baby_oil >= grabber_cost) {
        playAudio();
        baby_oil -= grabber_cost;
        oil_grabber += 1;
        grabber_cost = Math.floor(grabber_cost * 1.1);
        document.getElementById('grabber-cost').innerText = `(-${grabber_cost})`;
        document.getElementById('grabber-count').innerText = `${oil_grabber}`;
        updateOil();
    }
}

function hostParty() {
    if (baby_oil >= party_cost) {
        playAudio();
        baby_oil -= party_cost;
        party += 1;
        party_cost = Math.floor(party_cost * 1.1);
        document.getElementById('party-cost').innerText = `(-${party_cost})`;
        document.getElementById('party-count').innerText = `${party}`;
        grabber_rate += 1;
        updateOil();
    }
}


setInterval(() => {
    if (oil_grabber > 0) {
        baby_oil += grabber_rate * oil_grabber;
        console.log(grabber_rate);
        console.log(oil_grabber);
        updateOil();
    }
}, 1000);

setInterval(() => {
    countdown -= 1;
    document.getElementById('nav-jizdy').innerText = `Jizdy comes in ${countdown} Jizdy comes in ${countdown} Jizdy comes in ${countdown} Jizdy comes in ${countdown} Jizdy comes in ${countdown} Jizdy comes in ${countdown} Jizdy comes in ${countdown} Jizdy comes in ${countdown} Jizdy comes in ${countdown} Jizdy comes in ${countdown} Jizdy comes in ${countdown} Jizdy comes in ${countdown} Jizdy comes in ${countdown} Jizdy comes in ${countdown} Jizdy comes in ${countdown} Jizdy comes in ${countdown} Jizdy comes in ${countdown} Jizdy comes in ${countdown} Jizdy comes in ${countdown} Jizdy comes in ${countdown} Jizdy comes in ${countdown} Jizdy comes in ${countdown} Jizdy comes in ${countdown} Jizdy comes in ${countdown}  `;
    }, 1000);
