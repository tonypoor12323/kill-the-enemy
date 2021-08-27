sprites.onOverlap(SpriteKind.Player, SpriteKind.Enemy, function (sprite, otherSprite) {
    Bad_Person.setPosition(randint(0, 120), randint(0, 120))
    info.changeScoreBy(1)
})
let Bad_Person: Sprite = null
info.setScore(0)
let Fighter = sprites.create(assets.image`Fighter`, SpriteKind.Player)
controller.moveSprite(Fighter)
Bad_Person = sprites.create(assets.image`Bad`, SpriteKind.Enemy)
scene.setBackgroundImage(assets.image`Background`)
Bad_Person.setPosition(randint(0, 120), randint(0, 120))
forever(function () {
    music.playMelody("C5 G B A F A C5 B ", 120)
})
