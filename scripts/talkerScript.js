const audios = [
    'yes', 
    'no',
    'good'
    // 'dontKnow',
    // 'thanks',
    // 'open',
    // 'turnOn'
];

const talkerContainer = document.getElementById('talkerContainer');

audios.forEach(audio => {
    const div = document.createElement('div');
    div.classList.add('talkerButtonContainer');

    const aud = document.createElement('audio');
    aud.id = `${audio}Audio`;
    aud.src = `../audios/${audio}.mp3`;

    const button = document.createElement('button');
    button.id = `${audio}Button`;
    button.classList.add('talkerButton');
    button.innerHTML = `<img src="../images/talker_icons/${audio}.png" alt="${audio}">`;
    button.addEventListener('click', function() {aud.play();});

    div.appendChild(aud);
    div.appendChild(button);

    talkerContainer.appendChild(div);
})