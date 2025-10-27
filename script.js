const button = document.querySelector("#btn");
const par = document.querySelector("#par");

const quotes = ["You are never too old to set another goal or to dream a new dream - C.S.Lewis.",
"Ever tried. Ever failed. No matter. Try Again. Fail again. Fail better – Samuel Beckett",
"The only thing that will stop you from fulfilling your dreams is you – Tom Bradley",
"The future belongs to those who believe in the beauty of their dreams– Eleanor Roosevelt",
"The only thing worse than starting something and failing … is not starting something – Seth Godin",
"You don’t have to see the whole staircase, just take the first step – Martin Luther King, Jr",
"Be miserable. Or motivate yourself. Whatever has to be done, it’s always your choice – Wayne Dyer",
"To accomplish great things, we must not only act, but also dream; not only plan, but also believe – Anatole France",
"There is only one thing that makes a dream impossible to achieve: the fear of failure – Paulo Coelho",
"Do not be embarrassed by your failures, learn from them and start again – Richard Branson"
]

button.addEventListener("click",function(){
    let randomQuote = quotes[Math.floor(Math.random()*quotes.length)];
    
    par.textContent = randomQuote;
    par.style.display="block";

})
gsap.from("#btn",{rotation:360,duration:2,opacity:0,scale:0.5})