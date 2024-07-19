namespace SpriteKind {
    export const frog = SpriteKind.create()
}
controller.up.onEvent(ControllerButtonEvent.Pressed, function () {
    if (facing_north == false) {
        frogger.image.flipY()
        facing_north = true
        facing_east = false
        facing_south = false
        facing_west = false
    }
})
controller.left.onEvent(ControllerButtonEvent.Pressed, function () {
    if (facing_south == false) {
        frogger.image.flipX()
        facing_west = true
        facing_south = false
        facing_north = false
        facing_east = false
    }
})
controller.right.onEvent(ControllerButtonEvent.Pressed, function () {
    if (facing_south == false) {
        frogger.image.flipX()
        facing_east = true
        facing_south = false
        facing_north = false
        facing_west = false
    }
})
controller.down.onEvent(ControllerButtonEvent.Pressed, function () {
    if (facing_south == false) {
        frogger.image.flipY()
        facing_south = true
        facing_east = false
        facing_north = false
        facing_west = false
    }
})
let facing_west = false
let facing_south = false
let facing_east = false
let facing_north = false
let frogger: Sprite = null
frogger = sprites.create(img`
    . 7 . . 5 7 5 5 . . 7 
    7 7 . 3 7 5 5 7 3 . 7 
    . 7 . 7 7 5 5 7 7 . 7 
    . 7 7 5 5 5 5 5 5 7 7 
    . . 7 5 7 5 5 5 5 . . 
    . 7 7 5 7 5 5 5 5 7 7 
    . 7 . 7 5 7 5 5 7 . 7 
    7 7 . . 7 5 5 7 . . 7 
    . 7 . . . . . . . . 7 
    `, SpriteKind.frog)
facing_north = true
facing_east = false
facing_south = false
facing_west = false
