console.log('Snov Email-Click: Active');

function hijackEmailText() {
    const emailElements = document.querySelectorAll('.long-email-width');

    emailElements.forEach(emailEl => {
        if (!emailEl.dataset.hijacked) {
            const emailText = emailEl.innerText.trim();

            if (emailText && emailText.includes('@')) {
                emailEl.style.cursor = 'pointer';
                emailEl.style.color = '#6d53de'; // Цвет как у иконки в прошлом варианте
                
                emailEl.setAttribute('title', `Написать письмо: ${emailText}`);

                emailEl.addEventListener('click', function(e) {
                    e.preventDefault();
                    e.stopPropagation();

                    console.log(`Email clicked -> Mailto: ${emailText}`);
                    window.location.href = `mailto:${emailText}`;
                }, true);

                emailEl.dataset.hijacked = "true";
            }
        }
    });
}

let timeout;
const observer = new MutationObserver(() => {
    clearTimeout(timeout);
    timeout = setTimeout(hijackEmailText, 500);
});

observer.observe(document.body, {
    childList: true,
    subtree: true
});

hijackEmailText();