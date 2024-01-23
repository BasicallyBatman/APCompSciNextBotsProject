controller.B.onEvent(ControllerButtonEvent.Pressed, function () {
    Render.jumpWithHeightAndDuration(mySprite, -4, 1000)
    Render.moveWithController(6, 4, 1)
    pause(1000)
    Render.moveWithController(4, 4, 1)
})
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    Render.jump(mySprite)
})
scene.onOverlapTile(SpriteKind.Enemy, assets.tile`myTile`, function (sprite, location) {
    tiles.setCurrentTilemap(tilemap`level2`)
})
function SelMap (bool: boolean) {
    if (Map == 0) {
        tiles.setCurrentTilemap(tilemap`level2`)
    }
    if (Map == 1) {
        tiles.setCurrentTilemap(tilemap`level3`)
    }
}
sprites.onOverlap(SpriteKind.Player, SpriteKind.Enemy, function (sprite, otherSprite) {
    pause(5000)
    info.changeLifeBy(-1)
})
let Map = 0
let mySprite: Sprite = null
let myEnemy = sprites.create(img`
    3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 
    3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 
    3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 
    3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 
    3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 
    3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 
    3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 
    3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 
    3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 
    3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 
    3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 
    3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 
    3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 
    3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 
    3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 
    3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 
    `, SpriteKind.Enemy)
mySprite = Render.getRenderSpriteVariable()
Render.moveWithController(4, 4, 1)
Map = game.askForNumber("Choose Map", 1)
SelMap(true)
info.setLife(4)
pause(5000)
myEnemy.follow(mySprite, 55)
mySprite.setBounceOnWall(true)
