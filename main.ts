namespace PlatformFunctions {

    // Function to create a platformer sprite
    //% group="Create"
    //% blockId=platformspritescreate block="Create Platformer Sprite %img=screen_image_picker of kind %kind=spritekind"
    //% blockSetVariable=mySprite
    //% weight=100
    export function createPlatformerSprite(img: Image, kind: number): Sprite {
        const sprite = sprites.create(img, kind);
        sprite.ay = 500;
        return sprite;
    }

    // Function to make the platformer sprite jump when the "up" button is pressed
    //% block="Make platformer %sprite=variables_get(mySprite) jump when 'A' button is pressed"
    //% weight=101
    export function makeSpriteJump(sprite: Sprite) {
        let buttonPressTime: any;
        let buttonPressTime2: any;
        let totalTime: any;
        controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
            buttonPressTime = game.runtime()
        });
        controller.A.onEvent(ControllerButtonEvent.Released, function () {
            buttonPressTime2 = game.runtime()
            totalTime = ((buttonPressTime2 - buttonPressTime) / 1000)
            if (sprite.vy == 0) {
                if (totalTime > 0.5) {
                    sprite.vy += (-275);
                } else {
                    sprite.vy += (-200);
                }
            }
        })
    }
}