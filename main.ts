/* Copyright (c) 2020 MTHS All rights reserved
 *
 * Created by: Ihor Chernyhsev
 * Created on: Sep 2020
 * This program
*/

let temperature = 0
basic.clearScreen()
basic.showIcon(IconNames.Happy)

input.onButtonPressed(Button.A, function () {
  temperature = input.temperature()
  temperature = temperature + 273.15
  temperature = Math.round(temperature)
  basic.showString('The temperature is:' + (temperature).toString() + 'K')
})
