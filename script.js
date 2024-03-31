document.addEventListener('DOMContentLoaded', function () {
    var container = document.getElementById('cards-container');

    for (var i = 1; i <= 26; i++) {
        var card = document.createElement('div');
        card.className = 'card';
        card.id = 'card' + i;
        card.dataset.state = 'number'; // Estado inicial: número
        card.onclick = function () {
            flipCard(this.id.substring(4));
        };

        var front = document.createElement('div');
        front.className = 'front';
        front.textContent = i;

        var back = document.createElement('div');
        back.className = 'back';
        back.textContent = String.fromCharCode(64 + i);

        card.appendChild(front);
        card.appendChild(back);
        container.appendChild(card);
    }
});

function flipCard(cardNumber) {
    var card = document.getElementById('card' + cardNumber);
    var currentState = card.dataset.state;

    if (currentState === 'number') {
        card.classList.add('flipped');
        card.dataset.state = 'letter';
    } else {
        card.classList.remove('flipped');
        card.dataset.state = 'number';
    }
}
