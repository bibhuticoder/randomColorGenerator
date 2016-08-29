var combination = 'ABCDEF0123456789';

function generate() {
    var c = '#';
    for (var i = 0; i < 6; i++) {
        c += combination[random(0, 15)];
    }
    return c;
}

function random(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

document.getElementById('btn').onclick = function () {
    document.getElementById('output').style.backgroundColor = generate();
}