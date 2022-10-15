const firstPlayerName = document.getElementById('firstPlayerName');
const firstPlayerHealth = document.getElementById('firstPlayerHealth');
const firstPlayerAttackBtn = document.getElementById('firstPlayerAttackBtn');
const firstPlayerHealBtn = document.getElementById('firstPlayerHealBtn');

const secondPlayerName = document.getElementById('secondPlayerName');
const secondPlayerHealth = document.getElementById('secondPlayerHealth');
const secondPlayerAttackBtn = document.getElementById('secondPlayerAttackBtn');
const secondPlayerHealBtn = document.getElementById('secondPlayerHealBtn');

const gameResult = document.getElementById('gameResult')



const renderGame = (gameState) => {
    firstPlayerName.textContent = p1.name;
    secondPlayerName.textContent = p2.name;
    firstPlayerHealth.textContent = p1.health + " HP"
    secondPlayerHealth.textContent = p2.health + " HP"
    if(p1.health <= 0 || p2.health <= 0) {
        game.isOver = true
        gameState = game.isOver;
        gameResult.textContent = game.declareWinner();
    }
}

class Player {
    constructor(name, health, attackDamage){
        this.name = name;
        this.health = health;
        this.attackDamage = attackDamage;
    }
    strike(player, enemy, attackDmg) {
        let newAttackDmg = Math.floor(Math.random() * attackDmg + 1);
        enemy.health -= newAttackDmg;
        renderGame(player, enemy, game.isOver);
        return `${player} Attacks ${enemy} and deals ${newAttackDmg}`
    }

    heal(player) {
        player.health += Math.floor(Math.random * 5 + 1);
    }
}


class Game {
    constructor(){
        this.isOver = false;
    }
    play() {

    }
    checkIsOver() {

    }
    declareWinner() {
        if(p1.health <= 0 && p2.health <= 0 && p1.health === p2.health){
            return 'Tie'
        }
        else if(p1.health <= 0) {
            return 'Player 2 wins'
        }
        else if(p2.health <= 0) {
            return 'Player 1 wins'
        }
    }
    reset() {
        p1.health = 100;
        p2.health = 100;
        renderGame();
    }
}

const player1 = new Player('John', 100, 10);
const player2 = new Player('Julia', 100, 10);

let p1 = player1;
let p2 = player2;

const game = new Game();


renderGame(p1, p2, game.isOver)

firstPlayerAttackBtn.addEventListener('click', () => p1.strike(p1, p2, p1.attackDamage))

secondPlayerAttackBtn.addEventListener('click', () => p2.strike(p2, p1, p2.attackDamage))
