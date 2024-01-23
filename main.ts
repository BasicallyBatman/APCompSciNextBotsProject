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
function randommap () {
    if (Map == 0) {
        tiles.setCurrentTilemap(tilemap`level19`)
    }
    if (Map == 1) {
        tiles.setCurrentTilemap(tilemap`level19`)
    }
    if (Map == 2) {
        tiles.setCurrentTilemap(tilemap`level19`)
    }
    if (Map == 3) {
        tiles.setCurrentTilemap(tilemap`level19`)
    }
    if (Map == 4) {
        tiles.setCurrentTilemap(tilemap`level19`)
    }
}
sprites.onOverlap(SpriteKind.Player, SpriteKind.Enemy, function (sprite, otherSprite) {
    pause(5000)
    info.changeLifeBy(-1)
})
let PlayerLocatation: tiles.Location[] = []
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
Map = [
0,
1,
2,
3,
4
]._pickRandom()
randommap()
tiles.placeOnRandomTile(mySprite, assets.tile`myTile1`)
info.setLife(4)
pause(5000)
forever(function () {
    PlayerLocatation = scene.aStar(myEnemy.tilemapLocation(), mySprite.tilemapLocation())
    scene.followPath(myEnemy, PlayerLocatation, 100)
    pause(500)
})
