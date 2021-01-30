let screen = document.getElementById('typePin');
let buttons = document.getElementsByClassName('button');
let screenValue = '';
let randomNumber;
let tryValue = parseInt(document.getElementById('try').innerText);
for (const item of buttons) {
    item.addEventListener('click', function (event) {
        let buttonText = event.target.innerText;
        if (buttonText === 'C') {
            screenValue = ''
            screen.value = screenValue;
        }
        else if (buttonText === '<') {
            screenValue = screenValue.slice(0, screenValue.length - 1);
            screen.value = screenValue;
        }
        else {
            screenValue += buttonText;
            screen.value = screenValue;
        }
    });
}
document.getElementById('generateBtn').addEventListener('click', function () {
    randomNumber = Math.floor(Math.random() * (999 - 100 + 1) + 100);
    document.getElementById('generatePin').value = randomNumber
});
document.getElementById('submit').addEventListener('click', function () {
    if (tryValue > 0) {
        tryValue--;
        if (parseInt(screenValue) === randomNumber) {
            document.getElementById('success').style.display = "block";
            document.getElementById('failure').style.display = "none";
        } else {
            document.getElementById('failure').style.display = "block";
        }
        document.getElementById('try').innerText = tryValue;
        screenValue = ''
        screen.value = screenValue;
    }

});
