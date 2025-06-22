let baby_oil = 0;
let oil_grabber = 0;
let grabber_rate = 1;
let party = 0;
let oil_per_click = 1000;
let freaky_cost = 10;
let oiling_cost = 50;
let mango_cost = 100;
let illegal_cost = 500;
let countdown = 5;

let items = {freaky: {cost: 10, amount: 0, desc: 'Boost clicks.'}, 
oiling: {cost: 50, amount: 0, desc: 'Automatic oil.'}, 
mango: {cost: 100, amount: 0, desc: 'Faster oiling.'}, 
illegal: {cost: 500, amount: 0, desc: 'Idk drugs'}};

document.getElementById('nav-jizdy').innerText =  `Jizdy comes in ${countdown} Jizdy comes in ${countdown} Jizdy comes in ${countdown} Jizdy comes in ${countdown} Jizdy comes in ${countdown} Jizdy comes in ${countdown} Jizdy comes in ${countdown} Jizdy comes in ${countdown} Jizdy comes in ${countdown} Jizdy comes in ${countdown} Jizdy comes in ${countdown} Jizdy comes in ${countdown} Jizdy comes in ${countdown}`;

function playAudio() {
    let audio = new Audio("/assets/button.mp3");
    audio.play();
}

function updateOil() {
    oil_count = document.getElementById('oil');
    oil_count.innerText = baby_oil;
    Object.assign(oil_count.style, {color: 'green'});
    setTimeout(() => {Object.assign(oil_count.style, {color: 'red'});}, 100);
    new_oil = document.createElement('img')
    new_oil.setAttribute('src', '/assets/baby-oil.png'), Object.assign(new_oil.style, { height: '5vh', width: '5vw', position: 'absolute', zIndex: '-1000', left: `${Math.floor(Math.random() * 100)}%`, top: `${Math.floor(Math.random() * 100)}%`, animation: 'fadeIn 1s'});
    document.getElementById('oil-block').appendChild(new_oil)
}

async function getOil() {
    playAudio()
    console.log('hi')
    baby_oil += oil_per_click;
    updateOil();
}


function buyItem(item) {
    console.log(items[item]['cost']);
    if (items[item]['cost'] <= baby_oil) {
        baby_oil -= items[item]['cost'];
        items[item]['cost'] = Math.floor(items[item]['cost'] * 1.1);
        items[item]['amount'] += 1;
        document.getElementById(`${item}-info`).innerText = `${items[item]['desc']} ${items[item]['cost']} oil.`;
        document.getElementById(`${item}-count`).innerText = `${items[item]['amount']}x`;
        updateOil();
    }
}

function upgradeClicks() {
    if (baby_oil >= upgrade_cost) {
        playAudio();
        baby_oil -= upgrade_cost;
        upgrade_cost = Math.floor(upgrade_cost * 1.1);
        oil_per_click += 1;
        document.getElementById('upgrade-clicks-cost').innerText = `(-${upgrade_cost} oil)`;
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
        document.getElementById('grabber-cost').innerText = `(-${grabber_cost} oil)`;
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
        document.getElementById('party-cost').innerText = `(-${party_cost} oil)`;
        document.getElementById('party-count').innerText = `${party}`;
        grabber_rate += 1;
        updateOil();
    }
}

function goldenOil(ts) {
    baby_oil *= 2;
    updateOil();
    ts.remove();
}

function createGoldenOil() {
    new_golden_oil = document.createElement('img');
    new_golden_oil.setAttribute('src', '/assets/golden-oil.png'), new_golden_oil.setAttribute('onclick', 'goldenOil(this)'), Object.assign(new_golden_oil.style, {height: '15vh', width: '15vw', position: 'absolute', left: `${Math.floor(Math.random() * 100)}%`, top: `${Math.floor(Math.random() * 100)}%`, animation: 'fadeIn 1s'})
   // document.getElementById('oil-block').appendChild(new_golden_oil);
}


setInterval(() => {
    if (oil_grabber > 0) {
        baby_oil += grabber_rate * oil_grabber;
        for (let i = 0; i < oil_grabber*grabber_rate; i++) {
            updateOil();
        }
    }
}, 1000);

setInterval(() => {
    countdown -= 1;
    if (countdown <= 0) {
        for (let i = 0; i<10; i++) {
            setTimeout(() => {createGoldenOil();}, 500);
        }
        countdown = 30;
    }
    document.getElementById('nav-jizdy').innerText = `Jizdy comes in ${countdown} Jizdy comes in ${countdown} Jizdy comes in ${countdown} Jizdy comes in ${countdown} Jizdy comes in ${countdown} Jizdy comes in ${countdown} Jizdy comes in ${countdown} Jizdy comes in ${countdown} Jizdy comes in ${countdown} Jizdy comes in ${countdown} Jizdy comes in ${countdown} Jizdy comes in ${countdown} Jizdy comes in ${countdown}`;
    }, 1000);


setInterval(() => {
//    createGoldenOil();
}, Math.random()*5000);
