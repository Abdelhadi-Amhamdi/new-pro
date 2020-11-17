
// seloctor


// nav
const mybutton = document.querySelector('.btn-primary')
const mysection = document.querySelector('.part2')
const closebtn = document.querySelector('.btn-danger')

// color changer
const logoletter = document.querySelectorAll('.c')
const logobutton = document.querySelectorAll('.bc')
const red = document.querySelector('button#red')
const green = document.querySelector('button#green')
const yellow = document.querySelector('button#yellow')
const pink = document.querySelector('button#pink')
const orange = document.querySelector('button#orange')
const blue = document.querySelector('button#blue')

// font changer

const fonts = document.querySelector('.font-input')
const textes = document.querySelectorAll('#font')


// events

mybutton.addEventListener('click' , opensection)
closebtn.addEventListener('click' , closesection)


red.addEventListener('click' , makeitred)
green.addEventListener('click' , makeitgreen)
yellow.addEventListener('click' , makeityellow)
pink.addEventListener('click' , makeitpink)
orange.addEventListener('click' , makeitorange)
blue.addEventListener('click' , makeitblue)


fonts.addEventListener('change' , getvalue)



// functions

function opensection(){
    mysection.style.display = 'block';
    mybutton.style.display = 'none';
}

function closesection(){
    mysection.style.display = 'none';
    mybutton.style.display = 'block';
}

function makeitred() {
    logoletter.forEach(c => {
        c.setAttribute('class' , 'red')
    });
    logobutton.forEach(bc => {
        bc.setAttribute('class' , 'bred')
    });
}
function makeitgreen() {
    logoletter.forEach(c => {
        c.setAttribute('class' , 'green')
    });
    logobutton.forEach(bc => {
        bc.setAttribute('class' , 'bgreen')
    });
}
function makeityellow() {
    logoletter.forEach(c => {
        c.setAttribute('class' , 'yellow')
    });
    logobutton.forEach(bc => {
        bc.setAttribute('class' , 'byellow')
    });
}
function makeitpink() {
    logoletter.forEach(c => {
        c.setAttribute('class' , 'pink')
    });
    logobutton.forEach(bc => {
        bc.setAttribute('class' , 'bpink')
    });
}

function makeitorange() {
    logoletter.forEach(c => {
        c.setAttribute('class' , 'c')
    });
    logobutton.forEach(bc => {
        bc.setAttribute('class' , 'bc')
    });
}

function makeitblue(){
    logoletter.forEach(c => {
        c.setAttribute('class' , 'blue')
    });
    logobutton.forEach(bc => {
        bc.setAttribute('class' , 'bblue')
    });
}



function getvalue(e) {
    const val = e.target.value

    logoletter.forEach(c => {
        c.setAttribute('id' , val)
    });
    logobutton.forEach(bc => {
        bc.setAttribute('id' , val)
    });
    textes.forEach(text => {
        text.setAttribute('id' , val)
    });
}


// animate background

// function createAnimate(){

//     const colors = [
//         '#2196f3',
//         '#e91e63',
//         '#ffeb3b',
//         '#74ff1d',
//     ]
    
//     const section = document.querySelector('.carousel-inner');
//     const square = document.createElement('span'); 
    
//     var size = Math.random() * 5 
    
//     square.style.width = 20 + size + 'px';
//     square.style.height = 20 + size + 'px';
    
//     square.style.top = Math.random() * innerHeight + 'px';
//     square.style.left = Math.random() * innerWidth + 'px';

//     const bg = colors[Math.floor(Math.random() * colors.length)]
//     square.style.background = bg ;

//     square.setAttribute('class' , 'animate')
//     section.appendChild(square)

//     setTimeout(() => {
//         square.remove();
//     }, 5000);
// }


// setInterval(createAnimate , 150)
