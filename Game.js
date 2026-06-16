let bossHP = 200;
let playerHP = 100;
let mana = 50;
let gold = 100;
let potions = 3;

function updateUI() {
    document.getElementById('boss').innerText =
        'Forest Guardian HP: ' + bossHP;

    document.getElementById('player').innerText =
        `HP: ${playerHP} | Mana: ${mana} | Gold: ${gold} | Potions: ${potions}`;
}

function bossAttack() {
    if (bossHP > 0) {
        playerHP -= 15;

        if (playerHP <= 0) {
            playerHP = 0;
            alert("Game Over!");
        }
    }
}

window.attackBoss = function () {
    if (bossHP <= 0 || playerHP <= 0) return;

    bossHP -= 25;

    if (bossHP <= 0) {
        bossHP = 0;
        gold += 300;
        alert('Victory! Forest Guardian defeated!');
        localStorage.setItem('forestGuardianDefeated', 'true');
    } else {
        bossAttack();
    }

    updateUI();
};

window.heal = function () {
    if (potions > 0 && playerHP < 100) {
        playerHP = Math.min(100, playerHP + 30);
        potions--;
        updateUI();
    }
};

document.addEventListener('keydown', e => {
    if (e.key.toLowerCase() === 'f') window.attackBoss();
    if (e.key.toLowerCase() === 'h') window.heal();
});

updateUI();
