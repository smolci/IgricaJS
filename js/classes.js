class Sprite {
    constructor({position, imageSrc, scale = 1, framesMax = 1, offset = {x: 0, y: 0}, orientation = 'right'}) {
        this.position = position;
        this.height = 150;
        this.width = 50;
        this.image = new Image();
        this.image.src = imageSrc;
        this.scale = scale;
        this.framesMax = framesMax;
        this.currentFrame = framesMax - 1;
        this.framesElapsed = this.framesHold;
        this.framesHold = 5;
        this.offset = offset;
        this.orientation = orientation;
    }

   draw() {
    c.drawImage(
        this.image,
        (this.image.width / this.framesMax) * this.currentFrame,
        0,
        this.image.width / this.framesMax,
        this.image.height,
        this.position.x - this.offset.x,
        this.position.y - this.offset.y,
        (this.image.width / this.framesMax) * this.scale,
        this.image.height * this.scale
    );
}

    animateFrames(){
        this.framesElapsed++;
        
        if(this.framesElapsed % this.framesHold == 0){
            if(this.currentFrame < this.framesMax - 1){
                this.currentFrame++;
            } else this.currentFrame = 0;
        }
    }

    animateFrames_left() {
        this.framesElapsed++;
        
        if (this.framesElapsed % this.framesHold === 0) {
            if (this.currentFrame > 0) {
                this.currentFrame--;
            } else {
                this.currentFrame = this.framesMax - 1;
            }
        }
    }
    
    update() {
        this.draw();
        if(this.orientation == 'right'){
            this.animateFrames();
        } else if (this.orientation == 'left'){
            this.animateFrames_left();
        }
    }
}


class Fighter extends Sprite{
    constructor({
        position, 
        velocity, 
        color = 'red', 
        imageSrc, 
        scale = 1, 
        framesMax = 1,
        offset = {x: 0, y: 0},
        orientation,
        sprites,
        attackBox =  {offset: {}, width: undefined, height: undefined},
        hitFrame
    }) {
        super({
            position,
            imageSrc,
            scale,
            framesMax,
            offset,
        });
        
        this.velocity = velocity;
        this.height = 150;
        this.width = 50;
        this.lastKey;
        this.attackBox = {
            position: {
                x: this.position.x,
                y: this.position.y
            },
            offset: attackBox.offset,
            width: attackBox.width,
            height: attackBox.height
        }
        this.color = color;
        this.isAttacking = false;
        this.health = 100;
        this.orientation = orientation;

        this.currentFrame = 0;
        this.framesElapsed = 0;
        this.framesHold = 5;
        this.sprites = sprites;
        this.dead = false;
        this.hitFrame = hitFrame;

        for(const sprite in this.sprites){
            sprites[sprite].image = new Image();
            sprites[sprite].image.src = sprites[sprite].imageSrc;
        }
    }

    update() {
        this.draw();
        if(!this.dead && this.orientation == 'right') this.animateFrames();
        else if (!this.dead && this.orientation == 'left') this.animateFrames_left();

        this.attackBox.position.x = this.position.x + this.attackBox.offset.x;
        this.attackBox.position.y = this.position.y + this.attackBox.offset.y;
        
        if (this.position.x < 0) {
            this.position.x = 0;
        }
        if (this.position.x + this.width * this.scale > canvas.width) {
            this.position.x = canvas.width - this.width * this.scale;
        }

        this.position.x += this.velocity.x;
        this.position.y += this.velocity.y;
        
        // Gravity
        let height = background.floor;
        if(this.position.y + this.height + this.velocity.y >= (canvas.height * height)){
            this.velocity.y = 0;
        } else {
            this.velocity.y += gravity;
        }
    }

    attack(){
        this.switchSprite('attack1');
        this.isAttacking = true;
    }

    takeHit(){
        this.health -= 20;

        if(this.health <= 0){
            this.switchSprite('death');
        } else this.switchSprite('takeHit', this.orientation);
    }

    switchSprite(sprite, orientation){
        // Overwriting all other animations
        if(this.orientation == 'left'){
            //Death
            if (this.image == this.sprites.death.image) {
                if (this.currentFrame == 0)
                    this.dead = true;
                return;
            }
            // Attack
            if (this.image == this.sprites.attack1.image) {
                if (this.currentFrame != 0)
                    return;
            }
            // Take hit
            if (this.image == this.sprites.takeHit.image) {
                if (this.currentFrame != 0)
                    return;
            }
            
            switch (sprite){
                case 'idle':
                    if(this.image !== this.sprites.idle.image){
                        this.image = this.sprites.idle.image;
                        this.framesMax = this.sprites.idle.framesMax;
                        this.currentFrame = this.framesMax - 1;
                    }
                    break;
                case 'run':
                    if(this.image !== this.sprites.run.image){
                        this.image = this.sprites.run.image;
                        this.framesMax = this.sprites.run.framesMax;
                        this.currentFrame = this.framesMax - 1;
                    }
                    break;
                case 'jump':
                    if(this.image !== this.sprites.jump.image){
                        this.image = this.sprites.jump.image;
                        this.framesMax = this.sprites.jump.framesMax;
                        this.currentFrame = this.framesMax - 1;
                    }
                    break;
                case 'fall':
                    if(this.image !== this.sprites.fall.image){
                        this.image = this.sprites.fall.image;
                        this.framesMax = this.sprites.fall.framesMax;
                        this.currentFrame = this.framesMax - 1;
                    }
                    break;
                case 'attack1':
                    if(this.image !== this.sprites.attack1.image){
                        this.image = this.sprites.attack1.image;
                        this.framesMax = this.sprites.attack1.framesMax;
                        this.currentFrame = this.framesMax - 1;
                    }
                    break;
                case 'takeHit':
                    if(this.image !== this.sprites.takeHit.image){
                        this.image = this.sprites.takeHit.image;
                        this.framesMax = this.sprites.takeHit.framesMax;
                        this.currentFrame = this.framesMax - 1;
                    }
                    break;
                case 'death':
                    if(this.image !== this.sprites.death.image){
                        this.image = this.sprites.death.image;
                        this.framesMax = this.sprites.death.framesMax;
                        this.currentFrame = this.framesMax - 1;
                    }
                    break;
            }
        } else {
            //Death
            if(this.image == this.sprites.death.image) {
                if(this.currentFrame == this.sprites.death.framesMax - 1) 
                    this.dead = true;
                return;
            }

            // Attack
            if(this.image == this.sprites.attack1.image && 
                this.currentFrame < this.sprites.attack1.framesMax - 1) return;
            
            // Take hit
            if(this.image == this.sprites.takeHit.image && 
                this.currentFrame < this.sprites.takeHit.framesMax - 1) return;

            switch (sprite){
                case 'idle':
                    if(this.image !== this.sprites.idle.image){
                        this.image = this.sprites.idle.image;
                        this.framesMax = this.sprites.idle.framesMax;
                        this.currentFrame = 0; 
                    }
                    break;
                case 'run':
                    if(this.image !== this.sprites.run.image){
                        this.image = this.sprites.run.image;
                        this.framesMax = this.sprites.run.framesMax;
                        this.currentFrame = 0;
                    }
                    break;
                case 'jump':
                    if(this.image !== this.sprites.jump.image){
                        this.image = this.sprites.jump.image;
                        this.framesMax = this.sprites.jump.framesMax;
                        this.currentFrame = 0;
                    }
                    break;
                case 'fall':
                    if(this.image !== this.sprites.fall.image){
                        this.image = this.sprites.fall.image;
                        this.framesMax = this.sprites.fall.framesMax;
                        this.currentFrame = 0;
                    }
                    break;
                case 'attack1':
                    if(this.image !== this.sprites.attack1.image){
                        this.image = this.sprites.attack1.image;
                        this.framesMax = this.sprites.attack1.framesMax;
                        this.currentFrame = 0;
                    }
                    break;
                case 'takeHit':
                    if(this.image !== this.sprites.takeHit.image){
                        this.image = this.sprites.takeHit.image;
                        this.framesMax = this.sprites.takeHit.framesMax;
                        this.currentFrame = 0;
                    }
                    break;
                case 'death':
                    if(this.image !== this.sprites.death.image){
                        this.image = this.sprites.death.image;
                        this.framesMax = this.sprites.death.framesMax;
                        this.currentFrame = 0;
                    }
                    break;
            }
        }
    }
}