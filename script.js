const yesBtn = document.getElementById('yesBtn');
const noBtn = document.getElementById('noBtn');
const messageDiv = document.getElementById('message');

yesBtn.addEventListener('click', () => {
    messageDiv.innerHTML = "crl slc agora eh oficial do oficial porra sesh";
    messageDiv.style.opacity = 1;
});

noBtn.addEventListener('click', () => {
    messageDiv.innerHTML = "te aminho aliança da pandora uwu";
    messageDiv.style.opacity = 1;
});
