/* Copyright (c) 2020 MTHS All rights reserved
 *
 * Created by: Ihor Chernyhsev
 * Created on: Sep 2023
 * This program shows the temperature of MicroProcessor
*/

let temperature = 0
basic.clearScreen()
basic.showIcon(IconNames.Happy)

input.onButtonPressed(Button.A, function () {
  temperature = (input.temperature()) + 273.15
  temperature = Math.round(temperature)
  basic.showString('The temperature is:' + (temperature).toString() + 'K')
})
