const elements = [
    { id: 'chat', link: 'https://www.chat.com' },
    { id: 'telegram', link: 'https://www.telegram.com' },
    { id: 'twitter', link: 'https://www.twitter.com' },
    { id: 'whatsapp', link: 'https://www.whatsapp.com' },
    { id: 'email', link: 'https://www.email.com' },
    { id: 'more', link: 'https://www.more.com' }
];

const inp = document.getElementById('inp');
const copy = document.getElementById('copy');

elements.forEach(element => {
    const el = document.getElementById(element.id);
    el.addEventListener('click', () => {
        elements.forEach(e => {
            const elem = document.getElementById(e.id);
            elem.querySelector('span').style.color = '';
            elem.querySelector('i').style.color = '';
        });
        el.querySelector('span').style.color = 'red';
        el.querySelector('i').style.color = 'red';
        inp.value = element.link;
    });
});

copy.addEventListener('click', () => {
    inp.select();
    document.execCommand('copy');
    alert('Link copied to clipboard!');
});




