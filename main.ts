basic.forever(function () {
    basic.showIcon(IconNames.House)
    basic.pause(500)
    basic.showLeds(`
        . . . . .
        . # # . .
        # # # . .
        . # # # #
        . # . # .
        `)
    basic.pause(500)
})
