const cat = {
    family: 'feline', //Семейство кошачьих
    squad: 'predatory' //Отряд хищных
}

const barsik = Object.create(cat)

barsik.name = 'Barsik'
barsik.age = 5
barsik.breed = 'British'
barsik.color = 'Grey'

function own_prop_object(obj) {
    for (let key in obj) {
        if (obj.hasOwnProperty(key)){
            console.log(key)
        }
    }
}


own_prop_object(barsik)
