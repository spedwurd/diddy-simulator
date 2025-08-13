let baby_oil = 100000000;
let total_oil = baby_oil;
let oilers = 0;
let oiling_rate = 1;
let oiling_speed = 1000;
let party = 0;
let oil_per_click = 1;
let freaky_cost = 10;
let oiling_cost = 50;
let mango_cost = 100;
let illegal_cost = 500;
let countdown = 5;

let quantity = 1;
let cost = 0;

updateOil();

// canvas settings for background oil
const dpr = window.devicePixelRatio || 1;
const canvas = document.getElementById('oil-block');
const ctx = canvas.getContext('2d');

canvas.width = window.innerWidth*dpr;
canvas.height =window.innerHeight*dpr;

console.log(dpr)
console.log(canvas.width);
console.log(canvas.height);

ctx.scale(dpr, dpr);



let items = {freaky: {cost: 10, amount: 0, desc: 'Boost clicks.', cost_rate: 1.1}, 
oiling: {cost: 50, amount: 0, desc: 'Automatic oil.', cost_rate: 1.5}, 
mango: {cost: 100, amount: 0, desc: 'Better oiling.', cost_rate: 2}, 
illegal: {cost: 500, amount: 0, desc: 'Faster oiling.', cost_rate: 5}};

let friends = {bieber: {price: 1000, info: "babys pop up on the screen"}, 
hawking: {price: 2500, info: "he deadass js rolls around the screen"}, 
leo: {price: 5000, info: "boosts ur oil production by 25"}, 
jayz: {price: 10000, info: "👅 this guy does absolutely nothing 🥹"}, 
cosby: {price: 25000, info: "idk ts guy is an actual dickhead lmao"}, 
ye: {price: 50000, info: "sometimes kanyes cousin will show up -- click him for oil"}, 
mrbeast: {price: 100000, info: "boosts oil production by 500x 🥹 this will break the website"},
epstein: {price: 250000, info: "67"}, 
lebron: {price: 500000, info: "earn a gazillion dollars 🤑"}}

document.getElementById('nav-jizdy').innerText =  `Jizdy comes in ${countdown} Jizdy comes in ${countdown} Jizdy comes in ${countdown} Jizdy comes in ${countdown} Jizdy comes in ${countdown} Jizdy comes in ${countdown} Jizdy comes in ${countdown} Jizdy comes in ${countdown} Jizdy comes in ${countdown} Jizdy comes in ${countdown} Jizdy comes in ${countdown} Jizdy comes in ${countdown} Jizdy comes in ${countdown}`;

function playAudio() {
    let audio = new Audio("/assets/button.mp3");
    audio.play();
}

function addImage() {
    var c = document.getElementById("oil-block");
    var ctx = c.getContext("2d");
    new_oil = document.createElement('img');
    new_oil.setAttribute('src', `/assets/baby-oil.png`);
    console.log(c.width);
    ctx.drawImage(new_oil, Math.random()*(c.width-new_oil.width), Math.random()*(c.height-new_oil.height), new_oil.width*0.1, new_oil.height*0.1);
}

function updateOil() {
    oil_count = document.getElementById('oil');
    oil_count.innerText = baby_oil;
    document.getElementById('total_oil').innerText = total_oil;
    Object.assign(oil_count.style, {color: 'green'});
    setTimeout(() => {Object.assign(oil_count.style, {color: 'red'});}, 100);
    addImage('baby-oil')
}

async function getOil() {
    playAudio()
    console.log('hi')
    baby_oil += oil_per_click;
    total_oil += oil_per_click;
    updateOil();
}

function buyItem(item, quant) {
    if (items[item]['cost'] > baby_oil) { // too broke
        return;
    }
    cost = items[item]['cost'];
    quantity = 1;
    if (quant=='max') {
        while (cost*items[item]['cost_rate'] < baby_oil) { // find max possible purchase
            quantity += 1;
            cost *= items[item]['cost_rate'];
        }
    }
    // update variables
    baby_oil = Math.floor(baby_oil - cost); 
    items[item]['cost'] = Math.floor(cost * items[item]['cost_rate']);
    items[item]['amount'] += quantity;
    document.getElementById(`${item}-info`).innerText = `${items[item]['desc']} ${items[item]['cost']} oil.`;
    document.getElementById(`${item}-count`).innerText = `${items[item]['amount']}x`;
    updateOil();

    // item specific changes
    if (item == 'freaky') {
        oil_per_click += quantity;
    } else if (item == 'oiling') {
        oilers += quantity;
    } else if (item == 'mango') {
        oiling_rate += quantity;
    } else if (item == 'illegal') {
        oiling_speed -= quantity*50;
    }
}

function getFriend(friend) { // HIGHLY UNFINISHED
    if (friends[friend]["price"] <= baby_oil) {
        baby_oil -= friends[friend]["price"];
        updateOil();
        party = document.getElementById('party-column');
        friend_image = document.getElementById(friend);

        friend_image.remove();
        friend_image = document.createElement('img');
        friend_image.setAttribute('src', `/assets/friends/${friend}.webp`), Object.assign(friend_image.style, {height: '15vh', width: '15vw', position: 'absolute', left: `${Math.floor(Math.random() * 90)}%`, top: `${Math.floor(Math.random() * 90)}%`, animation: 'fadeIn 1s'});
        party.appendChild(friend_image)


        if (friend=='bieber') {
            babyShit();
        } else if (friend=='hawking') {
            hawkingShit();
        } else if (friend=='leo') {
            oiling_rate += 25;
        } else if (friend=='jayz') {
            jayzShit();
        } else if (friend=='cosby') {
            cosbyShit();
        } else if (friend=='ye') {
            yeShit();
        } else if (friend=='lebron') {
            baby_oil += 1000000000000000;
            updateOil();
        } else if (friend=='mrbeast') {
            oiling_rate *= 500;
        }
    }
}

function showInfo(friend) {
    info_display = document.getElementById('friend-info');
    info_display.innerText = `${friend}: ${friends[friend]["price"]} oil.\n\n${friends[friend]["info"]}`;
}


function goldenOil(ts) {
    baby_oil = Math.floor(baby_oil*1.5);
    total_oil += Math.floor(total_oil*0.5);
    updateOil();
    ts.remove();
}

function createGoldenOil() {
    new_golden_oil = document.createElement('img');
    new_golden_oil.setAttribute('src', '/assets/golden-oil.png'), new_golden_oil.setAttribute('onclick', 'goldenOil(this)'), Object.assign(new_golden_oil.style, {height: '15vh', width: '15vw', position: 'absolute', left: `${Math.floor(Math.random() * 90)}%`, top: `${Math.floor(Math.random() * 90)}%`, animation: 'fadeIn 1s'})
    document.getElementById('body').appendChild(new_golden_oil);
}

function oilInterval() {
    setTimeout(() => {
    if (oilers > 0) { 
        baby_oil += oiling_rate * oilers;
        total_oil += oiling_rate * oilers;
        for (let i = 0; i < oiling_rate*oilers; i++) { 
            updateOil(); 
        }
    }
    oilInterval()}, oiling_speed);
}

oilInterval();


setInterval(() => {
    countdown -= 1;
    if (countdown <= 0) {
        countdown = Math.floor(Math.random() * 20 + 30);
        for (let i = 0; i<Math.floor(Math.random()*5+5); i++) {
            setTimeout(() => {createGoldenOil();}, 250*i);
        }
    }
    document.getElementById('nav-jizdy').innerText = `Jizdy comes in ${countdown} Jizdy comes in ${countdown} Jizdy comes in ${countdown} Jizdy comes in ${countdown} Jizdy comes in ${countdown} Jizdy comes in ${countdown} Jizdy comes in ${countdown} Jizdy comes in ${countdown} Jizdy comes in ${countdown} Jizdy comes in ${countdown} Jizdy comes in ${countdown} Jizdy comes in ${countdown} Jizdy comes in ${countdown}`;
    }, 1000);


setInterval(() => {
    createGoldenOil();
}, Math.random()*3000 + 2000);
