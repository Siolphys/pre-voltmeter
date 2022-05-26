input.onButtonPressed(Button.A, function () {
    basic.showNumber(pins.analogReadPin(AnalogPin.P0))
    P0_Reading = pins.analogReadPin(AnalogPin.P0)
    basic.pause(2000)
    basic.clearScreen()
})
input.onButtonPressed(Button.AB, function () {
    Delta_Reading = P0_Reading - P1_Reading
    basic.showNumber(Delta_Reading)
    basic.pause(2000)
    basic.clearScreen()
})
input.onButtonPressed(Button.B, function () {
    basic.showNumber(pins.analogReadPin(AnalogPin.P1))
    P1_Reading = pins.analogReadPin(AnalogPin.P1)
    basic.pause(2000)
    basic.clearScreen()
})
let P1_Reading = 0
let Delta_Reading = 0
let P0_Reading = 0
basic.showString("Pre-Voltmeter")
basic.forever(function () {
	
})
