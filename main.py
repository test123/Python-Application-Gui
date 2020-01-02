import eel

eel.init('front-end')


@eel.expose
def add(num1, num2):
    return int(num1) + int(num2)


@eel.expose
def subtract(num1, num2):
    return int(num1) - int(num2)


eel.start('index.html', size=(1000, 600))
