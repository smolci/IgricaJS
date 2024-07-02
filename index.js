const gameContainer = document.getElementById('game');
const canvas = document.querySelector('canvas');
const c = canvas.getContext('2d');

const startWidth = canvas.width;
const startHeight = canvas.height;
canvas.width = innerWidth;
canvas.height = innerHeight;
c.fillRect(0, 0, canvas.width, canvas.height);

const gravity = 0.7;
const movementSpeed = 5;
const jumpSpeed = 20;
let isGamePaused = false;
let gameEnded = false;
let gameRunning = false;

const randomImagePath = backgroundImages[Math.floor(Math.random() * backgroundImages.length)];
document.body.style.backgroundImage = `url('${randomImagePath}')`;

//Create background
const background = {
    position: { x: 0, y: 0 },
    image: new Image(),
    scale: 1,
    offset: { x: 0, y: 0 },
    floor: null
};

map = localStorage.getItem('map');
if(map != null){
    selectMap(map);
    data = document.getElementById(map);
    data.classList.add('selected');
}

// Select map
function selectMap(mapID) {
    switch (mapID) {
        case 'map1':
            background.image.src = './assets/maps/map1.png';
            background.floor = 0.87;
            break;
        case 'map2':
            background.image.src = './assets/maps/map2.png';
            background.floor = 0.89;
            break;
        case 'map3':
            background.image.src = './assets/maps/map3.png';
            background.floor = 0.82;
            break;
        case 'map4':
            background.image.src = './assets/maps/map4.png';
            background.floor = 0.855;
            break;
        case 'map5':
            background.image.src = './assets/maps/map5.png';
            background.floor = 0.75;
            break;
    }
    localStorage.setItem('map', mapID);

    const images = document.getElementsByClassName('mapImage');
    Array.from(images).forEach(element => {
        element.addEventListener('click', () => {
            const imageNumber = element.getAttribute('data-image');
            const allImgs = document.querySelectorAll(`.mapImage[data-image="${imageNumber}"]`);

            allImgs.forEach(img => {
                img.classList.remove('selected');
            });

            element.classList.add('selected');
        });
    });
}



//Create players
let player;
let enemy;
function selectCharacter(characterName, playerNumber) {
    if (playerNumber === 1) {
        player = createPlayer(characterName, { x: 100, y: 0 }, { x: 0, y: 0 });
        localStorage.setItem('playerCharacter', characterName);
    } else if (playerNumber === 2) {
        enemy = createPlayer(characterName, { x: canvas.width - 100, y: 0 }, { x: 0, y: 0 });
        localStorage.setItem('enemyCharacter', characterName);
    }

    console.log(`Player ${playerNumber} created with character: ${characterName}`);
}

// Keybinds
const keys = {
    playerJump: { key: 'w'},
    playerAttack: { key: 's'},
    playerMoveLeft: { key: 'a', pressed: false },
    playerMoveRight: { key: 'd', pressed: false },

    enemyJump: { key: 'ArrowUp'},
    enemyAttack: { key: 'ArrowDown'},
    enemyMoveLeft: { key: 'ArrowLeft', pressed: false },
    enemyMoveRight: { key: 'ArrowRight', pressed: false },
};
loadKeybinds();


/***********/
/* Animate */
/***********/
function animate(){
    if (isGamePaused) {
        document.getElementById('pauseMenu').style.display = 'block';
        return;
    }
    
    window.requestAnimationFrame(animate);
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    c.fillStyle = "black";
    c.fillRect(0, 0, canvas.width, canvas.height);
    
    // Update
    updateBackground();
    c.fillStyle = 'rgba(255, 255, 255, 0.05)';
    c.fillRect(0, 0, canvas.width, canvas.height);
    player.update();
    enemy.update();

    player.velocity.x = 0;
    enemy.velocity.x = 0;

    // Player movement
    if(keys.playerMoveLeft.pressed && player.lastKey == keys.playerMoveLeft.key) {
        player.velocity.x = -movementSpeed;
        player.scale.x *= 1;
        player.switchSprite('run');
    } else if (keys.playerMoveRight.pressed && player.lastKey == keys.playerMoveRight.key) {
        player.velocity.x = movementSpeed;
        player.scale.x *= -1;
        player.switchSprite('run');
    } else {
        player.switchSprite('idle');
    }

    // Player jumping
    if(player.velocity.y < 0){
        player.switchSprite('jump');
    } else if (player.velocity.y > 0){
        player.switchSprite('fall');
    }

    //Enemy movement
    if(keys.enemyMoveLeft.pressed && enemy.lastKey == keys.enemyMoveLeft.key) {
        enemy.velocity.x = -movementSpeed;
        enemy.switchSprite('run');
    } else if (keys.enemyMoveRight.pressed && enemy.lastKey == keys.enemyMoveRight.key) {
        enemy.velocity.x = movementSpeed;
        enemy.switchSprite('run');
    } else {
        enemy.switchSprite('idle');
    }

    // Enemy jumping
    if(enemy.velocity.y < 0){
        enemy.switchSprite('jump');
    } else if (enemy.velocity.y > 0){
        enemy.switchSprite('fall');
    }

    
    //Detect collision & enemy gets hit
    if(rectangularCollision({
        rectangle1: player,
        rectangle2: enemy
        }) &&
        player.isAttacking && player.currentFrame == player.hitFrame
    ){
        enemy.takeHit();
        if(!enemy.dead) playHitSound();
        player.isAttacking = false;
        gsap.to('#enemyHealth', {
            width: enemy.health + '%'
        })
    }

    // Player misses
    if(player.isAttacking && player.currentFrame == player.hitFrame){
        player.isAttacking = false;
    }

    //Detect collision & player gets hit
    if(rectangularCollision({
        rectangle1: enemy,
        rectangle2: player
        }) &&
        enemy.isAttacking && enemy.currentFrame == enemy.hitFrame
    ){
        player.takeHit();
        if(!player.dead) playHitSound();
        enemy.isAttacking = false;
        gsap.to('#playerHealth', {
            width: player.health + '%'
        })    
    }

    // Enemy misses
    if(enemy.isAttacking && enemy.currentFrame == enemy.hitFrame){
        enemy.isAttacking = false;
    }

    // End the game based on health
    if(enemy.health <= 0 || player.health <= 0){
        gameEnded = true;
        determineWinner({player, enemy, timerID});
    }
}

/******************************/
/* Selection screen selection */
/******************************/
playerCharacter = localStorage.getItem('playerCharacter');
enemyCharacter = localStorage.getItem('enemyCharacter');
if(playerCharacter != null){
    selectCharacter(playerCharacter, 1);
    data = document.getElementById(playerCharacter);
    data.classList.add('selected');
}
if(enemyCharacter != null){
    selectCharacter(enemyCharacter, 2);
    data = document.getElementById(enemyCharacter);
    data.classList.add('selected');
}

const array_characters = document.getElementsByClassName('character');
Array.from(array_characters).forEach(element => {
    element.addEventListener('click', () => {
        const playerNumber = element.getAttribute('data-player');
        const charactersOfPlayer = document.querySelectorAll(`.character[data-player="${playerNumber}"]`);

        charactersOfPlayer.forEach(character => {
            character.classList.remove('selected');
        });

        element.classList.add('selected');
    });
});


/*******************/
/* Event Listeners */
/*******************/
window.addEventListener('keydown', (event) => {
    if(!player.dead){
        switch (event.key) {
            case keys.playerMoveRight.key:
                keys.playerMoveRight.pressed = true;
                player.lastKey = keys.playerMoveRight.key;
                break;
            case keys.playerMoveLeft.key:
                keys.playerMoveLeft.pressed = true;
                player.lastKey = keys.playerMoveLeft.key;
                break;
            case keys.playerJump.key:
                if (player.position.y + player.height >= canvas.height * background.floor) {
                    player.velocity.y = -jumpSpeed;
                }
                break;
            case keys.playerAttack.key:
                player.attack();
                break;
        }
    }

    if(!enemy.dead){
        switch (event.key) {
            case keys.enemyMoveRight.key:
                keys.enemyMoveRight.pressed = true;
                enemy.lastKey = keys.enemyMoveRight.key;
                break;
            case keys.enemyMoveLeft.key:
                keys.enemyMoveLeft.pressed = true;
                enemy.lastKey = keys.enemyMoveLeft.key;
                break;
            case keys.enemyJump.key:
                if (enemy.position.y + enemy.height >= canvas.height * background.floor) {
                    enemy.velocity.y = -jumpSpeed;
                }
                break;
            case keys.enemyAttack.key:
                enemy.attack();
                break;
        }
    }

    if(event.key === 'Escape' && !isGamePaused && !gameEnded && gameRunning){
        pauseGame();
    }
});

window.addEventListener('keyup', (event) => {
    switch (event.key) {
        case keys.playerMoveRight.key:
            keys.playerMoveRight.pressed = false;
            player.velocity.x = 0;
            break;
        case keys.playerMoveLeft.key:
            keys.playerMoveLeft.pressed = false;
            player.velocity.x = 0;
            break;

        case keys.enemyMoveRight.key:
            keys.enemyMoveRight.pressed = false;
            enemy.velocity.x = 0;
            break;
        case keys.enemyMoveLeft.key:
            keys.enemyMoveLeft.pressed = false;
            enemy.velocity.x = 0;
            break;
    }
});

window.addEventListener('resize', function(){
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    redrawGame();
});