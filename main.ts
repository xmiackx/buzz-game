input.onPinPressed(TouchPin.P0, function () {
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
basic.forever(function () {
    if (input.pinIsPressed(TouchPin.P0)) {
        pins.digitalWritePin(DigitalPin.P2, 1)
        basic.pause(100)
    } else {
        pins.digitalWritePin(DigitalPin.P2, 0)
    }
    basic.showLeds(`
        # # # . #
        # . # . #
        # . # . #
        # . # # #
        # . . . .
        `)
})
