// CHARACTERS
const characters = {
    evilWizard: {
        name: 'EvilWizard',
        offset: {
            x: 230,
            y: 188
        },
        imageSrc: './assets/characters/evilWizard/Idle.png',
        framesMax: 8,
        scale: 2,
        sprites: {
            idle: {
                imageSrc: './assets/characters/evilWizard/Idle.png',
                framesMax: 8
            },
            run: {
                imageSrc: './assets/characters/evilWizard/Run.png',
                framesMax: 8
            },
            jump: {
                imageSrc: './assets/characters/evilWizard/Jump.png',
                framesMax: 2
            },
            fall: {
                imageSrc: './assets/characters/evilWizard/Fall.png',
                framesMax: 2
            },
            attack1: {
                imageSrc: './assets/characters/evilWizard/Attack2.png',
                framesMax: 8
            },
            takeHit: {
                imageSrc: './assets/characters/evilWizard/Take hit.png',
                framesMax: 3
            },
            death: {
                imageSrc: './assets/characters/evilWizard/Death.png',
                framesMax: 7
            }
        },
        attackBox: {
            offset:{
                x: 110,
                y: -15
            },
            width: 130,
            height: 100
        },
        hitFrame: 5,
        orientation: 'right'
    },

    evilWizard_left: {
        name: 'EvilWizard_left',
        offset: {
            x: 230,
            y: 188
        },
        imageSrc: './assets/characters/evilWizard_left/Idle.png',
        framesMax: 8,
        scale: 2,
        sprites: {
            idle: {
                imageSrc: './assets/characters/evilWizard_left/Idle.png',
                framesMax: 8
            },
            run: {
                imageSrc: './assets/characters/evilWizard_left/Run.png',
                framesMax: 8
            },
            jump: {
                imageSrc: './assets/characters/evilWizard_left/Jump.png',
                framesMax: 2
            },
            fall: {
                imageSrc: './assets/characters/evilWizard_left/Fall.png',
                framesMax: 2
            },
            attack1: {
                imageSrc: './assets/characters/evilWizard_left/Attack2.png',
                framesMax: 8
            },
            takeHit: {
                imageSrc: './assets/characters/evilWizard_left/Take hit.png',
                framesMax: 3
            },
            death: {
                imageSrc: './assets/characters/evilWizard_left/Death.png',
                framesMax: 7
            }
        },
        attackBox: {
            offset:{
                x: -200,
                y: -15
            },
            width: 130,
            height: 100
        },
        hitFrame: 4,
        orientation: 'left'
    },

    heroKnight: {
        name: 'HeroKnight',
        offset: {
            x: 200,
            y: 140
        },
        imageSrc: './assets/characters/heroKnight/Idle.png',
        framesMax: 8,
        scale: 2.5,
        sprites: {
            idle: {
                imageSrc: './assets/characters/heroKnight/Idle.png',
                framesMax: 11
            },
            run: {
                imageSrc: './assets/characters/heroKnight/Run.png',
                framesMax: 8
            },
            jump: {
                imageSrc: './assets/characters/heroKnight/Jump.png',
                framesMax: 3
            },
            fall: {
                imageSrc: './assets/characters/heroKnight/Fall.png',
                framesMax: 3
            },
            attack1: {
                imageSrc: './assets/characters/heroKnight/Attack1.png',
                framesMax: 7
            },
            takeHit: {
                imageSrc: './assets/characters/heroKnight/Take Hit.png',
                framesMax: 4
            },
            death: {
                imageSrc: './assets/characters/heroKnight/Death.png',
                framesMax: 11
            }
        },
        attackBox: {
            offset:{
                x: 70,
                y: 10
            },
            width: 50,
            height: 100
        },
        hitFrame: 4,
        orientation: 'right'
    },

    heroKnight_left: {
        name: 'HeroKnight_left',
        offset: {
            x: 200,
            y: 140
        },
        imageSrc: './assets/characters/heroKnight_left/Idle.png',
        framesMax: 8,
        scale: 2.5,
        sprites: {
            idle: {
                imageSrc: './assets/characters/heroKnight_left/Idle.png',
                framesMax: 11
            },
            run: {
                imageSrc: './assets/characters/heroKnight_left/Run.png',
                framesMax: 8
            },
            jump: {
                imageSrc: './assets/characters/heroKnight_left/Jump.png',
                framesMax: 3
            },
            fall: {
                imageSrc: './assets/characters/heroKnight_left/Fall.png',
                framesMax: 3
            },
            attack1: {
                imageSrc: './assets/characters/heroKnight_left/Attack1.png',
                framesMax: 7
            },
            takeHit: {
                imageSrc: './assets/characters/heroKnight_left/Take Hit.png',
                framesMax: 4
            },
            death: {
                imageSrc: './assets/characters/heroKnight_left/Death.png',
                framesMax: 11
            }
        },
        attackBox: {
            offset:{
                x: -70,
                y: 10
            },
            width: 50,
            height: 100
        },
        hitFrame: 4,
        orientation: 'left'
    },

    martialHero: {
        name: 'MartialHero',
        offset: {
            x: 140,
            y: 60
        },
        imageSrc: './assets/characters/martialHero/Idle.png',
        framesMax: 8,
        scale: 2.5,
        sprites: {
            idle: {
                imageSrc: './assets/characters/martialHero/Idle.png',
                framesMax: 10
            },
            run: {
                imageSrc: './assets/characters/martialHero/Run.png',
                framesMax: 8
            },
            jump: {
                imageSrc: './assets/characters/martialHero/Going Up.png',
                framesMax: 3
            },
            fall: {
                imageSrc: './assets/characters/martialHero/Going Down.png',
                framesMax: 3
            },
            attack1: {
                imageSrc: './assets/characters/martialHero/Attack1.png',
                framesMax: 7
            },
            takeHit: {
                imageSrc: './assets/characters/martialHero/Take Hit.png',
                framesMax: 3
            },
            death: {
                imageSrc: './assets/characters/martialHero/Death.png',
                framesMax: 11
            }
        },
        attackBox: {
            offset:{
                x: 50,
                y: 35
            },
            width: 120,
            height: 50
        },
        hitFrame: 5,
        orientation: 'right'
    },

    martialHero_left: {
        name: 'MartialHero_left',
        offset: {
            x: 140,
            y: 60
        },
        imageSrc: './assets/characters/martialHero_left/Idle.png',
        framesMax: 8,
        scale: 2.5,
        sprites: {
            idle: {
                imageSrc: './assets/characters/martialHero_left/Idle.png',
                framesMax: 10
            },
            run: {
                imageSrc: './assets/characters/martialHero_left/Run.png',
                framesMax: 8
            },
            jump: {
                imageSrc: './assets/characters/martialHero_left/Going Up.png',
                framesMax: 3
            },
            fall: {
                imageSrc: './assets/characters/martialHero_left/Going Down.png',
                framesMax: 3
            },
            attack1: {
                imageSrc: './assets/characters/martialHero_left/Attack1.png',
                framesMax: 7
            },
            takeHit: {
                imageSrc: './assets/characters/martialHero_left/Take Hit.png',
                framesMax: 3
            },
            death: {
                imageSrc: './assets/characters/martialHero_left/Death.png',
                framesMax: 11
            }
        },
        attackBox: {
            offset:{
                x: -130,
                y: 35
            },
            width: 120,
            height: 50
        },
        hitFrame: 4,
        orientation: 'left'
    },

    medievalKing: {
        name: 'MedievalKing',
        offset: {
            x: 170,
            y: 116
        },
        imageSrc: './assets/characters/medievalKing/Idle.png',
        framesMax: 8,
        scale: 2.5,
        sprites: {
            idle: {
                imageSrc: './assets/characters/medievalKing/Idle.png',
                framesMax: 8
            },
            run: {
                imageSrc: './assets/characters/medievalKing/Run.png',
                framesMax: 8
            },
            jump: {
                imageSrc: './assets/characters/medievalKing/Jump.png',
                framesMax: 2
            },
            fall: {
                imageSrc: './assets/characters/medievalKing/Fall.png',
                framesMax: 2
            },
            attack1: {
                imageSrc: './assets/characters/medievalKing/Attack1.png',
                framesMax: 4
            },
            takeHit: {
                imageSrc: './assets/characters/medievalKing/Take Hit - white silhouette.png',
                framesMax: 4
            },
            death: {
                imageSrc: './assets/characters/medievalKing/Death.png',
                framesMax: 6
            }
        },
        attackBox: {
            offset:{
                x: 75,
                y: 55
            },
            width: 115,
            height: 50
        },
        hitFrame: 2,
        orientation: 'right'
    },

    medievalKing_left: {
        name: 'MedievalKing_left',
        offset: {
            x: 170,
            y: 116
        },
        imageSrc: './assets/characters/medievalKing_left/Idle.png',
        framesMax: 8,
        scale: 2.5,
        sprites: {
            idle: {
                imageSrc: './assets/characters/medievalKing_left/Idle.png',
                framesMax: 8
            },
            run: {
                imageSrc: './assets/characters/medievalKing_left/Run.png',
                framesMax: 8
            },
            jump: {
                imageSrc: './assets/characters/medievalKing_left/Jump.png',
                framesMax: 2
            },
            fall: {
                imageSrc: './assets/characters/medievalKing_left/Fall.png',
                framesMax: 2
            },
            attack1: {
                imageSrc: './assets/characters/medievalKing_left/Attack1.png',
                framesMax: 4
            },
            takeHit: {
                imageSrc: './assets/characters/medievalKing_left/Take Hit - white silhouette.png',
                framesMax: 4
            },
            death: {
                imageSrc: './assets/characters/medievalKing_left/Death.png',
                framesMax: 6
            }
        },
        attackBox: {
            offset:{
                x: -130,
                y: 55
            },
            width: 115,
            height: 50
        },
        hitFrame: 2,
        orientation: 'left'
    },

    medievalKing2: {
        name: 'MedievalKing2',
        offset: {
            x: 70,
            y: 38
        },
        imageSrc: './assets/characters/medievalKing2/Idle.png',
        framesMax: 8,
        scale: 1.6,
        sprites: {
            idle: {
                imageSrc: './assets/characters/medievalKing2/Idle.png',
                framesMax: 6
            },
            run: {
                imageSrc: './assets/characters/medievalKing2/Run.png',
                framesMax: 8
            },
            jump: {
                imageSrc: './assets/characters/medievalKing2/Jump.png',
                framesMax: 2
            },
            fall: {
                imageSrc: './assets/characters/medievalKing2/Fall.png',
                framesMax: 2
            },
            attack1: {
                imageSrc: './assets/characters/medievalKing2/Attack_1.png',
                framesMax: 6
            },
            takeHit: {
                imageSrc: './assets/characters/medievalKing2/Hit.png',
                framesMax: 4
            },
            death: {
                imageSrc: './assets/characters/medievalKing2/Death.png',
                framesMax: 11
            }
        },
        attackBox: {
            offset:{
                x: 60,
                y: 45
            },
            width: 90,
            height: 70
        },
        hitFrame: 4,
        orientation: 'right'
    },

    medievalKing2_left: {
        name: 'MedievalKing2_left',
        offset: {
            x: 70,
            y: 38
        },
        imageSrc: './assets/characters/medievalKing2_left/Idle.png',
        framesMax: 8,
        scale: 1.6,
        sprites: {
            idle: {
                imageSrc: './assets/characters/medievalKing2_left/Idle.png',
                framesMax: 6
            },
            run: {
                imageSrc: './assets/characters/medievalKing2_left/Run.png',
                framesMax: 8
            },
            jump: {
                imageSrc: './assets/characters/medievalKing2_left/Jump.png',
                framesMax: 2
            },
            fall: {
                imageSrc: './assets/characters/medievalKing2_left/Fall.png',
                framesMax: 2
            },
            attack1: {
                imageSrc: './assets/characters/medievalKing2_left/Attack_1.png',
                framesMax: 6
            },
            takeHit: {
                imageSrc: './assets/characters/medievalKing2_left/Hit.png',
                framesMax: 4
            },
            death: {
                imageSrc: './assets/characters/medievalKing2_left/Death.png',
                framesMax: 11
            }
        },
        attackBox: {
            offset:{
                x: -50,
                y: 45
            },
            width: 90,
            height: 70
        },
        hitFrame: 3,
        orientation: 'left'
    },

    medievalWarrior: {
        name: 'MedievalWarrior',
        offset: {
            x: 160,
            y: 92
        },
        imageSrc: './assets/characters/medievalWarrior/Idle.png',
        framesMax: 8,
        scale: 2.5,
        sprites: {
            idle: {
                imageSrc: './assets/characters/medievalWarrior/Idle.png',
                framesMax: 8
            },
            run: {
                imageSrc: './assets/characters/medievalWarrior/Run.png',
                framesMax: 8
            },
            jump: {
                imageSrc: './assets/characters/medievalWarrior/Jump.png',
                framesMax: 2
            },
            fall: {
                imageSrc: './assets/characters/medievalWarrior/Fall.png',
                framesMax: 2
            },
            attack1: {
                imageSrc: './assets/characters/medievalWarrior/Attack1.png',
                framesMax: 4
            },
            takeHit: {
                imageSrc: './assets/characters/medievalWarrior/Take Hit - white silhouette.png',
                framesMax: 4
            },
            death: {
                imageSrc: './assets/characters/medievalWarrior/Death.png',
                framesMax: 6
            }
        },
        attackBox: {
            offset:{
                x: 50,
                y: 70
            },
            width: 100,
            height: 50
        },
        hitFrame: 2,
        orientation: 'right'
    },

    medievalWarrior_left: {
        name: 'MedievalWarrior_left',
        offset: {
            x: 160,
            y: 92
        },
        imageSrc: './assets/characters/medievalWarrior_left/Idle.png',
        framesMax: 8,
        scale: 2.5,
        sprites: {
            idle: {
                imageSrc: './assets/characters/medievalWarrior_left/Idle.png',
                framesMax: 8
            },
            run: {
                imageSrc: './assets/characters/medievalWarrior_left/Run.png',
                framesMax: 8
            },
            jump: {
                imageSrc: './assets/characters/medievalWarrior_left/Jump.png',
                framesMax: 2
            },
            fall: {
                imageSrc: './assets/characters/medievalWarrior_left/Fall.png',
                framesMax: 2
            },
            attack1: {
                imageSrc: './assets/characters/medievalWarrior_left/Attack1.png',
                framesMax: 4
            },
            takeHit: {
                imageSrc: './assets/characters/medievalWarrior_left/Take Hit - white silhouette.png',
                framesMax: 4
            },
            death: {
                imageSrc: './assets/characters/medievalWarrior_left/Death.png',
                framesMax: 6
            }
        },
        attackBox: {
            offset:{
                x: -100,
                y: 70
            },
            width: 100,
            height: 50
        },
        hitFrame: 2,
        orientation: 'left'
    },

    medievalWarrior2: {
        name: 'MedievalWarrior2',
        offset: {
            x: 150,
            y: 70
        },
        imageSrc: './assets/characters/medievalWarrior2/Idle.png',
        framesMax: 10,
        scale: 2.5,
        sprites: {
            idle: {
                imageSrc: './assets/characters/medievalWarrior2/Idle.png',
                framesMax: 10
            },
            run: {
                imageSrc: './assets/characters/medievalWarrior2/Run.png',
                framesMax: 6
            },
            jump: {
                imageSrc: './assets/characters/medievalWarrior2/Jump.png',
                framesMax: 2
            },
            fall: {
                imageSrc: './assets/characters/medievalWarrior2/Fall.png',
                framesMax: 2
            },
            attack1: {
                imageSrc: './assets/characters/medievalWarrior2/Attack1.png',
                framesMax: 4
            },
            takeHit: {
                imageSrc: './assets/characters/medievalWarrior2/Get Hit.png',
                framesMax: 3
            },
            death: {
                imageSrc: './assets/characters/medievalWarrior2/Death.png',
                framesMax: 9
            }
        },
        attackBox: {
            offset:{
                x: 60,
                y: 50
            },
            width: 85,
            height: 50
        },
        hitFrame: 2,
        orientation: 'right'
    },

    medievalWarrior2_left: {
        name: 'MedievalWarrior2_left',
        offset: {
            x: 150,
            y: 70
        },
        imageSrc: './assets/characters/medievalWarrior2_left/Idle.png',
        framesMax: 8,
        scale: 2.5,
        sprites: {
            idle: {
                imageSrc: './assets/characters/medievalWarrior2_left/Idle.png',
                framesMax: 10
            },
            run: {
                imageSrc: './assets/characters/medievalWarrior2_left/Run.png',
                framesMax: 6
            },
            jump: {
                imageSrc: './assets/characters/medievalWarrior2_left/Jump.png',
                framesMax: 2
            },
            fall: {
                imageSrc: './assets/characters/medievalWarrior2_left/Fall.png',
                framesMax: 2
            },
            attack1: {
                imageSrc: './assets/characters/medievalWarrior2_left/Attack1.png',
                framesMax: 4
            },
            takeHit: {
                imageSrc: './assets/characters/medievalWarrior2_left/Get Hit.png',
                framesMax: 3
            },
            death: {
                imageSrc: './assets/characters/medievalWarrior2_left/Death.png',
                framesMax: 9
            }
        },
        attackBox: {
            offset:{
                x: -110,
                y: 50
            },
            width: 85,
            height: 50
        },
        hitFrame: 2,
        orientation: 'left'
    },

    wizard: {
        name: 'Wizard',
        offset: {
            x: 135,
            y: 80
        },
        imageSrc: './assets/characters/wizard/Idle.png',
        framesMax: 8,
        scale: 1.6,
        sprites: {
            idle: {
                imageSrc: './assets/characters/wizard/Idle.png',
                framesMax: 6
            },
            run: {
                imageSrc: './assets/characters/wizard/Run.png',
                framesMax: 8
            },
            jump: {
                imageSrc: './assets/characters/wizard/Jump.png',
                framesMax: 2
            },
            fall: {
                imageSrc: './assets/characters/wizard/Fall.png',
                framesMax: 2
            },
            attack1: {
                imageSrc: './assets/characters/wizard/Attack2.png',
                framesMax: 8
            },
            takeHit: {
                imageSrc: './assets/characters/wizard/Hit.png',
                framesMax: 4
            },
            death: {
                imageSrc: './assets/characters/wizard/Death.png',
                framesMax: 7
            }
        },
        attackBox: {
            offset:{
                x: 120,
                y: 25
            },
            width: 100,
            height: 50
        },
        hitFrame: 6,
        orientation: 'right'
    },

    wizard_left: {
        name: 'Wizard_left',
        offset: {
            x: 135,
            y: 80
        },
        imageSrc: './assets/characters/wizard_left/Idle.png',
        framesMax: 8,
        scale: 1.6,
        sprites: {
            idle: {
                imageSrc: './assets/characters/wizard_left/Idle.png',
                framesMax: 6
            },
            run: {
                imageSrc: './assets/characters/wizard_left/Run.png',
                framesMax: 8
            },
            jump: {
                imageSrc: './assets/characters/wizard_left/Jump.png',
                framesMax: 2
            },
            fall: {
                imageSrc: './assets/characters/wizard_left/Fall.png',
                framesMax: 2
            },
            attack1: {
                imageSrc: './assets/characters/wizard_left/Attack2.png',
                framesMax: 8
            },
            takeHit: {
                imageSrc: './assets/characters/wizard_left/Hit.png',
                framesMax: 4
            },
            death: {
                imageSrc: './assets/characters/wizard_left/Death.png',
                framesMax: 7
            }
        },
        attackBox: {
            offset:{
                x: -120,
                y: 25
            },
            width: 100,
            height: 50
        },
        hitFrame: 3,
        orientation: 'left'
    }
};