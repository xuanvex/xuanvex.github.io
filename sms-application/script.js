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

var isCheck = false;

checkbox.addEventListener('click', () => {
    if(!checkbox.classList.contains('check')) {
        checkbox.classList.add('check');
        isCheck = true;
    } else {
        checkbox.classList.remove('check');
        isCheck = false;
    }
})