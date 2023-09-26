/* Copyright (c) 2020 MTHS All rights reserved
 *
 * Created by: Ihor Chernyshev
 * Created on: Sep 2023
 * This program shows 
*/

let temperature = 0
basic.clearScreen()
basic.showIcon(IconNames.Happy)

input.onButtonPressed(Button.A, function () {
  temperature = input.temperature()
  basic.showString('The temperature is:' + (temperature + 273.15).toString() + 'K')
})
