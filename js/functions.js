// CREATE PLAYER
function createPlayer(characterName, position, velocity) {
    const selectedCharacter = characters[characterName];

    if (!selectedCharacter) {
        console.error('Invalid character selection');
        return null;
    }

    const player = new Fighter({
        position: {
            x: position.x,
            y: position.y
        },
        velocity: {
            x: velocity.x,
            y: velocity.y
        },
        imageSrc: selectedCharacter.sprites.idle.imageSrc,
        scale: selectedCharacter.scale,
        framesMax: selectedCharacter.sprites.idle.framesMax,
        offset: selectedCharacter.offset,
        orientation: selectedCharacter.orientation,
        sprites: selectedCharacter.sprites,
        attackBox: selectedCharacter.attackBox,
        hitFrame: selectedCharacter.hitFrame
    });

    return player;
}



// Local storage for keybinds
function saveKeybinds() {
    localStorage.setItem('keybinds', JSON.stringify(keys));
    closeOptions();
}
  
function loadKeybinds() {
    const savedKeybinds = localStorage.getItem('keybinds');
    if (savedKeybinds !== null) {
      const parsedKeybinds = JSON.parse(savedKeybinds);
      Object.assign(keys, parsedKeybinds);
    }
}

function setKeybindPlaceholders() {
    const storedKeybinds = JSON.parse(localStorage.getItem('keybinds')) || {};

    const keySettings = [
        'playerJump', 'playerAttack', 'playerMoveLeft', 'playerMoveRight',
        'enemyJump', 'enemyAttack', 'enemyMoveLeft', 'enemyMoveRight'
    ];

    keySettings.forEach(keySetting => {
        const inputElement = document.getElementById(keySetting);
        const storedValue = storedKeybinds[keySetting];
        inputElement.placeholder = storedValue !== undefined ? storedValue.key : getDefaultKey(keySetting);
    });
}

function getDefaultKey(keySetting) {
    const defaultKeys = {
        playerJump: 'w',
        playerAttack: 's',
        playerMoveLeft: 'a',
        playerMoveRight: 'd',
        enemyJump: 'ArrowUp',
        enemyAttack: 'ArrowDown',
        enemyMoveLeft: 'ArrowLeft',
        enemyMoveRight: 'ArrowRight'
    };

    return defaultKeys[keySetting] || '';
}
setKeybindPlaceholders();



// Collisions 
function rectangularCollision({rectangle1, rectangle2}){
    return (
        rectangle1.attackBox.position.x + rectangle1.attackBox.width >= rectangle2.position.x &&
        rectangle1.attackBox.position.x <= rectangle2.position.x + rectangle2.width &&
        rectangle1.attackBox.position.y + rectangle1.attackBox.height >= rectangle2.position.y &&
        rectangle1.attackBox.position.y <= rectangle2.position.y + rectangle2.height &&
        rectangle1.isAttacking
        );
}



// End the game
function determineWinner({player, enemy, timerID}) {
    clearTimeout(timerID);
    document.querySelector('#endingDiv').style.display = 'flex';
    if(player.health == enemy.health) {
        document.querySelector('#ending').innerHTML = 'Tie!';
    } else if(player.health > enemy.health) {
        document.querySelector('#ending').innerHTML = 'Player 1 wins!';
    } else if(player.health < enemy.health) {
        document.querySelector('#ending').innerHTML = 'Player 2 wins!';
    }
}



//Timer
let timer = 61;
let timerID;
function decreaseTimer(){
    
    if(timer > 0){
        timerID = setTimeout(decreaseTimer, 1000);
        timer--;
        document.querySelector('#timer').innerHTML = timer;
    }

    if(timer == 0){
        determineWinner({player,enemy, timerID})
    }
}



// Main menu 
function startGame() {
    const player1SelectedCharacter = document.querySelector('#player1Characters .selected');
    const player2SelectedCharacter = document.querySelector('#player2Characters .selected');
    
    if ( (player1SelectedCharacter && player2SelectedCharacter) || (localStorage.getItem('playerCharacter') != null && localStorage.getItem('enemyCharacter') != null) ){
        document.getElementById('mainMenu').style.display = 'none';
        document.getElementById('optionsModal').style.display = 'none';
        document.getElementById('endingDiv').style.display = 'none';
        document.getElementById('characterSelectionDiv').style.display = 'none';
        document.getElementById('game').style.display = 'flex';
    
        timer = 61;
        if (!gameRunning) {
            gameRunning = true;
            animate();
            decreaseTimer();
        }
        player.dead = false;
        player.image = player.sprites.idle.image;
        player.framesMax = player.sprites.idle.framesMax;
        player.currentFrame = 0;
        player.position = {x: 100, y: 0};

        enemy.dead = false;
        enemy.image = enemy.sprites.idle.image;
        enemy.framesMax = enemy.sprites.idle.framesMax;
        enemy.currentFrame = enemy.framesMax - 1;
        enemy.position = {x: canvas.width - 100, y: 0};
        playBackgroundMusic();
    } else {
        alert('Please select characters for both players before starting the game.');
    }
}



// Options
function openOptions() {
    setKeybindPlaceholders();
    document.getElementById('mainMenu').style.display = 'none';
    document.getElementById('pauseMenu').style.display = 'none';
    document.getElementById('game').style.display = 'none';
    document.getElementById('optionsModal').style.display = 'block';
}

function closeOptions() {
    if(!isGamePaused){
        document.getElementById('mainMenu').style.display = 'block';
    } else {
        document.getElementById('pauseMenu').style.display = 'block';
        document.getElementById('game').style.display = 'flex';
    }
    document.getElementById('optionsModal').style.display = 'none';
}

function captureKey(keyName) {
    const inputElement = document.getElementById(keyName);
    inputElement.value = 'Press any key...';
  
    window.addEventListener('keydown', function(event) {
      keys[keyName].key = event.key;
      inputElement.value = event.key;
    }, { once: true });
}

function resetKeybinds() {
    keys.playerJump.key = 'w';
    keys.playerAttack.key = 's';
    keys.playerMoveLeft.key = 'a';
    keys.playerMoveRight.key = 'd';

    keys.enemyJump.key = 'ArrowUp';
    keys.enemyAttack.key = 'ArrowDown';
    keys.enemyMoveLeft.key = 'ArrowLeft';
    keys.enemyMoveRight.key = 'ArrowRight';

    document.getElementById('playerJump').value = keys.playerJump.key;
    document.getElementById('playerAttack').value = keys.playerAttack.key;
    document.getElementById('playerMoveLeft').value = keys.playerMoveLeft.key;
    document.getElementById('playerMoveRight').value = keys.playerMoveRight.key;

    document.getElementById('enemyJump').value = keys.enemyJump.key;
    document.getElementById('enemyAttack').value = keys.enemyAttack.key;
    document.getElementById('enemyMoveLeft').value = keys.enemyMoveLeft.key;
    document.getElementById('enemyMoveRight').value = keys.enemyMoveRight.key;
}



//Pause menu
function pauseTimer() {
    clearTimeout(timerID);
}

function pauseGame() {
    isGamePaused = true;
    c.fillStyle = 'rgba(0, 0, 0, 0.5)';
    c.fillRect(0, 0, canvas.width, canvas.height);
    const backgroundMusic = document.getElementById('backgroundMusic');
    backgroundMusic.pause();
    pauseTimer();
}

function resumeGame() {
    isGamePaused = false;
    document.getElementById('pauseMenu').style.display = 'none';
    const backgroundMusic = document.getElementById('backgroundMusic');
    backgroundMusic.play();
    decreaseTimer();
    animate();
}

function restartGame() {
    isGamePaused = false;
    gameEnded = false;
    document.getElementById('pauseMenu').style.display = 'none';
    document.getElementById('endingDiv').style.display = 'none';

    timer = 61;
    decreaseTimer(timerID);
    
    enemy.health = 100;
    enemy.position = {
        x:canvas.width - 200,
        y: 0
    }

    player.health = 100;
    player.position = {
        x: 100,
        y: 0
    }
    gsap.to('#playerHealth', {
        width: player.health + '%',
        duration: 1
    });
    gsap.to('#enemyHealth', {
        width: enemy.health + '%',
        duration: 1
    });

    if(player.dead){
        player.dead = false;
        player.image = player.sprites.idle.image;
        player.framesMax = player.sprites.idle.framesMax;
        player.currentFrame = 0;
    } else if(enemy.dead){
        enemy.dead = false;
        enemy.image = enemy.sprites.idle.image;
        enemy.framesMax = enemy.sprites.idle.framesMax;
        enemy.currentFrame = enemy.framesMax - 1;
    }
    else{
        animate();
    }
}

function exitGame() {
    document.getElementById('game').style.display = 'none';
    document.getElementById('pauseMenu').style.display = 'none';
    document.getElementById('mainMenu').style.display = 'block';
    backgroundMusic.pause();
    restartGame();
}



//Character selection
function openCharacterSelectionScreen(){
    loadSelectedCharacters();

    document.getElementById('characterSelectionDiv').style.display = 'block';
    document.getElementById('mainMenu').style.display = 'none';
}

function loadSelectedCharacters() {
    const player1SelectedCharacter = localStorage.getItem('selectedCharacter1');
    const player2SelectedCharacter = localStorage.getItem('selectedCharacter2');
}


// Function using when resizing the window
function redrawGame() {
    background.position.x = 0;
    background.position.y = -90;

    background.height = canvas.height;
    background.width = canvas.width;

    player.position.x = 100;
    player.position.y = 0;

    enemy.position.x = canvas.width - 200;
    enemy.position.y = 0;
}

function drawBackground() {
    c.drawImage(
        background.image,
        0,
        0,
        canvas.width * background.scale,
        canvas.height * background.scale
    );
}

function updateBackground() {
    drawBackground();
}



// Audio functions
function playBackgroundMusic() {
    const backgroundMusic = document.getElementById('backgroundMusic');
    backgroundMusic.value = 0.5;
    backgroundMusic.currentTime = 0;
    backgroundMusic.play();
}

function adjustVolume() {
    const backgroundMusic = document.getElementById('backgroundMusic');
    const volumeControl = document.getElementById('volumeControl');
    backgroundMusic.volume = volumeControl.value;

    localStorage.setItem('volumeSetting', volumeControl.value);
    playPreview();
}

function loadVolumeSetting() {
    const volumeSetting = localStorage.getItem('volumeSetting');
    const volumeControl = document.getElementById('volumeControl');

    if (volumeSetting !== null) {
        volumeControl.value = volumeSetting;
        adjustVolume();
    }
}
loadVolumeSetting();

function playPreview() {
    const backgroundMusic = document.getElementById('backgroundMusic');
    const previewDuration = 750;
    
    backgroundMusic.play();

    setTimeout(() => {
      backgroundMusic.pause();
    }, previewDuration);
}

function playHitSound() {
    const hitSound = document.getElementById('hitSound');
    hitSound.currentTime = 0;
    hitSound.play();
}