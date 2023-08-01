const one = getid("one");
const two = getid("two");
const three = getid("three");
const four = getid("four");
const five = getid("five");
const six = getid("six");
const seven = getid("seven");
const eight = getid("eight");
const nine = getid("nine");
const extra = getid("extra");

const buffer = getid("buffer");

const container = getid("grid-container");

const startBtn = getid("start");

const instructions = getid("instructions");

const elements = [one, two, three, four, five, six, seven, eight, nine];

const set = ["A", "B", "C", "D", "E", "F", "G", "H", "I"];

one.addEventListener("click", () => {swap(one, [two, four])});
two.addEventListener("click", () => {swap(two, [one, three, five])});
three.addEventListener("click", () => {swap(three, [two, six])});
four.addEventListener("click", () => {swap(four, [one, five, seven])});
five.addEventListener("click", () => {swap(five, [two, four, six, eight])});
six.addEventListener("click", () => {swap(six, [three, five, nine])});
seven.addEventListener("click", () => {swap(seven, [four, eight])});
eight.addEventListener("click", () => {swap(eight, [five, seven, nine, extra])});
nine.addEventListener("click", () => {swap(nine, [six, eight])});
extra.addEventListener("click", () => {swap(extra, [one, two, three, four, five, six, seven, eight, nine])});

startBtn.addEventListener("click", () => {startGame();})

function gen() {
    const rand = new Set();
    while (rand.size < 9) {
        rand.add(Math.floor(Math.random() * 9));
    }
    const randarray = Array.from(rand);
    for (i = 0; i < randarray.length; i++) {
        elements[i].innerText = set[randarray[i]];
    }
    extra.innerText = "";
}

function swap(src, dest) {
    dest.forEach(element => {
        if(element.innerText === ""){
            element.innerText = src.innerText;
            src.innerText = "";
        }
    });
    check();
}

function check() {
    if(one.innerText === "A" && two.innerText === "B" && three.innerText === "C" && four.innerText === "D" && five.innerText === "E" && six.innerText === "F" && seven.innerText === "G" && eight.innerText === "H" && nine.innerText === "I"){
        setTimeout(() => {
            startBtn.innerText = "Play Again";
            container.style.display = "none";
            buffer.style.display = "inline-block";
            buffer.style.opacity = "1";
        }, 500)
    }
}

function startGame() {
    gen();
    buffer.style.opacity="0";
    setTimeout(()=>{buffer.style.display="none",container.style.display="grid";}, 500)
}

function getid(id) {
    return document.getElementById(id);
}