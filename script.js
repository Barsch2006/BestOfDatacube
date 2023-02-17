const zitate = [
    '"Eine enorme Verschwendung meiner Zeit"',
    '"Edunite ist ein schreckliches System"',
    '"Man kann von Glück reden, dass Schüler der Unter- und Mittelstufe im Allgemeinen nicht mit Computern umgehen können."',
    '"...aber wenn man darauf klickt, macht Edunite dann so:"',
    '"Wie ich Edunite hasse, dieses ************ S*******System!"',
    '"...wird (eventuell) fortgesetzt."'
];

const colors = [
    {
        bg: '#1e1e1e', color: '#fff'
    },
    {
        bg: '#00c00a', color: '#000'
    },
    {
        bg: '#0023c0', color: '#fff'
    },
    {
        bg: '#c000ad', color: '#fff'
    },
    {
        bg: '#7000c0', color: '#fff'
    },
    {
        bg: '#ffffff', color: '#000'
    },
];

var num = 0;
const max = zitate.length;

function OnLoad() {
    load(num);
}

function plus() {
    if (++num > zitate.length - 1) num = 0;
    load(num);
}

function minus() {
    if (--num < 0) num = zitate.length - 1;
    load(num);
}

function load(index) {
    document.getElementById("zitate").innerText = zitate[index];
    let n = colors[Math.floor(Math.random() * colors.length)];
    document.getElementById("zitat_box").style.backgroundColor = n.bg;
    document.getElementById("zitat").style.color = n.color;
}
