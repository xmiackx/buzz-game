input.onPinPressed(TouchPin.P0, function () {
    pins.digitalWritePin(DigitalPin.P2, 1)
    score += 1
    basic.showIcon(IconNames.No)
    basic.pause(1000)
    basic.showLeds(`
        # # # . #
        # . # . #
        # . # . #
        # . # # #
        # . . . .
        `)
})
input.onButtonPressed(Button.A, function () {
    basic.showNumber(score)
    basic.pause(2000)
    basic.showLeds(`
        # # # . #
        # . # . #
        # . # . #
        # . # # #
        # . . . .
        `)
})
input.onButtonPressed(Button.B, function () {
    score = 0
    basic.showLeds(`
        # # # . #
        # . # . #
        # . # . #
        # . # # #
        # . . . .
        `)
})
let score = 0
score = 0
basic.showLeds(`
    # # # . #
    # . # . #
    # . # . #
    # . # # #
    # . . . .
    `)
