class Switch {                                                          // Выключатель
    constructor(power) {
        this.power = true;
    }

    turn_on() {                                                        // Включить
        this.power = true
        console.log('Включен')
    }

    turn_off() {                                                      // Выключить
        this.power = false
        console.log('Выключен')
    }
}


class TV extends Switch {                                             // Телевизор
    constructor(title, diagonal, price, power) {
        super(power)
        this.title = title;
        this.diagonal = diagonal + ' inches';
        this.price = price + ' rubles';
    }

    switchChannel(n) {
        console.log(`Теперь телевизор ${this.title} показывает ${n} канал`)
    }

}

class Conditioner extends Switch {                                      // Кондиционер
    constructor(title, country, weight, power) {
        super(power);
        this.title = title;
        this.country = country;
        this.weight = weight + ' kg';
    }

    selectMode(mode) {
        console.log(`Переключение кондиционера ${this.title} в режим ${mode}`)
    }
}

class Washer extends Switch {                                          // Стиральная машинка
    constructor(title, country, max_load, power) {
        super(power);
        this.title = title;
        this.country = country;
        this.max_load = max_load;
    }

    loadingLevel(kg) {
        if (kg <= this.max_load) {
            console.log(`Стиральная машинка ${this.title} загружена на ${kg} кг.`)
        } else {
            console.log(`В этой стиральной машинке максимальная загрузка ${this.max_load} кг, а вы положили ${kg} кг.`)
        }
    }
}

let tvSony = new TV('Sony', 42, 50000)
let condLG = new Conditioner('LG', 'South Korea', 25)
let washSamsung = new Washer('Samsung', 'South Korea', 10)


console.log(tvSony)
tvSony.switchChannel(5)
console.log('--------------------')
console.log(condLG)
condLG.selectMode('вентиляция')
console.log('--------------------')
console.log(washSamsung)
washSamsung.loadingLevel(10)
