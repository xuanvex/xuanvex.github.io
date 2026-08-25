const copyIcon = document.getElementById('copy-chat-id');
const chat_id = copyIcon.dataset.value;

copyIcon.addEventListener('click', async () => {
    try {
        await navigator.clipboard.writeText(chat_id);
        const newIcon = document.createElement('i');
        newIcon.id = 'copy-chat-id';
        newIcon.classList.add('copy-success');
       // newIcon.style.color = '#00aaff';
        newIcon.setAttribute('data-lucide', 'check');
        newIcon.setAttribute('title', 'Copied');
        copyIcon.replaceWith(newIcon);
        lucide.createIcons();
        setTimeout(() => {
            const currentIcon = document.getElementById('copy-chat-id');
            if (!currentIcon) return;
            const newRIcon = document.createElement('i');
            newRIcon.id = 'copy-chat-id';
            newRIcon.dataset.value = chat_id;
            newRIcon.setAttribute('data-lucide', 'copy');
            newRIcon.setAttribute('title', 'Copy Again?');
            currentIcon.replaceWith(newRIcon);
            lucide.createIcons();
        }, 1500);
        console.log("Chat ID copied to clipboard:", chat_id);
    } catch (error) {
        console.log("Error copying chat ID:", error);
    }
});


const checkbox = document.getElementById('checkbox');
const number = document.getElementById('number');
const oparator = document.getElementById('telecom');
var isCheck = false;


checkbox.addEventListener('click', () => {
    if(!checkbox.classList.contains('check')) {
        checkbox.classList.add('check');
        isCheck = true;
    } else {
        checkbox.classList.remove('check');
        isCheck = false;
    }
    btnActive();
})

const submit = document.getElementById('submit');
const load = document.getElementById('loader');
const skull = document.getElementById('skull');
const attackText = document.getElementById('attackText');

btnActive();

function btnActive() {
    submit.disabled = !isCheck;
}

load.style.display = 'none';

submit.addEventListener('click', async () => {
    loaderON()
    const num = normalizeBDNumber(number.value);
    const oparatorSIM = oparator.value;
    setTimeout(() => {
        console.log('hi')
    }, 3000); 
    try {;
        if (num === '') return alert("Please fillup the number input");
        if (!numberValid(num)) return alert(`Failed ${num} is not valid`);
        if(oparatorSIM === '') return alert('Please select an a opator SIM that you target to attack?');
        if (!isCheck) return alert(`PLease check the privacy and policy without is check you can't even attack any number.`);

        const send = await fetch(`https://xuanvex.github.io/`, {
            method: 'POST',
            headers: {
                'Content-type' : 'application/json',
                'Xuanvex-Token' : 'xuanvex1234'
            },
            body: JSON.stringify({
                'number' : num,
                'oparator' : oparatorSIM
            })
        });
        const data = await send.json();
        console.log(data);
    } catch (error) {
        console.log(`Error: ${error}`);
    } finally {
        loaderOFF();
        attackText.innerText = 'Attack Failed?';
    }

});

function loaderON() {
    if (load.style.display === 'none') {
        load.style.display= 'flex';
        skull.style.display = 'none'
        attackText.innerText = 'Attacking...'
    }
}
function loaderOFF() {
    if(load.style.display === 'flex') {
        load.style.display = 'none';
        skull.style.display = 'flex';
        attackText.innerText = 'Attack Now';
    }
}
function normalizeBDNumber(number) {
    let num = String(number).trim();
    num = num.replace(/\D/g, "");
    if (num.startsWith("880")) {
        num = "0" + num.slice(3);
    }
    else if (num.startsWith("1") && num.length === 10) {
        num = "0" + num;
    }
    return num;
}
function numberValid(num) {
    num = num.trim().replace(/\s|-/g, "");

    const pattern = /^(?:\+8801|01|1)\d{9}$/;

    return pattern.test(num);
}