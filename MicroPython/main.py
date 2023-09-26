"""
Created by: Mr. Coxall
Created on: Sep 2020
This module is a Micro:bit MicroPython program
"""

from microbit import *
import math

display.clear()
display.show(Image.HAPPY)

while True:
    if button_a.is_pressed():
        temperature = temperature()
        temperature = temperature + 273.15
        temperature = math.round(temperature)
        display.show(str(temperature))
