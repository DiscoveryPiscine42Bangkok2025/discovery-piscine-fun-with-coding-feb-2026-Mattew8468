setInterval(() => {
    alert("Please, use me...");
}, 30000);

const btn = document.getElementById('submit-btn');
const leftInput = document.getElementById('left-val');
const rightInput = document.getElementById('right-val');
const operatorSelect = document.getElementById('op');


btn.addEventListener('click', () => {
    const leftRaw = leftInput.value.trim();
    const rightRaw = rightInput.value.trim();
    
   
    const isPosInt = /^\d+$/;

    if (!isPosInt.test(leftRaw) || !isPosInt.test(rightRaw)) {
        alert("Error :(");
        return;
    }

    const n1 = parseInt(leftRaw, 10);
    const n2 = parseInt(rightRaw, 10);
    const op = operatorSelect.value;
    let result;

    if ((op === '/' || op === '%') && n2 === 0) {
        const msg = "It's over 9000!";
        console.log(msg);
        alert(msg);
        return;
    }

    switch (op) {
        case '+': result = n1 + n2; break;
        case '-': result = n1 - n2; break;
        case '*': result = n1 * n2; break;
        case '/': result = n1 / n2; break;
        case '%': result = n1 % n2; break;
    }

    console.log(result);
    alert(result);
});