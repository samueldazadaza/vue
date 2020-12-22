const app = new Vue({
    el: '#app', //dentro de este id se trabajara con vue
    data: { //abrir otro objeto
        titulo: 'hola mundo con vue',
        frutas: [ //contruyendo objetos dentro de array dentro de llaves
            {nombre:'pera', cantidad:10},
            {nombre:'manzana', cantidad:0},
            {nombre:'platano', cantidad:11},
        ],
    }
})