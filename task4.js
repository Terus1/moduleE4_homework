function Switch(power) {                                            //Выключатель
    this.power = true
}

Switch.prototype.turn_on = function() {
    console.log(`Включен ${this.power = true}`)                       //Включить
}
Switch.prototype.turn_off = function() {
    console.log(`Выключен ${this.power = false}`)                     //Выключить
}


function TV(title, diagonal, price) {                                 //Телевизор
    this.title = title
    this.diagonal = diagonal
    this.price = price

}

TV.prototype = new Switch()
TV.prototype.switchChannel = function(n) {
    console.log(`Теперь телевизор ${this.title} показывает ${n} канал`)
}

function Conditioner(title, country, weight) {                      //Кондиционер
    this.title = title
    this.country = country
    this.weight = weight
}

Conditioner.prototype = new Switch()
Conditioner.prototype.selectMode = function(mode) {
    console.log(`Переключение кондиционера ${this.title} в режим ${mode}`)
}

function Washer(title, country, max_load) {                        //Стиральная машинка
    this.title = title
    this.country = country
    this.max_load = max_load
}

Washer.prototype = new Switch()
Washer.prototype.loadingLevel = function(kg) {
    if (kg <= this.max_load) {
        console.log(`Стиральная машинка ${this.title} загружена на ${kg} кг.`)
    } else {
        console.log(`В этой стиральной машинке максимальная загрузка ${this.max_load} кг, а вы положили ${kg} кг.`)
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
